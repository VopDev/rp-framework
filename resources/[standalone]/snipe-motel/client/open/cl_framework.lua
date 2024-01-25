if Config.Framework ~= "other" then
    
    RegisterNetEvent(Config.FrameworkTriggers[Config.Framework].PlayerLoaded, function()
        PlayerLoaded()

        local isInRoom = lib.callback.await("snipe-apartments:server:checkIsInRoom", false)
        if isInRoom then
            DoScreenFadeIn(500)
            Wait(1000)
            SetEntityCoords(PlayerPedId(), Config.LobbyCoords.x, Config.LobbyCoords.y, Config.LobbyCoords.z)
            SetEntityHeading(PlayerPedId(), Config.LobbyCoords.w)
            DoScreenFadeIn(500)
        end
    end)


    RegisterNetEvent(Config.FrameworkTriggers[Config.Framework].PlayerUnload, function()
        lib.callback.await("snipe-motel:server:playerUnloaded", false)
        CompleteCleanup()
    end)
end

if Config.Framework == "other" then
    CreateThread(function()
        while true do
            Wait(0)
            if NetworkIsSessionStarted() then
                PlayerLoaded()

                local isInRoom = lib.callback.await("snipe-apartments:server:checkIsInRoom", false)
                if isInRoom then
                    DoScreenFadeIn(500)
                    Wait(1000)
                    SetEntityCoords(PlayerPedId(), Config.LobbyCoords.x, Config.LobbyCoords.y, Config.LobbyCoords.z)
                    SetEntityHeading(PlayerPedId(), Config.LobbyCoords.w)
                    DoScreenFadeIn(500)
                end
                break
            end
        end
    end)
end