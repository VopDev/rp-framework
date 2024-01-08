-- [ Code ] --

-- [ Events ] --

RegisterNetEvent('mercy-threads/entered-vehicle', function()
    local Vehicle = GetVehiclePedIsIn(PlayerPedId())
    if GetEntityModel(Vehicle) ~= GetHashKey("nspeedo") then return end

    if exports['mercy-phone']:IsJobCenterTaskActive('delivery', 2) then
        TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 2, true)
        exports['76b-ui']:Show("Delivery Driver", "Head to the assigned store location.")
    end
end)

RegisterNetEvent('mercy-jobs/client/delivery/grab-goods', function()
    if Jobs.Delivery.HasPackage then return end
    Jobs.Delivery.HasPackage = true

    exports['mercy-assets']:AttachProp("Box")

    FunctionsModule.RequestAnimDict("anim@heists@box_carry@")
    Citizen.CreateThread(function()
        while Jobs.Delivery.HasPackage do
            if not IsEntityPlayingAnim(PlayerPedId(), "anim@heists@box_carry@", "idle", 3) then
                TaskPlayAnim(PlayerPedId(), "anim@heists@box_carry@", "idle", 2.0, 2.0, -1, 51, 0, false, false, false)
            end

            Citizen.Wait(100)
        end

        StopAnimTask(PlayerPedId(), "anim@heists@box_carry@", "idle", 1.0)
    end)
end)

RegisterNetEvent('mercy-jobs/client/delivery/deliver-goods', function()
    if not Jobs.Delivery.HasPackage then return end
    Jobs.Delivery.HasPackage = false

    exports['mercy-ui']:ProgressBar('Delivering Package..', math.random(700, 1300), false, false, true, false, function(DidComplete)
        if DidComplete then
            if exports['mercy-phone']:IsJobCenterTaskActive('delivery', 4) then
                TriggerEvent('mercy-phone/client/jobcenter/request-task-update', 4, 1)
                --local TaskData = JobCenter.CurrentJobTasks.Tasks[tonumber(TaskId + 1)]
                --exports['76b-ui']:Show(TaskData.Text .. (TaskData.ExtraRequired ~= nil and (' (%s/%s)'):format(TaskData.ExtraDone, TaskData.ExtraRequired)))
            end

            StopAnimTask(PlayerPedId(), "anim@heists@box_carry@", "idle", 1.0)
            exports['mercy-assets']:RemoveProps("Box")
        end
    end)
end)

RegisterNetEvent('mercy-jobs/client/delivery/return-veh', function(Data, Entity)
    --VehicleModule.DeleteVehicle(Entity)
    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 5, true)
end)

RegisterNetEvent('mercy-phone/client/jobcenter/on-job-start', function(Job, Leader)
    if Job ~= 'delivery' then return end
    if Leader ~= PlayerModule.GetPlayerData().CitizenId then return end

    Citizen.CreateThread(function()
        local ShowingAnything = false
        while exports['mercy-phone']:IsJobCenterTaskActive('delivery', 1) do
            DrawMarker(20, 929.94, -1249.29, 26.7, 0, 0, 0, 180.0, 0, 0, 0.5, 0.5, 0.5, 138, 43, 226, 150, true, true, false, false, false, false, false)
            if #(GetEntityCoords(PlayerPedId()) - vector3(929.94, -1249.29, 26.7)) < 30 then
                if not ShowingAnything then
                    ShowingAnything = true
                    exports['76b-ui']:Show("Delivery Driver", "[E] Rent a delivery vehicle.")
                end
                if IsControlJustPressed(0, 38) then
                    EventsModule.TriggerServer('mercy-jobs/server/rent-delivery') -- $100 rent delivery vehicle
                end
            
            elseif ShowingAnything then
                ShowingAnything = false
                exports['mercy-ui']:HideInteraction()
                exports['76b-ui']:Close()
            end

            Citizen.Wait(4)
        end
    end)
end)

RegisterNetEvent('mercy-phone/client/jobcenter/dev-rented', function(Job)
    SpawnDeliveryVehicle()
end)

