EntityModule, LoggerModule, EventsModule, CallbackModule, BlipModule, PedsModule, FunctionsModule, VehicleModule = nil, nil, nil, nil, nil, nil, nil, nil
Jobs.Delivery = {
    Location = nil,
    HasPackage = false,
}
local _Ready = false
AddEventHandler('Modules/client/ready', function()
    if not _Ready then
        _Ready = true
    end
    TriggerEvent('Modules/client/request-dependencies', {
        'Events',
        'Entity',
        'Logger',
        'Callback',
        'Functions',
        'BlipManager',
        'Player',
        'Vehicle',
        'Peds',
    }, function(Succeeded)
        if not Succeeded then return end
        PlayerModule = exports['mercy-base']:FetchModule('Player')
        BlipModule = exports['mercy-base']:FetchModule('BlipManager')
        EntityModule = exports['mercy-base']:FetchModule("Entity")
        VehicleModule = exports['mercy-base']:FetchModule("Vehicle")
        LoggerModule = exports['mercy-base']:FetchModule('Logger')
        EventsModule = exports['mercy-base']:FetchModule('Events')
        CallbackModule = exports['mercy-base']:FetchModule('Callback')
        FunctionsModule = exports['mercy-base']:FetchModule('Functions')
        PedsModule = exports['mercy-base']:FetchModule('Peds')
    end)
end)

function SetupVehicles()
   
    while not _Ready do
        Citizen.Wait(150)
    end
    local Player = PlayerModule.GetPlayerData()
    -- Delivery Vehicle
    local Coords = { X = 930.62, Y = -1221.35, Z = 25.43, Heading = 181.5 }
    local Plate = 'DELIV000'
    local Vehicle = VehicleModule.SpawnVehicle('nspeedo', Coords, Plate, false)
   
    if Vehicle ~= nil then
        if VehicleModule.CanVehicleSpawnAtCoords(vector3(930.62, -1221.35, 25.43), 1.4) then
        Citizen.SetTimeout(500, function()
            FreezeEntityPosition(Vehicle['Vehicle'], true)
            SetEntityInvincible(Vehicle['Vehicle'], true)
            SetVehicleDoorsLocked(Vehicle['Vehicle'], 3)
            VehicleModule.SetVehicleNumberPlate(Vehicle['Vehicle'], Plate)
            SetVehicleLivery(Vehicle['Vehicle'], 12)
        end)
        end     
        end
 
     -- Sanitation Vehicle
 local Coords2 = { X = -356.41, Y = -1530.78, Z = 27.43, Heading = 270.33 }
 local Plate2 = 'SANI0000'
 local Vehicle2 = VehicleModule.SpawnVehicle('trash', Coords2, Plate2, false)
 
 if Vehicle2 ~= nil then
    if VehicleModule.CanVehicleSpawnAtCoords(vector3(-356.41, -1530.78, 27.43), 1.6) then
    Citizen.SetTimeout(500, function()
        FreezeEntityPosition(Vehicle2['Vehicle'], true)
        SetEntityInvincible(Vehicle2['Vehicle'], true)
        SetVehicleDoorsLocked(Vehicle2['Vehicle'], 3)
        VehicleModule.SetVehicleNumberPlate(Vehicle2['Vehicle'], Plate2)
    end)
    end
    end

end


RegisterNetEvent('mercy-base/client/on-logout', function()
    SetEntityAsMissionEntity(Vehicle)
    DeleteVehicle(Vehicle)
    SetEntityAsNoLongerNeeded(Vehicle)
 SetEntityAsMissionEntity(Vehicle2)
    DeleteVehicle(Vehicle2)
    SetEntityAsNoLongerNeeded(Vehicle2)
end)



RegisterNetEvent('mercy-base/client/on-login', function()
    SetupPeds()
    SetupVehicles()
end)

-- [ Code ] --

-- [ Events ] --

local CanSell = true
RegisterNetEvent('mercy-jobs/client/hand-receipts', function()
    if not CanSell then return end

    EventsModule.TriggerServer('mercy-jobs/server/sell-receipts') 
    CanSell = false
    Citizen.SetTimeout(1000, function()
        CanSell = true
    end)
end)

-- [ Functions ] --

