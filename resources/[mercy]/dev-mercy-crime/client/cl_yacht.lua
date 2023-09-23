YACHT_HEIST_ACTIVE = false
YACHT_HEIST_SETTINGS = {}
local duiConfs = {}
local env1 = false
local env2 = false
local env3 = false
local heistactive = false
local steam = false
local num1 = math.random(0,9)
local num2 = math.random(0,9)
local num3 = math.random(0,9)
local num4 = math.random(0,9)
local num5 = math.random(0,9)
local num6 = math.random(0,9)
local num7 = math.random(0,9)
local num8 = math.random(0,9)
local num9 = math.random(0,9)
local num10 = math.random(0,9)

function loadAnimDict(dict)
  while (not HasAnimDictLoaded(dict)) do
    RequestAnimDict(dict)
    Citizen.Wait(0)
  end
end

function getContextId(pContext)
  if (not pContext) or (not pContext.zones) or (not pContext.zones["heist_yacht_target"]) or (not pContext.zones["heist_yacht_target"].id) then
    return -1
  end
  return pContext.zones["heist_yacht_target"].id
end


local env = 0
AddEventHandler("np-heists:yacht:targetEntry", function()
    local envchance = math.random(1,10)
    if envchance > 5 then --50% chance to find nothing when searching spots since they dont disappear when searched
  if env == 0 then
  ClearPedTasksImmediately(PlayerPedId())
  TriggerEvent("animation:runtextanim", "search")
  local finished = exports["np-taskbar"]:taskBar(math.random(5000, 10000), "Searching...")

  ClearPedTasksImmediately(PlayerPedId())

  metadata = {
    Passcode = math.random(0000000000,9999999999),
}
TriggerEvent('player:receiveItem',"heistmicroenvelope", 1, {}, metadata)
env = env + 1

elseif env == 1 then
  ClearPedTasksImmediately(PlayerPedId())
  TriggerEvent("animation:runtextanim", "search")
  local finished = exports["np-taskbar"]:taskBar(math.random(5000, 10000), "Searching...")

  ClearPedTasksImmediately(PlayerPedId())

  metadata = {
    Serial = math.random(0000000000,9999999999),
}
TriggerEvent('player:receiveItem',"heistmicroenvelope2", 1, {}, metadata)
env = env + 1

elseif env == 2 then
  ClearPedTasksImmediately(PlayerPedId())
  TriggerEvent("animation:runtextanim", "search")
  local finished = exports["np-taskbar"]:taskBar(math.random(5000, 10000), "Searching...")

  ClearPedTasksImmediately(PlayerPedId())

  metadata = {
    Serial = math.random(0000000000,9999999999),
}
TriggerEvent('player:receiveItem',"heistmicroenvelope3", 1, {}, metadata)
env = env + 1

end


else
  TriggerEvent("DoLongHudText", "You don't manage to find anything of use!", 2)
  end

end)


AddEventHandler("np-heists:setactive", function()
  heistactive = true
  end)
  
  AddEventHandler("np-heists:setnonactive", function()
    heistactive = false
    end)




AddEventHandler("np-heists:yacht:loot", function()

  ClearPedTasksImmediately(PlayerPedId())
  TriggerEvent("animation:runtextanim", "search")
  local finished = exports["np-taskbar"]:taskBar(math.random(5000, 10000), "Searching...")
  ClearPedTasksImmediately(PlayerPedId())

TriggerEvent('player:receiveItem',"casinocaseaccesshalf", 1)
end)

RegisterUICallback("np-ui:yachtheist:openEnvelope", function(data, cb)
  local usedResult = RPC.execute("np-heists:yacht:envelopeUsed", data)
  cb({ data = usedResult, meta = { ok = true, message = 'done' }})
end)

