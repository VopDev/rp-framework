

Citizen.CreateThread(function()
while true do
        Citizen.Wait(4)

    exports['mercy-ui']:AddEyeEntry(GetHashKey("gr_prop_gr_bench_04b"), {
    Type = 'Model',
    Model = 'gr_prop_gr_bench_04b',
    SpriteDistance = 10.0,
    Distance = 5.0,
    Options = {
        {
            Name = 'motel_basic_crafting',
            Label = 'Access Bench',
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

    exports['mercy-ui']:AddEyeEntry(GetHashKey("gr_prop_gr_bench_01b"), {
        Type = 'Model',
        Model = 'gr_prop_gr_bench_01b',
        SpriteDistance = 10.0,
        Distance = 5.0,
        Options = {
            {
                Name = 'motel_basic_crafting',
                Label = 'Access Bench',
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


end
Citizen.Wait(4)
end)