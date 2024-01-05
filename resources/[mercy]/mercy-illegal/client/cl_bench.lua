local InsideBenchContainer = false

-- [ Code ] --

-- [ Events ] --

RegisterNetEvent('mercy-polyzone/client/enter-polyzone', function(PolyData, Coords)
    if PolyData.name == 'crafting_bench' then
        if not InsideBenchContainer then
            InsideBenchContainer = true
        end
    else
        return
    end
end)

RegisterNetEvent('mercy-polyzone/client/leave-polyzone', function(PolyData, Coords)
    if PolyData.name == 'crafting_bench' then
        if InsideBenchContainer then
            InsideBenchContainer = false
        end
    else
        return
    end
end)

RegisterNetEvent('mercy-illegal/client/open-crafting-bench', function()
   -- if IsContainerWhitelisted() then
        EventsModule.TriggerServer('mercy-inventory/server/open-other-inventory', 'Bench Crafting', 'Crafting', 0, 0, Config.BenchCrafting)
    --else
    --    TriggerEvent('mercy-ui/client/notify', "dontknowhow", "You dont know how to make anything here!", 'error', 3000)
   -- end
end)


-- [ Functions ] --

function IsInsideBenchContainer()
    return InsideBenchContainer
end
exports("IsInsideBenchContainer", IsInsideBenchContainer)

 function IsContainerWhitelisted()
     local CitizenId = PlayerModule.GetPlayerData().CitizenId
     for k, v in pairs(Config.ContainerWhitelist) do
         if CitizenId == v then
             return true
         end
     end
     return false
 end
 exports("IsContainerWhitelisted", IsContainerWhitelisted)