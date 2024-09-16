const board = document.getElementById("board");
const cardArea = document.getElementById("cards");

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

const projects = [
    {
        "name":"Space Climb Reborn",
        "id":"space-climb-reborn",

        "startDate":[1, 1, 2022],
        "releaseDate":[1, 1, 2022],
        "endDate":null,

        "status":1,
        "description":"Randomly-generated strategy game.",
        "link":"https://thecreatorgrey.com/space-climb-reborn",
    },

    {
        "name":"Ruby Soundboard",
        "id":"ruby-soundboard",

        "startDate":[1, 1, 2023],
        "releaseDate":[1, 1, 2023],
        "endDate":[9, 16, 2024],

        "status":0,
        "description":"Browser based soundboard.",
        "link":"https://thecreatorgrey.com/ruby-soundboard",
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
    },

    {
        "name":"Clykr",
        "id":"clykr",

        "startDate":[8, 23, 2024],
        "releaseDate":[8, 23, 2024],
        "endDate":null,

        "status":1,
        "description":"Simple autoclicker.",
        "link":"https://thecreatorgrey.com/Clykr",
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
    },
]

function openProject(obj) {
    if (obj.link) {
        window.open(obj.link, '_blank').focus()
    }
}

function preciseYear(date) {
    let year = date[2]
    year += date[0]/12
    year += date[1]/365
    return year
}

let sorted = projects.sort((a, b) => preciseYear(b.startDate) - preciseYear(a.startDate));

for (data of sorted) {
    let releaseYear
    if (data.releaseDate) {
        releaseYear = data.releaseDate[2]
    } else {
        releaseYear = "Unreleased"
    }

    let tagline = data.description.split(".")[0]

    cardArea.insertAdjacentHTML(
        'beforeend',
        `
        <span class="card" id="card-${data.id}" onclick="if (${data.link !== null}) {window.open('${data.link}', '_blank').focus()}">
            <img src="banners/${data.id}.png" alt="banner" onerror="this.onerror=''; this.src='banners/missing.svg';">
            <span>${data.name} (${releaseYear})</span><br>
            <span style="font-size: 15px">${tagline}</span>
        </span>
        `
    )
}