AddEventHandler("np-inventory:itemUsed", function(pItem, pInfo)
  if pItem == "heistmicroenvelope" then
  local info = json.decode(pInfo)


  local input = exports["np-input"]:showInput({
    {
        icon = "wifi",
        label = "Access Code Required",
        name = "yachtenv",
    },

})

if input["yachtenv"] then
    local yachtenv = tonumber(input["yachtenv"])

    if yachtenv == nil then return end
    if yachtenv == info.Passcode then
        TriggerEvent("DoLongHudText", "System Bypassed - 1/3 Access Codes", 1)
        TriggerEvent("inventory:removeItem","heistmicroenvelope",1)
        env1 = true
    else
        TriggerEvent("DoLongHudText", "Hack Detected - Shutdown", 2)
        TriggerEvent("np-heists:setnonactive")
        TriggerServerEvent("np-heists:yacht:fail")
        TriggerEvent("inventory:removeItem","heistmicroenvelope",1)
    end
end

elseif pItem == "heistmicroenvelope2" then
  local info = json.decode(pInfo)
  exports["hacking"]:hacking(
    function() -- success
      TriggerEvent("DoLongHudText", "System Bypassed - 2/3 Access Codes", 1)
      TriggerEvent("inventory:removeItem","heistmicroenvelope2",1)
      env2 = true
    end,
    function() -- failure
      TriggerEvent("DoLongHudText", "Hack Detected - Shutdown", 2)
      TriggerEvent("np-heists:setnonactive")
      TriggerServerEvent("np-heists:yacht:fail")
      TriggerEvent("inventory:removeItem","heistmicroenvelope2",1)
    end)

elseif pItem == "heistmicroenvelope3" then
  local info = json.decode(pInfo)
 exports["memorygame"]:thermiteminigame(8, 3, 4, 10,
                function() -- Success
                  TriggerEvent("DoLongHudText", "System Bypassed - 3/3 Access Codes", 1)
                  --TriggerServerEvent("np-heists:yacht:final")
                  TriggerEvent("np-heists:yacht:flashcode")
                  TriggerEvent("inventory:removeItem","heistmicroenvelope3",1)
                  env3 = true
                  steam = true
                end,
                function() -- failure
                  TriggerEvent("DoLongHudText", "Hack Detected - Shutdown", 2)
                  TriggerEvent("np-heists:setnonactive")
                  TriggerServerEvent("np-heists:yacht:fail")
                  TriggerEvent("inventory:removeItem","heistmicroenvelope3",1)
                end)
end

end)

AddEventHandler("np-heists:yacht:flashcode", function()
  TriggerEvent("np-heists:yacht:updateGameDuiPanels", "code")
  Wait(10000)
  TriggerEvent("np-heists:yacht:updateGameDuiPanels", "codeend")
end)

AddEventHandler("np-heists:yacht:startHeist", function()
  local hasItem = exports["np-inventory"]:hasEnoughOfItem("heistpadyacht", 1, false, true)
  if not hasItem then return end
  TriggerEvent("alert:yachtRobbery")
  loadAnimDict("amb@prop_human_atm@male@idle_a")
  ClearPedTasksImmediately(PlayerPedId())
  TaskPlayAnim(PlayerPedId(), "amb@prop_human_atm@male@idle_a", "idle_b", 1.0, 1.0, -1, 49, 0, 0, 0, 0)
  local finished = exports["np-taskbar"]:taskBar(3000, "Attaching PixelPad")
  ClearPedTasksImmediately(PlayerPedId())
  if finished ~= 100 then return end
  TriggerServerEvent("np-heists:yacht:heistStart")
  TriggerEvent("np-heists:setactive")
  TriggerEvent("np-heists:setactive2")
end)

local code = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8

AddEventHandler("np-heists:yacht:steam", function()
  local input = exports["np-input"]:showInput({
    {
        icon = "diamond",
        label = "Steam Level",
        name = "steamvalue",
    },

})

if input["steamvalue"] then
    local steamvalue = tonumber(input["steamvalue"])

    if steamvalue == nil then return end
    if steamvalue == code then
        TriggerEvent("DoLongHudText", "Correcting the steam has unlocked the door!", 1)
        TriggerServerEvent("np-heists:yacht:final")

    else
        TriggerEvent("DoLongHudText", "The steam settings are incorrect!", 2)

    end
end
end)

