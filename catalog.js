// date format is month, day, year
// dates before 8/26 may not be accurate


// name: Displayed name of project
// id: A URL and filename safe version of the project's name
// startDate: Month, day and year the project was started
// releaseDate: (if any) Month, day and year the project was released
// endDate: (if any) Month, day and year the project was cancelled or ended
// status: 0 = cancelled or ended, 1 = active, 2 = on hold (no development for over a week)
// description: Obvious, isn't it?
// link: (if any) A URL with a working example or presentation of the project
// github: (if any) Name of the github repository containing the project

const projects = [
    {
        "name":"Ultimate Sandbox",
        "id":"ultimate-sandbox",

        "startDate":[null, null, 2021],
        "releaseDate":[null, null, 2021],
        "endDate":[null, null, 2021],

        "status":0,
        "description":`Sandbox game.

        The source code for this project has
        been lost. It's probably for the better,
        anyways. It was awful.
        
        This page exists purely to keep a record.`,
    },

    {
        "name":"Space Climb",
        "id":"space-climb",

        "startDate":[null, null, 2022],
        "releaseDate":[null, null, 2022],
        "endDate":[null, null, 2022],

        "status":0,
        "description":`Randomly-generated strategy game.

        Sadly, this version of Space Climb has 
        been lost. There is a newer version available at 
        https://thecreatorgrey.com/space-climb-reborn/
        
        This page exists purely to keep a record.`,
    },

    {
        "name":"Space Climb Reborn",
        "id":"space-climb-reborn",

        "startDate":[null, null, 2023],
        "releaseDate":[null, null, 2023],
        "endDate":null,

        "status":2,
        "description":`Randomly-generated strategy game.
        Instructions are available in-menu.`,
        "link":"https://thecreatorgrey.com/space-climb-reborn",
        "github":"space-climb-reborn"
    },

    {
        "name":"Ruby Soundboard",
        "id":"ruby-soundboard",

        "startDate":[null, null, 2023],
        "releaseDate":[null, null, 2023],
        "endDate":[9, 16, 2024],

        "status":0,
        "description":`Browser based soundboard.
        Click on the title of any card and select an audio file.
        You can click on any card with a file to play the sound.
        `,
        "link":"https://thecreatorgrey.com/ruby-soundboard",
        "github":"ruby-soundboard"
    },

    {
        "name":"Voxelantis",
        "id":"voxelantis",

        "startDate":[8, 29, 2023],
        "releaseDate":[8, 31, 2023],
        "endDate":null,

        "status":1,
        "description":"Voxel based sandbox game.",
        "link":"https://thecreatorgrey.com/voxelantis",
        "github":"voxelantis"
    },

    {
        "name":"Kodiak",
        "id":"kodiak",

        "startDate":[9, 18, 2023],
        "releaseDate":[12, 14, 2023],
        "endDate":null,

        "status":2,
        "description":"WebGL game creation tool and level editor.",
        "link":"https://thecreatorgrey.com/kodiak/studio",
        "github":"kodiak"
    },

    {
        "name":"Word Generator for Conlangs",
        "id":"wgfc",

        "startDate":[8, 5, 2024],
        "releaseDate":[8, 5, 2024],
        "endDate":null,

        "status":1,
        "description":"Word generator (for conlangs).",
        "link":"https://thecreatorgrey.com/wordgen/",
        "github":"wordgen"
    },

    {
        "name":"Clykr",
        "id":"clykr",

        "startDate":[8, 23, 2024],
        "releaseDate":[8, 23, 2024],
        "endDate":null,

        "status":1,
        "description":"Simple autoclicker.",
        "link":"https://github.com/TheCreatorGrey/Clykr",
        "github":"clykr"
    },

    {
        "name":"Raster Online",
        "id":"raster-online",

        "startDate":[9, 10, 2024],
        "releaseDate":[9, 13, 2024],
        "endDate":null,

        "status":1,
        "description":"Online pixel art and raster editor.",
        "link":"https://thecreatorgrey.com/raster-online/",
        "github":"raster-online"
    },
]


function getBannerSource(id) {
    let source = `/banners/${id}.png`;

    let http = new XMLHttpRequest();
    
    http.open('HEAD', source, false);
    http.send();

    if (http.status === 404) {
        source = "/banners/missing.svg"
    }

    return source
}


async function getLatestGithubCommits(repository, amount) {
    const url = `https://api.github.com/repos/TheCreatorGrey/${repository}/commits`;

    response = await fetch(
        `https://api.github.com/repos/TheCreatorGrey/${repository}/commits`
    )

    response = await response.json()
    response = response.slice(0, amount)

    let commits = [];
    for (let c of response) {
        let date = c.commit.author.date;
        date = date.split("T")[0];
        date = date.split("-");
        date = [
            date[1],
            date[2],
            date[0],
        ]

        commits.push(
            [
                c.commit.message,
                date
            ]
        )
    }

    return commits
}


function getProjectByID(id) {
    for (let p of projects) {
        if (p.id === id) {
            return p
        }
    }
}