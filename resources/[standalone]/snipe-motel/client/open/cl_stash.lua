PlayerModule, EventsModule, FunctionModule, VehicleModule, BlipModule, EntityModule, KeybindsModule = nil
PlayerData = {}

AddEventHandler('Modules/client/ready', function()
    TriggerEvent('Modules/client/request-dependencies', {
        'Player',
		'Events',
        'Functions',
        'Vehicle',
        'BlipManager',
        'Callback',
		'Entity',
		'Keybinds',
    }, function(Succeeded)
        if not Succeeded then return end
        PlayerModule = exports['mercy-base']:FetchModule('Player')
        EventsModule = exports['mercy-base']:FetchModule('Events')
        FunctionModule = exports['mercy-base']:FetchModule('Functions')
        VehicleModule = exports['mercy-base']:FetchModule('Vehicle')
        BlipModule = exports['mercy-base']:FetchModule('BlipManager')
        CallbackModule = exports['mercy-base']:FetchModule('Callback')
		EntityModule = exports['mercy-base']:FetchModule("Entity")
		KeybindsModule = exports['mercy-base']:FetchModule("Keybinds")
		InitHelicam() InitAlpr()
    end)
end)

function OpenStash(stash_id)
    if Config.Inventory == "qb" or Config.Inventory == "qs" then
        TriggerServerEvent("inventory:server:OpenInventory", "stash", "motel_stash_"..stash_id, {
            maxweight = Config.StashSize,
            slots = Config.StashSlots,
        })
        TriggerEvent("inventory:client:SetCurrentStash", "motel_stash_"..stash_id)
    elseif Config.Inventory == "ox" then
        TriggerServerEvent("snipe-apartments:server:registerStash", "motel_stash_"..stash_id, "ox")
        exports.ox_inventory:openInventory("stash", "motel_stash_"..stash_id)
    elseif Config.Inventory == "mf" then
        TriggerServerEvent("snipe-apartments:server:registerStash", "motel_stash_"..stash_id, "mf")
        exports['mf-inventory']:openOtherInventory("motel_stash_"..stash_id)
    elseif Config.Inventory == "codem" then
        exports["codem-inventory"]:OpenStash("motel_stash_"..stash_id, Config.StashSize, Config.StashSlots)
    elseif Config.Inventory == "other" then
        if exports['mercy-inventory']:CanOpenInventory() then
			EventsModule.TriggerServer('mercy-inventory/server/open-other-inventory', "motel_stash_"..stash_id, 'Stash', Config.StashSlots, Config.StashSize)
	    end
    end
    -- elseif Config.Inventory == "esx" then
    --     TriggerEvent("esx_inventoryhud:openStash", "apartment-" .. tostring(roomNumber))
    -- end
end