local radio = false
local ppc = false
local ppq = false
local active = false

RegisterNetEvent("np-heists:yacht:heistStart", function()
    TriggerClientEvent("np-heists:yacht:updateGameDuiPanels", source, "override")
    TriggerClientEvent("np-heists:yacht:SetHeistActive", source, true)
end)

RegisterNetEvent("np-heists:yacht:final", function()

        TriggerClientEvent("np-heists:yacht:updateGameDuiPanels", source, "complete")
        TriggerClientEvent("np-doors:change-lock-state", -1, 475, false)
        TriggerClientEvent("np-heists:yacht:SetHeistActive", -1 , false)
end)

RegisterNetEvent("np-heists:yacht:fail", function()

        TriggerClientEvent("np-heists:yacht:updateGameDuiPanels", source, "fail")
        TriggerClientEvent("np-heists:yacht:SetHeistActive", -1 , false)

end)

local envelope = nil

RPC.register("np-heists:yacht:isHeistActive", function(pSource)
   if active then
    return true
   else
    return false
   end  
end)

RPC.register("np-heists:yacht:isActiveTarget", function(pSource, targetId)
    id = targetId.param
    if id == "ld_steam_1" then
        isTarget = true
        envelope = "textbox"
    elseif id == "mf_laptop_1" then
        code = math.random(0000,9999)
        print(code)
        isTarget = true
        --envelope = id["laptop"].code
        envelope = "laptop"
    else
        isTarget = false
    end
    return isTarget, envelope
end)


RegisterNetEvent("np-heists:yacht:searchStash", function(pSource)
    metadata = json.encode({
        PPQ = math.random(0000,9999),
    })
    TriggerClientEvent('player:receiveItem', src, "heistmicroenvelope", false, {}, metadata)
end)

RPC.register("np-heists:yacht:envelopeUsed", function(pSource, pCodigo)
    print("envelope code", pCodigo)
    return pCodigo
end)

RPC.register("np-heists:yacht:laptopCode", function(pSource, pCodigo)
    local src  = source
    local codigo = PCodigo.param
    print("code envelop", codigo)
    TriggerClientEvent("np-heists:yacht:laptopcode", src, codigo)
end)


RPC.register("np-heists:yacht:radioResult", function(pSource, pResult)
    radio = pResult.param
end)

RPC.register("np-heists:yacht:ppcResult", function(pSource, pResult)
    ppc = pResult.param
end)

RPC.register("np-heists:yacht:ppqResult", function(pSource, pResult)
    ppq = pResult.param
end)

RegisterNetEvent("np-heists:yacht:final", function()
    if radio and ppq and ppc then
        TriggerClientEvent("np-heists:yacht:updateGameDuiPanels", source, "complete")
        TriggerClientEvent("np-doors:change-lock-state", -1, 475, false)
        TriggerClientEvent("np-heists:yacht:SetHeistActive", -1 , false)
    end
end)

