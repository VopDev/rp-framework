CallbackModule, PlayerModule, FunctionsModule, DatabaseModule, EventsModule = nil, nil, nil, nil, nil

-- [ Code ] --

local _Ready = false
AddEventHandler('Modules/server/ready', function()
    TriggerEvent('Modules/server/request-dependencies', {
        'Callback',
        'Player',
        'Functions',
        'Database',
        'Commands',
        'Events',
    }, function(Succeeded)
        if not Succeeded then return end
        CallbackModule = exports['mercy-base']:FetchModule('Callback')
        PlayerModule = exports['mercy-base']:FetchModule('Player')
        FunctionsModule = exports['mercy-base']:FetchModule('Functions')
        DatabaseModule = exports['mercy-base']:FetchModule('Database')
        CommandsModule = exports['mercy-base']:FetchModule('Commands')
        EventsModule = exports['mercy-base']:FetchModule('Events')
        _Ready = true
    end)
end)


QBCore, ESX = nil, nil
if Config.Framework == "qb" then
    QBCore = exports['qb-core']:GetCoreObject()
elseif Config.Framework == "esx" then
    ESX = exports['es_extended']:getSharedObject()
end

function getPlayerIdentifier(id)
    if Config.Framework == "qb" then
        local Player = QBCore.Functions.GetPlayer(tonumber(id))
        if Player ~= nil then
            return Player.PlayerData.citizenid
        end
    elseif Config.Framework == "esx" then
        local Player = ESX.GetPlayerFromId(tonumber(id))
        if Player ~= nil then
            return Player.identifier
        end
    else
        local identifier = GetPlayerIdentifiers(id)
        -- get the license
        for _, v in pairs(identifier) do
            if string.find(v, "license") then
                return v
            end
        end
    end
end

function RemoveMoney(source, amount)
    if Config.Framework == "qb" then
        local Player = QBCore.Functions.GetPlayer(tonumber(source))
        if Player ~= nil then
            if Player.Functions.RemoveMoney(Config.MoneyType, amount) then
                return true
            else
                return false
            end
        end
    elseif Config.Framework == "esx" then
        local Player = ESX.GetPlayerFromId(tonumber(source))
        if Player ~= nil then
            if Player.removeMoney(amount) then
                return true
            else
                return false
            end
        end
    elseif Config.Framework == "other" then
        local Player = PlayerModule.GetPlayerBySource(source)
        if Player.Functions.RemoveMoney("Cash", amount) then
            return true
        else
            return false
        end
    end
end

function AddMoney(source, amount)
    if Config.Framework == "qb" then
        local Player = QBCore.Functions.GetPlayer(tonumber(source))
        if Player ~= nil then
            Player.Functions.AddMoney(Config.MoneyType, amount)
        end
        
    elseif Config.Framework == "esx" then
        local Player = ESX.GetPlayerFromId(tonumber(source))
        if Player ~= nil then
            Player.addMoney(amount)
        end
    elseif Config.Framework == "other" then
        local Player = PlayerModule.GetPlayerBySource(Source)
        if Player ~= nil then
        Player.Functions.AddMoney("Cash", amount)
        end
    end
end

