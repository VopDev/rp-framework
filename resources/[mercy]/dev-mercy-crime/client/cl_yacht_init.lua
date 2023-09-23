local heistactive = false

YACHT_STASH_NAMES = {
  ["tf_bar_stash"] = true,
  ["tf_side_stash_1"] = true,
  ["tf_side_stash_2"] = true,
  ["tf_side_stash_3"] = true,
  ["tf_side_stash_4"] = true,
  ["tf_side_stash_5"] = true,
  ["tf_side_stash_6"] = true,
  ["ud_stash_1"] = true,
  ["md_stash_1"] = true,
  ["md_stash_2"] = true,
  ["md_stash_3"] = true,
  ["md_stash_4"] = true,
  ["md_stash_5"] = true,
  ["md_stash_6"] = true,
  ["md_stash_7"] = true,
  ["md_stash_8"] = true,
  ["md_stash_9"] = true,
  ["md_stash_10"] = true,
  ["md_stash_11"] = true,
  ["md_stash_12"] = true,
}

YACHT_STEAM_NAMES = {
  ["ld_steam_1"] = true,
  ["ld_steam_2"] = true,
  ["ld_steam_3"] = true,
  ["ld_steam_4"] = true,
}

YACHT_PHONE_NAMES = {
  ["ud_phone_1"] = true,
  ["ud_phone_2"] = true,
}

YACHT_LAPTOP_NAMES = {
  ["mf_laptop_1"] = true,
  ["mf_laptop_2"] = true,
}

YACHT_TV_NAMES = {
  ["ud_tvplayer_1"] = true,
}

YACHT_SOUND_SYSTEM_NAMES = {
  ["sound_system"] = true,
}

YACHT_ALARM_CLOCK_NAMES = {
  ["mf_alarmclock_1"] = true,
}

YACHT_HORSE_STATUE_NAMES = {
  ["mf_horse_1"] = true,
}


RegisterNetEvent("np-heists:setactive2")
AddEventHandler("np-heists:setactive2", function()
  heistactive = true
  end)
  