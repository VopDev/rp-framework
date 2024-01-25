local spawnedEntity = {}

local function CanOpenMotelMenu()
    -- here if you want to lock it to a job/gang/etc that they can access this menu, you can add that here.
    --  (NO SUPPORT WILL BE GIVEN TO INCORPORATE OTHER PAID SCRIPTS!!!)
    return true
end

local function onNearbyPed(point)
    if point.isClosest then
        SetDrawOrigin(point.coords.x, point.coords.y, point.coords.z + 0.4)
        DrawSprite(Sprites["select"].textDict, Sprites["select"].textName, 0, 0, Sprites["select"].width, Sprites["select"].height, 0, 255, 255,255, 500)
        ClearDrawOrigin()
        if IsControlJustPressed(0, 38) then
            if not CanOpenMotelMenu() then return end
            OpenMotelMenu()
        end
    end
end

CreateThread(function()
    for k,v in pairs(Config.PedLocations) do
        local point = lib.points.new({
            coords = v.coords,
            distance = 5.0,
            nearby = onNearbyPed
        })
    end
end)

local function SpawnPed(data)
    while not HasStreamedTextureDictLoaded("motel") do
        RequestStreamedTextureDict("motel", false)
        Wait(0)
    end
    RequestModel(data.model)
    while not HasModelLoaded(data.model) do
        Wait(0)
    end
    local entity = CreatePed(0, GetHashKey(data.model), data.coords.x, data.coords.y, data.coords.z - 1.0, data.coords.w,  false, false)
    FreezeEntityPosition(entity, true)
    SetEntityInvincible(entity, true)
    SetBlockingOfNonTemporaryEvents(entity, true)
    SetEntityHeading(entity, data.coords.w)
    return entity
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000)
        local pos = GetEntityCoords(PlayerPedId())
        for k, v in pairs(Config.PedLocations) do
            if #(pos - vector3(v.coords.x, v.coords.y, v.coords.z)) < 50.0 then
                if spawnedEntity[k] == nil or not DoesEntityExist(spawnedEntity[k]) then
                    spawnedEntity[k] = SpawnPed(v)
                end
            else
                if spawnedEntity[k] ~= nil and DoesEntityExist(spawnedEntity[k]) then
                    DeleteEntity(spawnedEntity[k])
                end
            end
        end
    end
end)