function SetupPeds()
    while not _Ready do
        Citizen.Wait(150)
    end
    exports['mercy-ui']:AddEyeEntry("payment_ped", {
        Type = 'Entity',
        EntityType = 'Ped',
        SpriteDistance = 10.0,
        Distance = 5.0,
        Position = vector4(241.3, 225.13, 105.25, 159.08),
        Model = 'a_m_y_hasjew_01',
        Anim = {
            Dict = "missheistdockssetup1clipboard@base",
            Name = "base"
        },
        Props = {
            {
                Prop = 'prop_notepad_01',
                Bone = 18905,
                Placement = {0.1, 0.02, 0.05, 10.0, 0.0, 0.0},
            },
            {
                Prop = 'prop_pencil_01',
                Bone = 58866,
                Placement = {0.11, -0.02, 0.001, -120.0, 0.0, 0.0},
            },
        },
        Options = {
            {
                Name = 'payment_interaction',
                Icon = 'fas fa-circle',
                Label = 'Receive Paycheck',
                EventType = 'Server',
                EventName = 'mercy-jobs/server/receive-paycheck',
                EventParams = {},
                Enabled = function(Entity)
                    return true
                end,
            },
            {
                Name = 'payment_ticket',
                Icon = 'fas fa-circle',
                Label = 'Hand In Receipts',
                EventType = 'Client',
                EventName = 'mercy-jobs/client/hand-receipts',
                EventParams = {},
                Enabled = function(Entity)
                    if exports['mercy-business']:IsPlayerInBusiness('Burger Shot') or exports['mercy-business']:IsPlayerInBusiness('UwU Café') then
                        return true
                    else
                        return false
                    end
                end,
            }
        }
    })

    exports['mercy-ui']:AddEyeEntry("rentdeliveryvehicle", {
        Type = 'Zone',
        SpriteDistance = 1.0,
        Distance = 4.0,
        ZoneData = {
            Center = vector3(930.82, -1224.59, 25.62),
            Length = 1.2,
            Width = 1.0,
            Data = {
                debugPoly = false,
                heading = 0,
                minZ = 26.14,
                maxZ = 27.94
            },
        },
        Options = {
            {
                Name = 'rentdelivery',
                Icon = 'fas fa-car',
                Label = 'Rent Vehicle ($100)',
                EventType = 'Server',
                EventName = 'mercy-jobs/server/rent-delivery',
                EventParams = '',
                Enabled = function(Entity)
                    if exports['mercy-phone']:IsJobCenterTaskActive('delivery', 1) then
                        return true
                    else
                        return false
                    end
                end,
            }
        }
    })

    exports['mercy-ui']:AddEyeEntry("rentsanivehicle", {
        Type = 'Zone',
        SpriteDistance = 1.0,
        Distance = 6.0,
        ZoneData = {
            Center = vector3(-351.62, -1530.82, 27.71),
            Length = 2.2,
            Width = 2.0,
            Data = {
                debugPoly = false,
                heading = 0,
                minZ = 25.14,
                maxZ = 28.94
            },
        },
        Options = {
            {
                Name = 'rentdelivery',
                Icon = 'fas fa-car',
                Label = 'Rent Vehicle ($100)',
                EventType = 'Server',
                EventName = 'mercy-jobs/server/rent-sani',
                EventParams = '',
                Enabled = function(Entity)
                    if exports['mercy-phone']:IsJobCenterTaskActive('sanitation', 1) then
                        return true
                    else
                        return false
                    end
                end,
            }
        }
    })

    local JobsTable = CallbackModule.SendCallback("mercy-phone/server/jobcenter/get-jobs")
    for k, Job in pairs(JobsTable) do
        exports['mercy-ui']:AddEyeEntry("job_ped_" .. Job['Name'] .. "_" .. k, {
            Type = 'Entity',
            EntityType = 'Ped',
            SpriteDistance = 10.0,
            Position = vector4(Job['Location'].x, Job['Location'].y, Job['Location'].z, Job['Location'].w),
            Model = Job['PedModel'],
            Scenario = Job['Scenario'],
            Anim = Job['Anim'],
            Props = Job['Props'],
            Options = {
                {
                    Name = 'sign_in',
                    Icon = 'fas fa-circle',
                    Label = 'Sign In',
                    EventType = 'Server',
                    EventName = 'mercy-phone/server/jobcenter/check-in',
                    EventParams = Job['Name'],
                    Enabled = function(Entity)
                        if Job['RequiresVPN'] and not exports['mercy-inventory']:HasEnoughOfItem('vpn', 1) then
                            return false
                        end

                        return exports['mercy-phone']:GetCurrentJob() == false
                    end,
                },
                {
                    Name = 'sign_off',
                    Icon = 'fas fa-circle',
                    Label = 'Sign Out',
                    EventType = 'Server',
                    EventName = 'mercy-phone/server/jobcenter/check-out',
                    EventParams = {},
                    Enabled = function(Entity)
                        if Job['RequiresVPN'] and not exports['mercy-inventory']:HasEnoughOfItem('vpn', 1) then
                            return false
                        end

                        return exports['mercy-phone']:GetCurrentJob() ~= false
                    end,
                },
                {
                    Name = 'get_paycheck',
                    Icon = 'fas fa-hand-holding-usd',
                    Label = 'Get Paycheck',
                    EventType = 'Server',
                    EventName = 'mercy-phone/server/jobcenter/request-paycheck',
                    EventParams = {},
                    Enabled = function(Entity)
                        return exports['mercy-phone']:GetPaycheckAmount() > 0
                    end,
                },
            }
        })
    end
end

exports("GetJobTasks", function(Job, GroupLeader)
    local Tasks = FunctionsModule.DeepCopyTable(Config.Tasks[Job])
    local Promise = promise:new()
    if Job == 'sanitation' then
        if GroupLeader == PlayerModule.GetPlayerData().CitizenId then EventsModule.TriggerServer("mercy-jobs/server/set-job-locs", Job, GroupLeader) end
        Citizen.SetTimeout(300, function()
            local Zones = CallbackModule.SendCallback("mercy-jobs/server/get-job-locs", Job, GroupLeader)
            Jobs.Sanitation.FirstZone, Jobs.Sanitation.SecondZone = Zones[1], Zones[2]
            Tasks.Tasks[3].Text = (Tasks.Tasks[3].Text):format(Config.SanitationZones[Zones[1]].Label)
            Tasks.Tasks[5].Text = (Tasks.Tasks[5].Text):format(Config.SanitationZones[Zones[2]].Label)
            Promise:resolve(Tasks)
        end)
    elseif Job == 'delivery' then
        if GroupLeader == PlayerModule.GetPlayerData().CitizenId then EventsModule.TriggerServer("mercy-jobs/server/set-job-locs", Job, GroupLeader) end
        Citizen.SetTimeout(300, function()
            local Location = CallbackModule.SendCallback("mercy-jobs/server/get-job-locs", Job, GroupLeader)
            Jobs.Delivery.Location = Config.DeliveryStores[Location]
            Promise:resolve(Tasks)
        end)
    else
        Promise:resolve(Tasks)
    end

    return Citizen.Await(Promise)
end)