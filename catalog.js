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

const projects = {
    "ultimate-sandbox":{
        "name":"Ultimate Sandbox",

        "startDate":[null, null, 2021],
        "releaseDate":[null, null, 2021],
        "endDate":[null, null, 2021],

        "status":0,
        "description":`Sandbox game.

        The original copy of this project was lost.
        
        This page will stay as a record.`,
    },

    "space-climb":{
        "name":"Space Climb",

        "startDate":[null, null, 2022],
        "releaseDate":[null, null, 2022],
        "endDate":[null, null, 2023],

        "status":0,
        "description":`Randomly-generated strategy game.

        The original copy of this version of Space Climb 
        was lost and is no longer available. There is a 
        newer version available at:
        https://thecreatorgrey.com/space-climb-reborn/
        
        This page will stay as a record.`,
    },

    "space-climb-reborn":{
        "name":"Space Climb Reborn",

        "startDate":[null, null, 2023],
        "releaseDate":[null, null, 2023],
        "endDate":null,

        "status":2,
        "description":`Randomly-generated strategy game.
        Instructions are available in-menu.`,
        "link":"https://thecreatorgrey.com/space-climb-reborn",
        "github":"space-climb-reborn"
    },

    "ruby-soundboard":{
        "name":"Ruby Soundboard",

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

    "voxelantis":{
        "name":"Voxelantis",

        "previousAliases":["Mine Thing"],

        "startDate":[8, 29, 2023],
        "releaseDate":[8, 31, 2023],
        "endDate":null,

        "status":1,
        "description":"Voxel based sandbox game.",
        "link":"https://thecreatorgrey.com/voxelantis",
        "github":"voxelantis"
    },

    "kodiak":{
        "name":"Kodiak",

        "startDate":[9, 18, 2023],
        "releaseDate":[12, 14, 2023],
        "endDate":null,

        "status":2,
        "description":"WebGL game creation tool and level editor.",
        "link":"https://thecreatorgrey.com/kodiak/studio",
        "github":"kodiak"
    },

    "wgfc":{
        "name":"Word Generator for Conlangs",

        "startDate":[8, 5, 2024],
        "releaseDate":[8, 5, 2024],
        "endDate":null,

        "status":1,
        "description":"Word generator (for conlangs).",
        "link":"https://thecreatorgrey.com/wordgen/",
        "github":"wordgen"
    },

    "clykr":{
        "name":"Clykr",

        "startDate":[8, 23, 2024],
        "releaseDate":[8, 23, 2024],
        "endDate":null,

        "status":1,
        "description":"Simple autoclicker.",
        "link":"https://github.com/TheCreatorGrey/Clykr",
        "github":"clykr"
    },

    "raster-online":{
        "name":"Raster Online",

        "startDate":[9, 10, 2024],
        "releaseDate":[9, 13, 2024],
        "endDate":null,

        "status":1,
        "description":"Online pixel art and raster editor.",
        "link":"https://thecreatorgrey.com/raster-online/",
        "github":"raster-online"
    },

    "unnamed":{
        "name":"Unnamed",

        "startDate":[6, 14, 2024],
        "releaseDate":null,
        "endDate":null,

        "status":0,
        "description":"A remake of a cancelled project that was started in 2022",
        "link":"",
        "github":""
    },
}


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