const board = document.getElementById("board");
const cardArea = document.getElementById("cards");

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




let sorted = [];
for (let id in projects) {
    let project = projects[id];
    project.id = id;

    if (project.releaseDate) {
        sorted.push(project)
    }
}

sorted = sorted.sort((a, b) => preciseYear(b.releaseDate) - preciseYear(a.releaseDate));

for (let data of sorted) {
    let releaseYear
    if (data.releaseDate) { // this is currently unused due to the above code
        releaseYear = data.releaseDate[2]
    } else {
        releaseYear = "Unreleased"
    }

    let tagline = data.description.split(".")[0]

    cardArea.insertAdjacentHTML(
        'beforeend',
        `
        <span class="card" id="card-${data.id}" onclick="document.location.href = 'project/?id=${data.id}'">
            <img src="${getBannerSource(data.id)}" alt="banner">
            <span>${data.name} (${releaseYear})</span><br>
            <span style="font-size: 15px">${tagline}</span>
        </span>
        `
    )

    let card = document.getElementById(`card-${data.id}`);
    if (data.status === 0) {
        card.style.filter = 'brightness(0.5)'
    }
    
    let thumb = card.getElementsByTagName("img")[0];
    // If thumbnail is pixelated (<100 pixels) apply pixelated filter
    thumb.onload = function () {
        if (this.naturalWidth < 100) {
            this.style.imageRendering = 'pixelated'
        }
    }

}