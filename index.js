const board = document.getElementById("board");

const projects = {
    "This Website":{
        "year":"2024",
        "banner":"banners/hamper.png",
        "tagline":"Not much more to say here",
        "description":"Not much more to say here",
        "link":"https://portfolio.thecreatorgrey.site"
    },

    "Space Climb Reborn":{
        "year":"2022",
        "banner":"banners/space climb.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://portfolio.thecreatorgrey.site/space-climb-reborn"
    },

    "Voxelantis":{
        "year":"2023",
        "banner":"banners/mine thing.png",
        "tagline":"A simple Minecraft clone",
        "description":"A simple Minecraft clone.",
        "link":"https://portfolio.thecreatorgrey.site/voxelantis"
    },

    "Kodiak WE":{
        "year":"2024",
        "banner":"banners/kodiak WE.png",
        "tagline":"A web port of the Kodiak engine",
        "description":"A web port of the Kodiak engine.",
        "link":"https://portfolio.thecreatorgrey.site/kodiak/studio"
    },

    "Kodiak":{
        "year":"2023",
        "banner":"banners/kodiak.png",
        "tagline":"currently unavailable",
        "description":"A game engine built with Ursina",
        "link":null
    }
}

console.log(projects)

for (p in projects) {
    data = projects[p];

    board.innerHTML += `
    <span class="card" onclick="if ('${data.link}' !== 'null') {window.open('${data.link}', '_blank').focus()}">
        <img src="${data.banner}" alt="banner">
        <span>${p} (${data.year})</span><br>
        <span style="font-size: 15px">${data.tagline}</span>
    </span>
`
}