RegisterNetEvent('mercy-phone/client/jobcenter/job-tasks-done', function(Job, Leader)
    if Job ~= 'delivery' then return end
    Jobs.Delivery.Location = nil

    if Jobs.Delivery.HasPackage then
        exports['mercy-assets']:RemoveProps("Box")
    end

    Jobs.Delivery.HasPackage = false
    StopAnimTask(PlayerPedId(), "anim@heists@box_carry@", "idle", 1.0)
    FunctionsModule.ClearCustomGpsRoute()
    exports['76b-ui']:Show("Delivery Driver", "Return to the depot to pick up a new load.")
end)

RegisterNetEvent('mercy-phone/client/jobcenter/on-crash', function(Job)
    if Job ~= 'delivery' then return end
    Jobs.Delivery.Location = nil

    if Jobs.Delivery.HasPackage then
        exports['mercy-assets']:RemoveProps("Box")
    end

    Jobs.Delivery.HasPackage = false
    StopAnimTask(PlayerPedId(), "anim@heists@box_carry@", "idle", 1.0)
    FunctionsModule.ClearCustomGpsRoute()
end)


RegisterNetEvent('mercy-phone/client/jobcenter/on-task-done', function(Job, FinishedTaskId, NextTaskId, Leader)
    if Job ~= 'delivery' then return end

    if Leader == PlayerModule.GetPlayerData().CitizenId then
        if NextTaskId == 3 then
            Citizen.CreateThread(function()
                while exports['mercy-phone']:IsJobCenterTaskActive('delivery', 3) do
                    if Jobs.Delivery == nil then return end
                    if Jobs.Delivery.Location == nil then return end
                
                    local Coords = GetEntityCoords(PlayerPedId())
                    if #(Coords - Jobs.Delivery.Location) < 25.0 then
                        TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 3, true)
                        exports['76b-ui']:Show("Delivery Driver", "Deliver the goods to the store's backroom.")
                    end
    
                    Citizen.Wait(100)
                end
            end)            
        end
    end

    if NextTaskId == 3 then
        FunctionsModule.CreateCustomGpsRoute({
            { Coords = GetEntityCoords(PlayerPedId()) },
            { Coords = Jobs.Delivery.Location }
        }, true)
    elseif NextTaskId == 5 then
        exports['76b-ui']:Show("Delivery Driver", "Return to the depot to pickup a new load.")
        FunctionsModule.CreateCustomGpsRoute({
            { Coords = GetEntityCoords(PlayerPedId()) },
            { Coords = vector3(927.02, -1232.79, 25.58) }
        }, true)
    end
end)

-- [ Functions ] --

function SpawnDeliveryVehicle()
    if not VehicleModule.CanVehicleSpawnAtCoords(vector3(911.99, -1220.71, 25.32), 1.6) then return exports['mercy-ui']:Notify("delivery-error", "Something is in the way..", "error") end
    
    exports['mercy-ui']:HideInteraction()
    TriggerEvent('mercy-phone/client/jobcenter/request-task-success', 1, true)
    exports['76b-ui']:Show("Delivery Driver", "Get in your delivery vehicle.")
    if FunctionsModule.RequestModel('nspeedo') then
        local Coords = { X = 911.99, Y = -1220.71, Z = 25.32, Heading = 182.96 }
        local Plate = 'DELIV' .. math.random(111, 999)
        local Vehicle = VehicleModule.SpawnVehicle('nspeedo', Coords, Plate, false)
        SetVehicleLivery(Vehicle['Vehicle'], 12)
        if Vehicle ~= nil then
            Citizen.SetTimeout(500, function()
                exports['mercy-vehicles']:SetVehicleKeys(Plate, true, false)
                exports['mercy-vehicles']:SetFuelLevel(Vehicle.Vehicle, 100)
                VehicleModule.SetVehicleNumberPlate(Vehicle.Vehicle, Plate)
            end)
        end

    end
end

exports("NearDeliveryStore", function()
    if Jobs.Delivery == nil then return false end
    if Jobs.Delivery.Location == nil then return false end

    local Coords = GetEntityCoords(PlayerPedId())
    if #(Coords - Jobs.Delivery.Location) < 5.0 then
        return true
    end

    return false
end)