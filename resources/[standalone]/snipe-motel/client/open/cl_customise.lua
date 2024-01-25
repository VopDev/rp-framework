

function ShowNotification(msg, type)
    lib.notify({description = msg, type = type})
end

-- this function runs in thread when near the edit point area
function onNearby(point)
    if point.isClosest and point.currentDistance < 1.2 and IsControlJustReleased(0, 38) then
        OpenStashOutfitOptions(point.dataInfo)
    end
    if point.isClosest and point.currentDistance < 5.0 then
        SetDrawOrigin(point.coords.x, point.coords.y, point.coords.z + 0.4)
        DrawSprite(Sprites["edit"].textDict, Sprites["edit"].textName, 0, 0, Sprites["edit"].width, Sprites["edit"].height, 0, 255, 255,255, 500)
        ClearDrawOrigin()
    end
end

-- this function runs in thread when near the edit stash point
function onNearbyStash(point)
    if point.isClosest and point.currentDistance < 1.2 and IsControlJustReleased(0, 38) then
        OpenStash(point.stashId)
    end
    if point.isClosest and point.currentDistance < 5.0 then
        SetDrawOrigin(point.coords.x, point.coords.y, point.coords.z + 0.4)
        DrawSprite(Sprites["stash"].textDict, Sprites["stash"].textName, 0, 0, Sprites["stash"].width, Sprites["stash"].height, 0, 255, 255,255, 500)
        ClearDrawOrigin()
    end
end
-- this function runs in thread when near the edit outfit point
function onNearByOutfit(point)
    if point.isClosest and point.currentDistance < 1.2 and IsControlJustReleased(0, 38) then
        OpenOutfit()
    end
    if point.isClosest and point.currentDistance < 5.0 then
        SetDrawOrigin(point.coords.x, point.coords.y, point.coords.z + 0.4)
        DrawSprite(Sprites["clothing"].textDict, Sprites["clothing"].textName, 0, 0, Sprites["clothing"].width, Sprites["clothing"].height, 0, 255, 255,255, 500)
        ClearDrawOrigin()
    end
end

-- triggered once you enter elevator
function onEnterElevator(self)
    local floorNumber, elevatorNumber = extractFloorNumbers(self.name)
    currentFloor = tonumber(floorNumber)
    currentElevator = tonumber(elevatorNumber)
    inElevator = true
    lib.showTextUI("[E] Elevator")
    CreateThread(function()
        while inElevator do
            if IsControlJustReleased(0, 38) then
                OpenElevatorMenu(currentFloor, currentElevator)
            end
            Wait(0)
        end
    end)
end

-- triggered once you leave elevator
function onExitElevator(self)
    lib.hideTextUI()
    inElevator = false
end

    
CreateThread(function()
    coords = vec3(-701.84, -2267.54, 13.46)
    blip = AddBlipForCoord(coords.x, coords.y, coords.z)
    SetBlipSprite(blip, 183)
    SetBlipColour(blip, 3)
    SetBlipScale(blip, 0.8)
    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString("Opium Nights")
    EndTextCommandSetBlipName(blip)
end)

RegisterCommand("checkroomnumber", function()
    if not currentPlayerRoomNumber then
        ShowNotification("You dont have an assigned room!", "error")
        return 
    end
    ShowNotification("Your current room number is: "..currentPlayerRoomNumber, "info")
end)
