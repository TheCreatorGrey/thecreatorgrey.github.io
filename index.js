const board = document.getElementById("board");

const projects = {
    "Space Climb Reborn":{
        "releaseYear":"2022",
        "banner":"banners/space climb.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://portfolio.thecreatorgrey.site/space-climb-reborn"
    },

    "Mine Thing":{
        "releaseYear":"2023",
        "banner":"banners/mine thing.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://portfolio.thecreatorgrey.site/mine-thing"
    },

    "Kodiak":{
        "releaseYear":"2023",
        "banner":"banners/kodiak.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://portfolio.thecreatorgrey.site/kodiak/studio"
    }
}

console.log(projects)

for (p in projects) {
    data = projects[p];

    board.innerHTML += `
    <span class="card" onclick="window.open('${data.link}', '_blank').focus()">
        <img src="${data.banner}" alt="banner">
        <span>${p} (${data.releaseYear})</span><br>
        <span style="font-size: 15px">${data.tagline}</span>
    </span>
`
}