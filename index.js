const board = document.getElementById("board");
const category_buttons = document.getElementById("categories");
const card_area = document.getElementById("cards");


function openProject(obj) {
    if (obj.link) {
        window.open(obj.link, '_blank').focus()
    }
}

function releaseTime(project) {
    let date = project.releaseDate;

    if (date.includes(null)) {
        date = project.startDate
    }

    let year = date[2];
    year += date[0]/12;
    year += date[1]/365;
    return year
}



for (let category in categories) {
    let cat_info = categories[category];
    let button = document.createElement("button");
    button.innerText = category;

    button.style.backgroundColor = `
        rgb(${cat_info.color[0]}, 
            ${cat_info.color[1]}, 
            ${cat_info.color[2]})`

    button.onclick = () => {
        onlyShowCategory = `${category}`;
        loadProjects();
    }

    category_buttons.appendChild(button);
}

const category_all_button = document.getElementById("category-all");
category_all_button.style.backgroundColor = "grey";
category_all_button.onclick = () => {
    onlyShowCategory = null;
    loadProjects();
}

let onlyShowCategory = "Software";
let sorted = [];
for (let id in projects) {
    let project = projects[id];
    project.id = id;

    if (project.releaseDate) {
        sorted.push(project)
    }
}

sorted = sorted.sort((a, b) => releaseTime(b) - releaseTime(a));

function loadProjects() {
    card_area.innerHTML = "";

    for (let data of sorted) {
        if (onlyShowCategory) {
            if (data.category != onlyShowCategory) {
                continue
            }
        }

        let releaseYear
        if (data.startDate) { // this is currently unused due to the above code
            releaseYear = data.startDate[2]
        } else {
            releaseYear = "Unreleased"
        }
    
        let category = categories[data.category];
        let color = `rgb(${category.color[0]}, ${category.color[1]}, ${category.color[2]})`;
        let transparentColor = `rgba(${category.color[0]}, ${category.color[1]}, ${category.color[2]}, 0.5)`;
    
        // Card
        let card = document.createElement("span");
        card.className = "card";
        card.onclick = () => {document.location.href = `project/?id=${data.id}`};
        card.style.borderColor = color;
        card.style.background = transparentColor;
        card_area.appendChild(card);

        // Card banner container
        let banner_container = document.createElement("div");
        banner_container.className = "banner-container";
        banner_container.style.borderColor = color;
        banner_container.style.backgroundColor = transparentColor;
        card.appendChild(banner_container);
    
        // Card banner
        let banner = document.createElement("img");
        banner.src = getBannerSource(data.id);
        banner.alt = "banner";
        banner_container.appendChild(banner);
    
        // If banner is pixelated (<100 pixels) apply pixelated filter so it isn't blurry
        banner.onload = function () {
            if (this.naturalWidth < 100) {
                this.style.imageRendering = 'pixelated'
            }
        }
    
        // Card title
        let title = document.createElement("span");
        title.innerText = `${data.name} (${releaseYear})`;
        card.appendChild(title);
    
        // Card category tag
        let tag = document.createElement("span");
        tag.className = "categoryTag";
        tag.innerText = `${data.category} | ${data.subcategory}`;
        tag.style.backgroundColor = color;
        card.appendChild(tag);
    }
}

loadProjects();