Jobs.Sanitation = {
    HasBag = false,
    FirstZone = nil,
    SecondZone = nil,
}

local InSanitationZone = false

local SingleDumpsters = {
    [GetHashKey('prop_cs_rub_binbag_01')] = true,
    [GetHashKey('prop_ld_binbag_01')] = true,
    [GetHashKey('prop_ld_rub_binbag_01')] = true,
    [GetHashKey('prop_rub_binbag_sd_01')] = true,
    [GetHashKey('prop_rub_binbag_sd_02')] = true,
    [GetHashKey('prop_cs_street_binbag_01')] = true,
    [GetHashKey('p_binbag_01_s')] = true,
    [GetHashKey('ng_proc_binbag_01a')] = true,
    [GetHashKey('p_rub_binbag_test')] = true,
    [GetHashKey('prop_rub_binbag_01')] = true,
    [GetHashKey('prop_rub_binbag_04')] = true,
    [GetHashKey('prop_rub_binbag_05')] = true,
    [GetHashKey('bkr_prop_fakeid_binbag_01')] = true,
    [GetHashKey('hei_prop_heist_binbag')] = true,
    [GetHashKey('prop_rub_binbag_01b')] = true,
    [GetHashKey('prop_rub_binbag_03')] = true,
    [GetHashKey('prop_rub_binbag_03b')] = true,
    [GetHashKey('prop_rub_binbag_06')] = true,
    [GetHashKey('prop_rub_binbag_08')] = true,
    [GetHashKey('ch_chint10_binbags_smallroom_01')] = true,
    [GetHashKey('prop_cs_bin_01')] = true,
    [GetHashKey('prop_cs_bin_03')] = true,
    [GetHashKey('prop_bin_08a')] = true,
    [GetHashKey('prop_bin_08open')] = true,
}

local Dumpsters = {
    'prop_dumpster_01a',
    'prop_dumpster_02a',
    'prop_dumpster_02b',
    'prop_dumpster_3a',
    'prop_dumpster_4a',
    'prop_dumpster_4b',
    'prop_cs_bin_01',
    'prop_cs_bin_03',
    'prop_bin_08a',
    'prop_bin_08open',
    -- Bags
    'prop_cs_rub_binbag_01',
    'prop_ld_binbag_01',
    'prop_ld_rub_binbag_01',
    'prop_rub_binbag_sd_01',
    'prop_rub_binbag_sd_02',
    'prop_cs_street_binbag_01',
    'p_binbag_01_s',
    'ng_proc_binbag_01a',
    'p_rub_binbag_test',
    'prop_rub_binbag_01',
    'prop_rub_binbag_04',
    'prop_rub_binbag_05',
    'bkr_prop_fakeid_binbag_01',
    'hei_prop_heist_binbag',
    'prop_rub_binbag_01b',
    'prop_rub_binbag_03',
    'prop_rub_binbag_03b',
    'prop_rub_binbag_06',
    'prop_rub_binbag_08',
    'ch_chint10_binbags_smallroom_01',
}

-- [ Code ] --

-- [ Threads ] --

Citizen.CreateThread(function()
    exports['mercy-ui']:AddEyeEntry("sanitation_exchange_ped", {
        Type = 'Entity',
        EntityType = 'Ped',
        SpriteDistance = 10.0,
        Distance = 1.5,
        Position = vector4(-355.69, -1556.31, 24.17, 178.6),
        Model = 's_m_y_garbage',
        Options = {
            {
                Name = 'exchange_recyclables',
                Icon = 'fas fa-circle',
                Label = 'Exchange Recyclables',
                EventType = 'Client',
                EventName = 'mercy-jobs/client/sanitation/exchange-recyclables',
                EventParams = {},
                Enabled = function(Entity) return true end,
            },
        }
    })

    -- Trash Interactions
    for k, v in pairs(Dumpsters) do
        exports['mercy-ui']:AddEyeEntry(GetHashKey(v), {
            Type = 'Model',
            Model = v,
            SpriteDistance = 3.0,
            Options = {
                {
                    Name = 'sanitation_pickup_trash',
                    Icon = 'fas fa-circle',
                    Label = 'Pickup Trash',
                    EventType = 'Client',
                    EventName = 'mercy-jobs/client/sanitation/pickup-trash',
                    EventParams = '',
                    Enabled = function(Entity)
                        return (exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 4) or exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 6))
                    end,
                }
            }
        })
    end
end)

-- [ Events ] --

RegisterNetEvent('mercy-threads/entered-vehicle', function()
    local Vehicle = GetVehiclePedIsIn(PlayerPedId())
    if GetEntityModel(Vehicle) ~= GetHashKey("trash") then return end

    if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 2) then
        TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 2, true)
        exports['76b-ui']:Show("Sanitation Worker", "Head to your assigned area.")
    end
