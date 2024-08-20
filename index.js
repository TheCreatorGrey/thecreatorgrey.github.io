const board = document.getElementById("board");

const projects = {
    "Word Generator for Conlangs":{
        "start":2024,
        "release":2024,
        "banner":"banners/wgfc.png",
        "tagline":"A simple word generator",
        "description":"A simple word generator",
        "link":"https://thecreatorgrey.com/wordgen/"
    },

    "Junction":{
        "start":2024,
        "release":2024,
        "banner":"banners/junction.png",
        "tagline":"A specialized router for personal projects",
        "description":"A specialized router for personal projects",
        "link":"https://github.com/TheCreatorGrey/junction"
    },

    "Kodiak WE":{
        "start":2023,
        "release":2024,
        "banner":"banners/kodiak WE.png",
        "tagline":"A web port of the Kodiak engine",
        "description":"A web port of the Kodiak engine.",
        "link":"https://thecreatorgrey.com/kodiak/studio"
    },

    "Voxelantis":{
        "start":2023,
        "release":2023,
        "banner":"banners/mt.png",
        "tagline":"A simple Minecraft clone",
        "description":"A simple Minecraft clone.",
        "link":"https://thecreatorgrey.com/voxelantis"
    },

    "Space Climb":{
        "start":2022,
        "release":2022,
        "banner":"banners/space climb.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://thecreatorgrey.com/space-climb-reborn"
    },
}

function openProject(obj) {
    if (obj.link) {
        window.open(obj.link, '_blank').focus()
    }
}

for (p in projects) {
    data = projects[p];

    document.getElementById("cards").innerHTML += `
    <span class="card" onclick="if (${data.link !== undefined}) {window.open('${data.link}', '_blank').focus()}">
        <img src="${data.banner}" alt="banner">
        <span>${p} (${data.release})</span><br>
        <span style="font-size: 15px">${data.tagline}</span>
    </span>
`
}