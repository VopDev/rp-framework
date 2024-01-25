function OpenStashOutfitOptions()
    local options = {}

    options[#options+1] = {
        title = "Open Furniture",
        onSelect = function()
            OpenFurnitureMenu()
        end
    }

    if Config.AllowStash then
        options[#options+1] = {
            title = "Set Stash",
            onSelect = function()
                OpenLaser("stash")
            end
        }
    end

    if Config.AllowOutfit then
        options[#options+1] = {
            title = "Set Outfit",
            onSelect = function()
                OpenLaser("outfit")
            end
        }
    end

    lib.registerContext({
        id = "snipe_apartments_stash_outfit",
        title = "Stash & Outfit",
        options = options
    })
    lib.showContext("snipe_apartments_stash_outfit")
end