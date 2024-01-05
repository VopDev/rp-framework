Config = Config or {}

Config.SellingList = {
    ["weed-bag"] = { -- This is the item name
        ['Item'] = "weed-bag",
        ['Label'] = "Weed Bags",
        ['SellPrice'] = 30, -- p/ SellAmount
        ['SellAmount'] = "ALL", -- AMOUNT as number, "HALF or "ALL" (This example will sell "ALL" weed bags for $30 each so Y x $30)
        ['Timeout'] = 3500, -- Progressbar Timeout
        ['Ped'] = {
            ['Id'] = "weed-bags-seller",
            ['SpriteDistance'] = 10.0,
            ['Distance'] = 5.0,
            ['Position'] = vector4(-1168.5546, -1572.9141, 3.6636, 117.9008),
            ['Model'] = "mp_m_weed_01",
            ['Anim'] = {"amb@world_human_smoking@male@male_b@idle_a idle_a"},
            ['Props'] = {},
        },
        ['Options'] ={
            {
                ['Name'] = "weed_sales",
                ['Icon'] = "fas fa-circle",
                ['Label'] = "Pass Over",
                ['EventType'] = "Client",
                ['EventName'] = "mercy-illegal/client/sell",
                ['EventParams'] = {
                    ['Type'] = "weed-bag", -- This is the item name
                },
                Enabled = function(Entity)
                    return exports["mercy-inventory"]:HasEnoughOfItem("weed-bag", 1) -- Edit this if changing Sell Amount
                end,
            }
        },
    },
    ["cash-rolls"] = { -- This is the item name
        ['Item'] = "cash-rolls",
        ['Label'] = "Cash Rolls",
        ['SellPrice'] = 5, -- p/ SellAmount
        ['SellAmount'] = "ALL",  -- AMOUNT as number, "HALF or "ALL" (This example will sell 5 cash rolls for $400)
        ['Timeout'] = 3500, -- Progressbar Timeout
        ['Ped'] = {
            ['Id'] = "cash-rolls-selling",
            ['SpriteDistance'] = 10.0,
            ['Distance'] = 5.0,
            ['Position'] = vector4(-1099.1653, -1258.7200, 4.3405, 34.8051),
            ['Model'] = "g_m_m_casrn_01",
            ['Anim'] = {},
            ['Props'] = {},
        },
        ['Options'] ={
            {
                ['Name'] = "rolls_sales",
                ['Icon'] = "fas fa-circle",
                ['Label'] = "Sell Something",
                ['EventType'] = "Client",
                ['EventName'] = "mercy-illegal/client/sell",
                ['EventParams'] = {
                    ['Type'] = "cash-rolls", -- This is the item name 
                },
                Enabled = function(Entity)
                    return exports["mercy-inventory"]:HasEnoughOfItem("cash-rolls", 1) -- Edit this if changing Sell Amount
                end,
            }
        },
    },
}

Config.WeedPlants = {}
Config.WeedUpdateTime = 15 -- Every 15 minutes
Config.WeedRackDryTime = 10 -- 2 Minutes

Config.ContainerWhitelist = { '9432', '7078' }

Config.LabsState = {
    [1] = false,
    [2] = false,
    [3] = false,
    [4] = false
}

Config.GrowthObjects = {
    [1] = {
        ['Hash'] = GetHashKey('bkr_prop_weed_01_small_01b'),
        ['Z-Offset'] = -0.5,
    },
    [2] = {
        ['Hash'] = GetHashKey('bkr_prop_weed_med_01a'),
        ['Z-Offset'] = -3.0,
    },
    [3] = {
        ['Hash'] = GetHashKey('bkr_prop_weed_med_01b'),
        ['Z-Offset'] = -3.0,
    },
    [4] = {
        ['Hash'] = GetHashKey('bkr_prop_weed_lrg_01a'),
        ['Z-Offset'] = -3.0,
    },
    [5] = {
        ['Hash'] = GetHashKey('bkr_prop_weed_lrg_01b'),
        ['Z-Offset'] = -3.0,
    }
}

Config.ScalesCrafting = {
    {
        ['ItemName'] = 'weed-bag',
        ['Slot'] = 1,
        ['Amount'] = 100,
        ['Info'] = '',
    },
    {
        ['ItemName'] = 'joint',
        ['Slot'] = 2,
        ['Amount'] = 100,
        ['Info'] = '',
    },
    {
        ['ItemName'] = 'weed-dried-bud-two',
        ['Slot'] = 3,
        ['Amount'] = 100,
        ['Info'] = '',
        ['Multiplier'] = 2,
    },
}

Config.BenchCrafting = {
    {
        ['ItemName'] = 'weapon_knife',
        ['Slot'] = 1,
        ['Amount'] = 1,
        ['Info'] = 'test',
    },
    {
        ['ItemName'] = 'lockpick',
        ['Slot'] = 2,
        ['Amount'] = 1,
        ['Info'] = '',
    },
    {
        ['ItemName'] = 'weapon_heavypistol',
        ['Slot'] = 3,
        ['Amount'] = 1,
        ['Info'] = '',
    },
   
}

Config.BoostingTiers = {
    "D",
    "C",
    "B",
    "A",
    "S",
    "S+",
    "MAX",
}

Config.KeyScanLocations = {
    vector3(-1166.03, 587.78, 101.83),
}

Config.scanner = "WEAPON_METALDETECTOR" 
-- Config.scanner = "WEAPON_DIGISCANNER"

Config.Model = `u_m_y_dancerave_01`

Config.PedSpawn = vec4(-1526.77, -1181.94, -0.36, 312.39)

Config.PedBlip = true -- Adds a blip for the ped you purchase the scanner from.

Config.ScannerFee = true -- Set to false if you want the scanner to be FREE.

Config.ScannerPrice = 750 -- $750 from the player's bank.

Config.minRolls = 1
Config.maxRolls = 3

Config.bars = {
    -- digiscanner supports up to 7 bars, while metal detector supports 10
    {dist = 100, scaleformBars = 0.0, beepWait = 10000},
    {dist = 70, scaleformBars = 10.0, beepWait = 9000},
    {dist = 50, scaleformBars = 20.0, beepWait = 8000},
    {dist = 40, scaleformBars = 30.0, beepWait = 7000},
    {dist = 30, scaleformBars = 40.0, beepWait = 6000},
    {dist = 20, scaleformBars = 50.0, beepWait = 5000},
    {dist = 10, scaleformBars = 60.0, beepWait = 4000},
    {dist = 5, scaleformBars = 70.0, beepWait = 3000},
    {dist = 3, scaleformBars = 80.0, beepWait = 2000},
    {dist = 2, scaleformBars = 90.0, beepWait = 1000},
    {dist = 0, scaleformBars = 100.0, beepWait = 500},
}
