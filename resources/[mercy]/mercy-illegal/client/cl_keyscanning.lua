-- Scanner Code

local isChopping = false
local scannerScaleform = nil
local isDigging = false
local usingScanner = false
local pedSpawned = false
local beepWait = 8000
local scaleformColours = {
    red = {r = 255, g = 10, b = 10},
    yellow = {r = 255, g = 209, b = 67},
    lightblue = {r = 67, g = 200, b = 255},
    green = {r = 0, g = 255, b = 80}
}

local function loadAnimDict(dict)
    if HasAnimDictLoaded(dict) then return end
	RequestAnimDict(dict)
	while not HasAnimDictLoaded(dict) do
		Wait(10)
	end
end

local function loadModel(model)
    if HasModelLoaded(model) then return end
	RequestModel(model)
	while not HasModelLoaded(model) do
		Wait(10)
	end
end

local function setScannerColour(bar, dot)
    if not scannerScaleform then return end
    BeginScaleformMovieMethod(scannerScaleform, "SET_COLOUR")
    -- Bars rgb
    PushScaleformMovieMethodParameterInt(bar.r)
    PushScaleformMovieMethodParameterInt(bar.g)
    PushScaleformMovieMethodParameterInt(bar.b)
    -- Dots rgb
    PushScaleformMovieMethodParameterInt(dot.r)
    PushScaleformMovieMethodParameterInt(dot.g) 
    PushScaleformMovieMethodParameterInt(dot.b)
    EndScaleformMovieMethod()
end

local function updateScaleformBars(dist)
    if not scannerScaleform then return end
    local scaleformDist = nil
    
    for i=1, #Config.bars do
        if dist > Config.bars[i].dist then
            beepWait = Config.bars[i].beepWait
            BeginScaleformMovieMethod(scannerScaleform, "SET_DISTANCE")
            PushScaleformMovieMethodParameterFloat(Config.bars[i].scaleformBars)
            EndScaleformMovieMethod()
            break
        end
    end

    if dist < 2.0 then
        beepWait = 250
        setScannerColour(scaleformColours.green, scaleformColours.green)
    end
end

local function isPedFacingCoords(playerCoords, playerHeading, targetCoords)
    local x = targetCoords.x - playerCoords.x
    local y = targetCoords.y - playerCoords.y

    local targetHeading = GetHeadingFromVector_2d(x, y)
    return math.abs(playerHeading - targetHeading) < 20
end

local function unequipScanner()
    local ped = PlayerPedId()
    SetCurrentPedWeapon(ped, joaat('WEAPON_UNARMED'), true)
    usingScanner = false
end

RegisterNetEvent("togglescanner", function(targetCoords)
    local ped = PlayerPedId()
    local _, pedWeapon = GetCurrentPedWeapon(ped)

    if pedWeapon == joaat(Config.scanner) then
        unequipScanner()
        return
    end

    GiveWeaponToPed(ped, joaat(Config.scanner), 0, true, true)
    usingScanner = true
        
    scannerScaleform = RequestScaleformMovie("digiscanner")

    CreateThread(function()
        while not HasScaleformMovieLoaded(scannerScaleform) do
            Wait(0)
        end
        
        local scaleformRenderName = nil
        local scaleformPos = nil

        if Config.scanner == "WEAPON_METALDETECTOR" then
            scaleformRenderName = "digiscanner_reh"
            scaleformPos = {
                x = 0.21,
                y = 0.35,
                width = 0.36,
                height = 0.7,
            }
        else
            scaleformRenderName = "digiscanner"
            scaleformPos = {
                x = 0.1,
                y = 0.24,
                width = 0.21,
                height = 0.51,
            } 
        end

        if not IsNamedRendertargetRegistered(scaleformRenderName) then
            RegisterNamedRendertarget(scaleformRenderName, 0)
        end
       
        LinkNamedRendertarget(GetWeapontypeModel(joaat(Config.scanner)))
       
        local id = 0
       
        if IsNamedRendertargetRegistered(scaleformRenderName) then
            id = GetNamedRendertargetRenderId(scaleformRenderName)
        end

        local playerCoords = GetEntityCoords(ped)
        local playerHeading = GetEntityHeading(ped)
        local dist = #(playerCoords - vec3(targetCoords.x, targetCoords.y, targetCoords.z))

        if isPedFacingCoords(playerCoords, playerHeading, targetCoords) then
            setScannerColour(scaleformColours.lightblue, scaleformColours.yellow)
        else
            setScannerColour(scaleformColours.red, scaleformColours.red)
        end
        
        updateScaleformBars(dist)

        local timer = GetGameTimer()

        while usingScanner do
            SetTextRenderId(id)
            DrawScaleformMovie(scannerScaleform, scaleformPos.x, scaleformPos.y, scaleformPos.width, scaleformPos.height, 100, 100, 100, 255, 0)
            SetTextRenderId(1)

            if GetGameTimer() - timer > 250 then
                ped = PlayerPedId()
                
                if IsPedInAnyVehicle(ped) then
                    usingScanner = false
                    return
                end
                
                if IsPlayerFreeAiming(PlayerId()) then
                    playerCoords = GetEntityCoords(ped)
                    playerHeading = GetEntityHeading(ped)
                    
                    if isPedFacingCoords(playerCoords, playerHeading, targetCoords) then
                        setScannerColour(scaleformColours.lightblue, scaleformColours.yellow)
                    else
                        setScannerColour(scaleformColours.red, scaleformColours.red)
                    end

                    dist = #(playerCoords - vec3(targetCoords.x, targetCoords.y, targetCoords.z))

                    updateScaleformBars(dist)
                end
    
                timer = GetGameTimer()
            end
            
            Wait(0)

            if dist < 2 and IsPlayerFreeAiming(PlayerId()) then
                if IsControlJustPressed(0, 38) then
                    TriggerEvent("togglescanner")
                    exports["glow_minigames"]:StartMinigame(function(success)
                        if success then
                            print("win")
                        else
                            print("lose")
                        end
                    end, "path")
                end
            end


        end
    end)
end)


AddEventHandler('onResourceStop', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end
    local ped = PlayerPedId()
    local _, pedWeapon = GetCurrentPedWeapon(ped)

    if usingScanner and pedWeapon == joaat(Config.scanner) then
        unequipScanner()
        return
    end
    
end)


CreateThread(function()
    local sleep = 5000
    while true do
        if usingScanner then            
            if IsPlayerFreeAiming(PlayerId()) then
                PlaySoundFrontend(-1, "IDLE_BEEP", "epsilonism_04_soundset", 1)
            end
            Wait(beepWait)
            sleep = 0
        else
            sleep = 5000
        end
        
        Wait(sleep)
    end
end)


--- Chop Code

local randomIndex = math.random(1, #Config.KeyScanLocations)
AssignedChop = Config.KeyScanLocations[randomIndex]



-- Function to pick a random line
function GetAssignedHouse()
    local randomIndex = math.random(1, #Config.KeyScanLocations)
    return Config.KeyScanLocations[randomIndex]
end

local AssignedHouse = 0

RegisterNetEvent('mercy-illegal/assign-scan-house', function()
    AssignedHouse = GetAssignedHouse()
    TriggerEvent("togglescanner", AssignedHouse)
end)


-- Register command to get a random line
RegisterCommand("testchop", function()
    local AssignedHouse = GetChopLocation()
    print(AssignedHouse)
    TriggerEvent("togglescanner", AssignedHouse)
end, false)

RegisterNetEvent('mercy-illegal/use-scanner', function()
    TriggerEvent("togglescanner", AssignedHouse)
end)