end)

RegisterNetEvent('mercy-phone/client/jobcenter/on-job-start', function(Job, Leader)
    if Job ~= 'sanitation' then return end

    Citizen.CreateThread(function()
        local ShowingAnything = false
        local CitizenId = PlayerModule.GetPlayerData().CitizenId
        while exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 1) do
            DrawMarker(20, -352.17, -1545.7, 28.9, 0, 0, 0, 180.0, 0, 0, 0.5, 0.5, 0.5, 138, 43, 226, 150, true, true, false, false, false, false, false)
        
                if #(GetEntityCoords(PlayerPedId()) - vector3(vector3(-349.37, -1541.47, 27.72))) < 30 then
                    if not ShowingAnything then
                        ShowingAnything = true
                        exports['76b-ui']:Show("Sanitation Worker", "[E] Rent a sanitation vehicle.")
                    end
                    if IsControlJustPressed(0, 38) then
                        EventsModule.TriggerServer('mercy-jobs/server/rent-sani') -- $100 rent delivery vehicle
                    end
                elseif ShowingAnything then
                    ShowingAnything = false
                    exports['76b-ui']:Close()
                end
 

            Citizen.Wait(4)
        end
    end)
end)

RegisterNetEvent('mercy-phone/client/jobcenter/sani-rented', function(Job)
    SpawnSaniVehicle()
end)

function SpawnSaniVehicle()
    if not VehicleModule.CanVehicleSpawnAtCoords(vector3(-316.06, -1536.58, 27.37), 1.6) then return exports['mercy-ui']:Notify("delivery-error", "Something is in the way..", "error") end
    
    exports['mercy-ui']:HideInteraction()
    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 1, true)
    exports['76b-ui']:Show("Delivery Driver", "Get in your sanitation vehicle.")
    if FunctionsModule.RequestModel('trash') then
        local Coords = { X = -316.06, Y = -1536.58, Z = 27.37, Heading = 335.97 }
        local Plate = 'SANI' .. math.random(0000, 9999)
        local Vehicle = VehicleModule.SpawnVehicle('trash', Coords, Plate, false)
        if Vehicle ~= nil then
            Citizen.SetTimeout(500, function()
                exports['mercy-vehicles']:SetVehicleKeys(Plate, true, false)
                exports['mercy-vehicles']:SetFuelLevel(Vehicle.Vehicle, 100)
                VehicleModule.SetVehicleNumberPlate(Vehicle.Vehicle, Plate)
            end)
        end

    end
end



RegisterNetEvent('mercy-phone/client/jobcenter/on-task-done', function(Job, FinishedTaskId, NextTaskId, Leader)
    if Job ~= 'sanitation' then return end

    if Leader == PlayerModule.GetPlayerData().CitizenId then
        if FinishedTaskId == 2 or FinishedTaskId == 4 then
            Citizen.SetTimeout(250, function()
                Citizen.CreateThread(function()
                    while exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 3) or exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 4) or exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 5) or exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 6) do
                        local Coords = GetEntityCoords(PlayerPedId())
                        local Zone = GetLabelText(GetNameOfZone(Coords.x, Coords.y, Coords.z))
                        
                        if FinishedTaskId == 2 then
                            if Zone == Config.SanitationZones[Jobs.Sanitation.FirstZone].Label then
                                if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 3) then
                                    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 3, true)
                                end
                                InSanitationZone = true
                            else
                                InSanitationZone = false
                            end
                        else
                            if Zone == Config.SanitationZones[Jobs.Sanitation.SecondZone].Label then
                                if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 5) then
                                    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 5, true)
                                end
                                InSanitationZone = true
                            else
                                InSanitationZone = false
                            end
                        end
    
                        Citizen.Wait(100)
                    end
                end)
            end)
        end
    end
end)

RegisterNetEvent('mercy-jobs/client/sanitation/exchange-recyclables', function(Data, Entity)
    Citizen.SetTimeout(450, function()
        if exports['mercy-inventory']:CanOpenInventory() then
            EventsModule.TriggerServer('mercy-inventory/server/open-other-inventory', 'Exchange Recyclables', 'Crafting', 0, 0, Config.RecyclableCrafting)
        end
    end)
end)

