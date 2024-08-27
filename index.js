const board = document.getElementById("board");

// date format is month, day, year
// dates before 8/26 may not be accurate

const projects = [
    {
        "name":"Space Climb Reborn",
        "start":[1, 1, 2022],
        "release":[1, 1, 2022],
        "banner":"space climb.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game",
        "link":"https://thecreatorgrey.com/space-climb-reborn"
    },

    {
        "name":"Voxelantis",
        "start":[8, 29, 2023],
        "release":[8, 31, 2023],
        "banner":"mt.png",
        "tagline":"A voxel sandbox game",
        "description":"A voxel sandbox game",
        "link":"https://thecreatorgrey.com/voxelantis"
    },

    {
        "name":"Kodiak WE",
        "start":[9, 18, 2023],
        "release":[12, 14, 2023],
        "banner":"kodiak WE.png",
        "tagline":"A web port of the Kodiak engine",
        "description":"A web port of the Kodiak game engine",
        "link":"https://thecreatorgrey.com/kodiak/studio"
    },

    {
        "name":"Junction",
        "start":[7, 24, 2024],
        "release":null,
        "banner":"junction.png",
        "tagline":"A specialized router for personal projects",
        "description":"A specialized router for personal projects",
        "link":"https://github.com/TheCreatorGrey/junction"
    },

    {
        "name":"Word Generator for Conlangs",
        "start":[8, 5, 2024],
        "release":[8, 5, 2024],
        "banner":"wgfc.png",
        "tagline":"A simple word generator",
        "description":"A simple word generator",
        "link":"https://thecreatorgrey.com/wordgen/"
    },

    {
        "name":"Clykr",
        "start":[8, 23, 2024],
        "release":[8, 23, 2024],
        "banner":"missing.svg",
        "tagline":"A simple autoclicker",
        "description":"A simple autoclicker",
        "link":"https://github.com/TheCreatorGrey/Clykr"
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

let sorted = projects.sort((a, b) => preciseYear(b.start) - preciseYear(a.start));

for (data of sorted) {
    let releaseYear
    if (data.release) {
        releaseYear = data.release[2]
    } else {
        releaseYear = "Unreleased"
    }

    document.getElementById("cards").innerHTML += `
    <span class="card" onclick="if (${data.link !== null}) {window.open('${data.link}', '_blank').focus()}">
        <img src="banners/${data.banner}" alt="banner">
        <span>${data.name} (${releaseYear})</span><br>
        <span style="font-size: 15px">${data.tagline}</span>
    </span>
`
}