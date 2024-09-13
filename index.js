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
        "name":"Ruby Soundboard",
        "start":[1, 1, 2023],
        "release":[1, 1, 2023],
        "banner":"rs.png",
        "tagline":"A browser based soundboard",
        "description":"A browser based soundboard",
        "link":"https://thecreatorgrey.com/ruby-soundboard"
    },

    {
        "name":"Voxelantis",
        "start":[8, 29, 2023],
        "release":[8, 31, 2023],
        "banner":"mt.png",
        "tagline":"A voxel based sandbox game",
        "description":"A voxel based sandbox game",
        "link":"https://thecreatorgrey.com/voxelantis"
    },

    {
        "name":"Kodiak",
        "start":[9, 18, 2023],
        "release":[12, 14, 2023],
        "banner":"kodiak WE.png",
        "tagline":"A WebGL game creation tool and level editor",
        "description":"A WebGL game creation tool and level editor",
        "link":"https://thecreatorgrey.com/kodiak/studio"
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

    {
        "name":"Raster Online",
        "start":[9, 10, 2024],
        "release":[9, 13, 2024],
        "banner":"missing.svg",
        "tagline":"An online pixel editor",
        "description":"An online pixel editor",
        "link":"https://thecreatorgrey.com/raster-online/"
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