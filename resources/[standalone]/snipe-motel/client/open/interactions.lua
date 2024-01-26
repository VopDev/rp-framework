

Citizen.CreateThread(function()
while true do
        Citizen.Wait(4)
    exports['mercy-ui']:AddEyeEntry(GetHashKey("Prop_toolchest_05"), {
    Type = 'Model',
    Model = 'Prop_toolchest_05',
    SpriteDistance = 10.0,
    Distance = 5.0,
    Options = {
        {
            Name = 'motel_crafting',
            Label = 'Motel Crafting',
            EventType = 'Client',
            EventName = 'mercy-ui:Client:EyeTest',
            EventParams = {},
            Enabled = function(Entity)
                if exports['snipe-motel']:isInRoom() then
                    return true
                end
            end,
        }
    }
    })

    exports['mercy-ui']:AddEyeEntry(GetHashKey("v_res_lest_bigscreen"), {
        Type = 'Model',
        Model = 'v_res_lest_bigscreen',
        SpriteDistance = 5.0,
        Options = {
            {
                Name = 'motel_tv_big',
                Icon = 'far fa-file-code',
                Label = 'Change Picture',
                EventType = 'Client',
                EventName = 'mercy-assets/client/change-dui-url',
                Enabled = function(Entity)
                    if exports['snipe-motel']:isInRoom() then
                        return true
                    end
                end,
            }
        }
    })














end
Citizen.Wait(4)
end)