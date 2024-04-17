const board = document.getElementById("board");

const projects = {
    "This Website":{
        "year":"2024",
        "banner":"banners/ws.png",
        "tagline":"_",
        "description":"",
        "link":"https://portfolio.thecreatorgrey.site"
    },

    "Kodiak WE":{
        "year":"2024",
        "banner":"banners/kodiak WE.png",
        "tagline":"A web port of the Kodiak engine",
        "description":"A web port of the Kodiak engine.",
        "link":"https://portfolio.thecreatorgrey.site/kodiak/studio"
    },

    "Voxelantis":{
        "year":"2023",
        "banner":"banners/mt.png",
        "tagline":"A simple Minecraft clone",
        "description":"A simple Minecraft clone.",
        "link":"https://portfolio.thecreatorgrey.site/voxelantis"
    },

    "Space Climb Reborn":{
        "year":"2022",
        "banner":"banners/space climb.png",
        "tagline":"A randomly-generated strategy game",
        "description":"A randomly-generated strategy game.",
        "link":"https://portfolio.thecreatorgrey.site/space-climb-reborn"
    },
}

const graveyard = {
    "LibreRooms":{
        "year":"2023",
        "banner":"banners/graveyard/LR.png",
        "tagline":"An online instant-messaging service. Deleted in a panic of getting hacked."
    },

    "Kodiak":{
        "year":"2022",
        "banner":"banners/graveyard/kodiak.png",
        "tagline":"The original Kodiak. Became too messy to develop."
    },

    "The Prisoner's Descent":{
        "year":"2022",
        "banner":"banners/graveyard/tpd.png",
        "tagline":"A psycological horror game. Couldn't create a compelling plotline."
    },

    "Spring Animator":{
        "year":"2022",
        "banner":"banners/none.png",
        "tagline":"A 2D animation software. Lost interest."
    },

    "Ultimate Sandbox":{
        "year":"2021",
        "banner":"banners/none.png",
        "tagline":"An overly complicated sandbox game. Death by foul, amateur code."
    },
}

function openProject(obj) {
    if (obj.link) {
        window.open(obj.link, '_blank').focus()
    }
}

let cards;
if (window.location.pathname === '/graveyard.html') {
    cards = graveyard
} else {
    cards = projects
}
console.log(window.location)

for (p in cards) {
    data = cards[p];

    document.getElementById("cards").innerHTML += `
    <span class="card" onclick="if (${data}.link) {window.open('${data.link}', '_blank').focus(}">
        <img src="${data.banner}" alt="banner">
        <span>${p} (${data.year})</span><br>
        <span style="font-size: 15px">${data.tagline}</span>
    </span>
`
}