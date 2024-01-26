

Citizen.CreateThread(function()
while true do
        Citizen.Wait(4)
    exports['mercy-ui']:AddEyeEntry(GetHashKey("rop_toolchest_05"), {
    Type = 'Model',
    Model = 'rop_toolchest_05',
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
end
Citizen.Wait(4)
end)