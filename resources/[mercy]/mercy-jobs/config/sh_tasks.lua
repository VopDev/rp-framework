Config.Tasks = {
    ['sanitation'] = {
        Label = 'Los Santos Sanitation',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Go to the foreman',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Get in the sanitation vehicle',
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Go to the assigned zone (%s)',
                Finished = false,
            },
            {
                TaskId = 4,
                Text = 'Collect trash',
                ExtraDone = 0,
                ExtraRequired = 15,
                Finished = false,
            },
            {
                TaskId = 5,
                Text = 'Go to the next zone (%s)',
                Finished = false,
            },
            {
                TaskId = 6,
                Text = 'Collect trash',
                ExtraDone = 0,
                ExtraRequired = 15,
                Finished = false,
            },
            {
                TaskId = 7,
                Text = 'Return the vehicle',
                Finished = false,
            },
        }
    },
    ['fishing'] = {
        Label = 'Fishing',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Acquire a fishing rod.',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Head to the fishing spot',
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Collect fish',
                ExtraDone = 0,
                ExtraRequired = 10,
                Finished = false,
            },
            {
                TaskId = 4,
                Text = 'Return with your haul',
                Finished = false,
            },
        }
    },
    ['oxy'] = {
        Label = 'Dark Market Transports',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Find and steal a new vehicle to use as transport.',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Go to the supplier and ask for the goods.',
                ExtraDone = 0,
                ExtraRequired = 10,
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Drive to the handoff location with the transport vehicle.',
                Finished = false,
            },
            {
                TaskId = 4,
                Text = 'Wait for customers and handoff the goods.',
                ExtraDone = 0,
                ExtraRequired = 5,
                Finished = false,
            },
            {
                TaskId = 5,
                Text = 'Drive to the next handoff location.',
                Finished = false,
            },
            {
                TaskId = 6,
                Text = 'Wait for customers and handoff the goods.',
                ExtraDone = 0,
                ExtraRequired = 5,
                Finished = false,
            },
        }
    },
    ['houses'] = {
        Label = 'House Cleaning',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Go to the house location.',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Open the door.',
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Clean the house (If you are done cleaning leave the area)',
                Finished = false,
            },
        }
    },
    ['delivery'] = {
        Label = 'Delivery Driver',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Get a delivery vehicle',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Get in your vehicle',
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Go to the assigned location',
                Finished = false,
            },
            {
                TaskId = 4,
                Text = 'Drop off the goods',
                ExtraDone = 0,
                ExtraRequired = math.random(2,6),
                Finished = false,
            },
            {
                TaskId = 5,
                Text = 'Return the vehicle',
                Finished = false,
            },
        }
    },
    ['depot'] = {
        Label = 'Depot Worker',
        Tasks = {
            {
                TaskId = 1,
                Text = 'Get into the flatbed',
                Finished = false,
            },
            {
                TaskId = 2,
                Text = 'Go to the vehicle',
                Finished = false,
            },
            {
                TaskId = 3,
                Text = 'Load up the vehicle',
                Finished = false,
            },
            {
                TaskId = 4,
                Text = 'Go to the depot',
                Finished = false,
            },
            {
                TaskId = 5,
                Text = 'Return the flatbed',
                Finished = false,
            },
        }
    }
}