RegisterNetEvent("np-heists:yacht:updateGameDuiPanels")
AddEventHandler("np-heists:yacht:updateGameDuiPanels", function(pType, pValue)
  if #(GetEntityCoords(PlayerPedId()) - vector3(-2055.93, -1027.5, 2.59)) > 100 then return end
  Citizen.CreateThread(function()


    local timeoutEnabled = false
    local duiOptions = {
      {
        endLetter = "S",
        endLetterW = "D",
        letter = "F",
        letterC = num1,
        letterX = "",
        tx = "1",
      },
      {
        endLetter = "H",
        endLetterW = "O",
        letter = "I",
        letterC = num2,
        letterX = "B",
        tx = "2",
      },
      {
        endLetter = "U",
        endLetterW = "O",
        letter = "N",
        letterC = num3,
        letterX = "E",
        tx = "3",
      },
      {
        endLetter = "T",
        endLetterW = "R",
        letter = "D",
        letterC = num4,
        letterX = "",
        tx = "4",
      },
      {
        endLetter = "D",
        endLetterW = "O",
        letter = "T",
        letterC = num5,
        letterX = "F",
        tx = "5",
      },
      {
        endLetter = "O",
        endLetterW = "P",
        letter = "H",
        letterC = num6,
        letterX = "A",
        tx = "6",
      },
      {
        endLetter = "W",
        endLetterW = "E",
        letter = "E",
        letterC = num7,
        letterX = "S",
        tx = "7",
      },
      {
        endLetter = "N",
        endLetterW = "N",
        letter = "M",
        letterC = num8,
        letterX = "T",
        tx = "8",
      },
    }
    for _, conf in pairs(duiConfs) do
      RemoveReplaceTexture(conf.txd, conf.tex)
      exports["np-lib"]:releaseDui(conf.dui.id)
      conf.dui = nil
    end
    if pType == "override" then
      local url = "https://prod-gta.nopixel.net/dui/?type=text&fontSize=10em&text="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. opt.letter
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
    end
    if pType == "code" then
      local url = "https://prod-gta.nopixel.net/dui/?type=text&fontSize=10em&text="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. opt.letterC
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
    end
    if pType == "codeend" then
      local url = "https://prod-gta.nopixel.net/dui/?type=text&fontSize=10em&text="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. opt.letterX
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
    end
    if pType == "fail" then
      local url = "https://prod-gta.nopixel.net/dui/?type=text&fontSize=10em&text="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. opt.endLetter
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
      timeoutEnabled = true
    end
    if pType == "complete" then
      local url = "https://prod-gta.nopixel.net/dui/?type=text&fontSize=10em&text="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. opt.endLetterW
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
      timeoutEnabled = true
    end
    if pType == "countdown" then
      local url = "https://prod-gta.nopixel.net/dui/?type=countdown&fontSize=5em&seconds="
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. tostring(pValue)
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
    end
    if pType == "clues" then
      local url = "https://prod-gta.nopixel.net/dui/?type=yacht-clue"
      local confs = {}
      for _, opt in pairs(duiOptions) do
        local settings = nil
        for _, v in pairs(YACHT_HEIST_SETTINGS) do
          if tostring(v.matrixIndex) == opt.tx then
            settings = v
          end
        end
        local conf = {
          tex = "Yacht_Screen_0" .. opt.tx,
          txd = "hei_mph_yachteng_servers",
          dui = nil,
        }
        local cUrl = url .. "&clueIcon=" .. settings.clueIcon
          .. "&arrowUp=" .. settings.matrixUp
          .. "&arrowRight=" .. settings.matrixRight
          .. "&arrowDown=" .. settings.matrixDown
          .. "&arrowLeft=" .. settings.matrixLeft
        conf.dui = exports["np-lib"]:getDui(cUrl, 256, 256)
        AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
        confs[#confs + 1] = conf
      end
      duiConfs = confs
    end
    if timeoutEnabled then
      Citizen.Wait(60000)
      for _, conf in pairs(duiConfs) do
        RemoveReplaceTexture(conf.txd, conf.tex)
        exports["np-lib"]:releaseDui(conf.dui.id)
        conf.dui = nil
      end
    end
  end)
end)

 RegisterCommand("rmdui", function()
   for _, conf in pairs(duiConfs) do
     RemoveReplaceTexture(conf.txd, conf.tex)
     exports["np-lib"]:releaseDui(conf.dui.id)
     conf.dui = nil
   end
 end)

--
Citizen.CreateThread(function()
  YACHT_HEIST_ACTIVE = RPC.execute("np-heists:yacht:isHeistActive")
end)
RegisterNetEvent("np-heists:yacht:setHeistActive")
AddEventHandler("np-heists:yacht:setHeistActive", function(pActive, pSettings)
  YACHT_HEIST_ACTIVE = pActive
  YACHT_HEIST_SETTINGS = pSettings
  -- Citizen.CreateThread(function()
  --   for k, v in pairs(YACHT_STASH_NAMES) do
  --     RPC.execute("np-heists:yacht:searchStash", k)
  --     Citizen.Wait(50)
  --   end
  -- end)
end)

Citizen.CreateThread(function()
  -- targets
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2084.17, -1014.22, 8.97), 0.6, 1, {
    heading=342,
    minZ=8.37,
    maxZ=9.17,
    data = {
      id = "sound_system",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2059.04, -1022.8, 11.91), 0.6, 1, {
    heading=253,
    minZ=12.31,
    maxZ=13.11,
    data = {
      id = "ud_phone_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2061.34, -1029.66, 11.91), 0.6, 1, {
    heading=253,
    minZ=12.31,
    maxZ=13.11,
    data = {
      id = "ud_phone_2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target2", vector3(-2052.91, -1026.99, 2.6), 0.6, 1, {
    heading=341,
    minZ=2.8,
    maxZ=3.6,
    data = {
      id = "ld_steam_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target2", vector3(-2057.02, -1034.78, 3.01), 0.6, 1, {
    heading=341,
    minZ=3.21,
    maxZ=4.01,
    data = {
      id = "ld_steam_2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target2", vector3(-2061.13, -1024.67, 3.05), 0.6, 1, {
    heading=251,
    minZ=3.25,
    maxZ=4.05,
    data = {
      id = "ld_steam_3",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target2", vector3(-2067.1, -1024.9, 3.05), 2.2, 1.2, {
    heading=345,
    minZ=2.85,
    maxZ=4.05,
    data = {
      id = "ld_steam_4",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2079.41, -1015.98, 5.88), 0.6, 1, {
    heading=73,
    minZ=5.28,
    maxZ=6.08,
    data = {
      id = "mf_laptop_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2081.51, -1022.41, 8.97), 0.6, 0.6, {
    heading=70,
    minZ=8.17,
    maxZ=8.77,
    data = {
      id = "mf_laptop_2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2083.61, -1019.67, 5.88), 0.6, 0.6, {
    heading=70,
    minZ=5.68,
    maxZ=6.28,
    data = {
      id = "mf_horse_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2098.79, -1012.79, 5.88), 0.6, 0.6, {
    heading=70,
    minZ=5.48,
    maxZ=6.08,
    data = {
      id = "mf_alarmclock_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2076.85, -1020.79, 8.97), 0.6, 0.6, {
    heading=70,
    minZ=8.37,
    maxZ=8.97,
    data = {
      id = "ud_tvplayer_1",
    },
  })

  -- hidden spots
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2096.96, -1014.14, 8.98), 0.6, 1, {
    heading=257,
    minZ=7.98,
    maxZ=8.90,
    data = {
      id = "tf_bar_stash",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2089.89, -1009.93, 8.97), 0.6, 1, {
    heading=174,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2092.17, -1009.8, 8.97), 0.6, 1, {
    heading=186,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2095.45, -1020.55, 8.97), 0.6, 1, {
    heading=146,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_3",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2086.89, -1021.52, 8.97), 0.6, 1, {
    heading=73,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_4",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2050.6, -1023.81, 8.97), 0.6, 1, {
    heading=78,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_5",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2052.02, -1023.52, 8.97), 0.6, 1, {
    heading=338,
    minZ=7.97,
    maxZ=8.90,
    data = {
      id = "tf_side_stash_6",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2082.73, -1018.22, 12.78), 0.6, 1, {
    heading=253,
    minZ=11.78,
    maxZ=12.70,
    data = {
      id = "ud_stash_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2070.43, -1020.9, 5.88), 0.6, 1, {
    heading=253,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2071.46, -1024.1, 5.88), 0.6, 1, {
    heading=253,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2077.85, -1021.97, 5.88), 0.6, 1, {
    heading=253,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_3",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2079.9, -1018.74, 5.88), 0.6, 1, {
    heading=251,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_4",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2092.32, -1019.92, 5.91), 0.6, 1, {
    heading=166,
    minZ=5.11,
    maxZ=5.98,
    data = {
      id = "md_stash_5",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2085.15, -1014.02, 5.88), 0.6, 1, {
    heading=71,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_6",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2089.77, -1009.44, 5.88), 0.6, 1, {
    heading=71,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_7",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2091.09, -1013.44, 5.88), 0.6, 1, {
    heading=71,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_8",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2091.79, -1015.79, 5.89), 0.6, 1, {
    heading=71,
    minZ=5.09,
    maxZ=5.98,
    data = {
      id = "md_stash_9",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2097.86, -1009.43, 5.88), 0.6, 1, {
    heading=71,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_10",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2101.84, -1015.25, 5.88), 0.6, 1, {
    heading=341,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_11",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_target", vector3(-2099.06, -1006.58, 5.88), 0.6, 1, {
    heading=341,
    minZ=5.08,
    maxZ=5.98,
    data = {
      id = "md_stash_12",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_start", vector3(-2055.93, -1027.5, 2.59), 1.2, 0.4, {
    heading=342,
    minZ=2.84,
    maxZ=3.44,
    data = {
      id = "1",
    },
  })
  -- loot zones
  exports["np-polytarget"]:AddBoxZone("heist_yacht_loot", vector3(-2073.52, -1019.4, 3.05), 0.4, 1, {
    heading=342,
    minZ=2.45,
    maxZ=3.45,
    data = {
      id = "1",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_loot", vector3(-2074.61, -1017.52, 3.05), 0.4, 1, {
    heading=252,
    minZ=2.45,
    maxZ=3.45,
    data = {
      id = "2",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_loot", vector3(-2074.13, -1015.85, 3.05), 0.4, 1, {
    heading=252,
    minZ=2.45,
    maxZ=3.45,
    data = {
      id = "3",
    },
  })
  exports["np-polytarget"]:AddBoxZone("heist_yacht_loot", vector3(-2072.21, -1014.93, 3.05), 0.4, 1, {
    heading=162,
    minZ=2.45,
    maxZ=3.45,
    data = {
      id = "4",
    },
  })

  
  -- interact
  function isEnabledFn(pList)
    return function(p1, pContext)
      local id = getContextId(pContext)
      return YACHT_HEIST_ACTIVE and (pList[id] and true or false)
    end
  end
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_1",
    icon = "search",
    label = "Search",
    parameters = {}
  }}, { distance = { radius = 3.5 } , isEnabled = function() return heistactive end })

  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target2', {{
    event = "np-heists:yacht:steam",
    id = "heist_yacht_target_2",
    icon = "smog",
    label = "Adjust Steam Settings",
    parameters = {}
  }}, { distance = { radius = 3.5 } , isEnabled = function() return steam end })

  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_3",
    icon = "phone",
    label = "Make Call",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_PHONE_NAMES),
  })
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_4",
    icon = "laptop-code",
    label = "Insert Password",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_LAPTOP_NAMES),
  })
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_5",
    icon = "compact-disc",
    label = "Insert Disc",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_TV_NAMES),
  })
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_6",
    icon = "file-audio",
    label = "Change Station",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_SOUND_SYSTEM_NAMES),
  })
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_7",
    icon = "clock",
    label = "Change Time",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_ALARM_CLOCK_NAMES),
  })
  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_target', {{
    event = "np-heists:yacht:targetEntry",
    id = "heist_yacht_target_8",
    icon = "horse-head",
    label = "Turn Statue",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = isEnabledFn(YACHT_HORSE_STATUE_NAMES),
  })

  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_start', {{
    event = "np-heists:yacht:startHeist",
    id = "heist_yacht_start_1",
    icon = "laptop-code",
    label = "Begin Override",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
    isEnabled = function()
      local hasItem = exports["np-inventory"]:hasEnoughOfItem("heistpadyacht", 1, false, true)
      return hasItem
    end,
  })

  exports["np-eye"]:AddPeekEntryByPolyTarget('heist_yacht_loot', {{
    event = "np-heists:yacht:loot",
    id = "heist_yacht_loot_1",
    icon = "hand-holding",
    label = "Search",
    parameters = {},
  }}, {
    distance = { radius = 2.0 },
  })
end)