RegisterNetEvent('mercy-jobs/client/sanitation/throw-in-trash', function(Data, Entity)
    if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 4) == false and exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 6) == false then return end
    if Jobs.Sanitation.HasBag == false then exports['mercy-ui']:Notify("sanitation-error", "Where da trash bag?", "error") return end
    
    Jobs.Sanitation.HasBag = false
    TaskTurnPedToFaceEntity(PlayerPedId(), Entity, -1)
    FunctionsModule.RequestAnimDict('missfbi4prepp1')
    TaskPlayAnim(PlayerPedId(), 'missfbi4prepp1', '_bag_throw_garbage_man', 8.0, 8.0, 1100, 48, 0.0, 0, 0, 0)
    FreezeEntityPosition(PlayerPedId(), true)
    CanTakeBag = false

    SetTimeout(1250, function()
        exports['mercy-assets']:RemoveProps('TrashBag')
        TaskPlayAnim(PlayerPedId(), 'missfbi4prepp1', 'exit', 8.0, 8.0, 1100, 48, 0.0, 0, 0, 0)
        FreezeEntityPosition(PlayerPedId(), false)

        if math.random(1, 100) <= 50 then
            EventsModule.TriggerServer('mercy-inventory/server/add-item', "recyclablematerial", math.random(4, 8), false, nil, true, false)
        end

        ClearPedTasks(PlayerPedId())
        if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 4) then
            TriggerEvent('mercy-phone/client/jobcenter/request-task-update', 4, 1)
        elseif exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 6) then
            TriggerEvent('mercy-phone/client/jobcenter/request-task-update', 6, 1)
        end
    end)
end)

RegisterNetEvent('mercy-jobs/client/sanitation/return-veh', function(Data, Entity)
    VehicleModule.DeleteVehicle(Entity)
    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 7, true)
end)

RegisterNetEvent('mercy-jobs/client/sanitation/pickup-trash', function(Data, Entity)
    if Jobs.Sanitation.HasBag then exports['mercy-ui']:Notify("sanitation-error", "You already have a trash bag..", "error") return end
    
    local IsEmpty = CallbackModule.SendCallback("mercy-jobs/server/sanitation/is-dumpster-empty", ObjToNet(Entity))
    if IsEmpty then
        if SingleDumpsters[GetEntityModel(Entity)] then
            exports['mercy-ui']:Notify("sanitation-error", "This bag isn't really here..", "error")
        else
            exports['mercy-ui']:Notify("sanitation-error", "This dumpster looks empty..", "error")
        end
        goto Skip
    end

    exports['mercy-assets']:AttachProp("TrashBag")
    FunctionsModule.RequestAnimDict("missfbi4prepp1")
    Jobs.Sanitation.HasBag = true
    
    Citizen.CreateThread(function()
        while Jobs.Sanitation.HasBag do
            if not IsEntityPlayingAnim(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 3) then
                TaskPlayAnim(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 6.0, -6.0, -1, 49, 0, 0, 0, 0)
            end
            
            Citizen.Wait(500)
        end
    end)

    if SingleDumpsters[GetEntityModel(Entity)] then
        EntityModule.DeleteEntity(Entity)
        TriggerServerEvent('mercy-jobs/server/sanitation/delete-bin-bag', ObjToNet(Entity))
    end

    ::Skip::
end)

RegisterNetEvent('mercy-phone/client/jobcenter/job-tasks-done', function(Job, Leader)
    if Job ~= 'sanitation' then return end
    if Jobs.Sanitation.HasBag then
        if IsEntityPlayingAnim(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 3) then
            StopAnimTask(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 1.0)
        end
        
        exports['mercy-assets']:RemoveProps('TrashBag')
        Jobs.Sanitation.HasBag = false
    end

    if Jobs.Sanitation.FirstZone ~= nil then EventsModule.TriggerServer("mercy-jobs/server/sanitation/set-busy", Jobs.Sanitation.FirstZone) end
    if Jobs.Sanitation.SecondZone ~= nil then EventsModule.TriggerServer("mercy-jobs/server/sanitation/set-busy", Jobs.Sanitation.SecondZone) end

    InSanitationZone = false
    
    Jobs.Sanitation.FirstZone = nil
    Jobs.Sanitation.SecondZone = nil
end)

RegisterNetEvent('mercy-phone/client/jobcenter/on-crash', function(Job)
    if Job ~= 'sanitation' then return end
    if Jobs.Sanitation.HasBag then
        if IsEntityPlayingAnim(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 3) then
            StopAnimTask(PlayerPedId(), 'missfbi4prepp1', '_bag_walk_garbage_man', 1.0)
        end
        
        exports['mercy-assets']:RemoveProps('TrashBag')
        Jobs.Sanitation.HasBag = false
    end

    if Jobs.Sanitation.FirstZone ~= nil then EventsModule.TriggerServer("mercy-jobs/server/sanitation/set-busy", Jobs.Sanitation.FirstZone) end
    if Jobs.Sanitation.SecondZone ~= nil then EventsModule.TriggerServer("mercy-jobs/server/sanitation/set-busy", Jobs.Sanitation.SecondZone) end

    InSanitationZone = false
    
    Jobs.Sanitation.FirstZone = nil
    Jobs.Sanitation.SecondZone = nil
end)

-- [ Functions ] --

function IsInJobZone()
    return InSanitationZone
end
exports('IsInJobZone', IsInJobZone)