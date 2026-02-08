const tab_icon = document.getElementById("icon");
const column = document.getElementById("column");

const character = document.getElementById("booker");
const source_display = document.getElementById("source_display"); // // remove
const path_buttons = document.getElementById("path_buttons");
const back_button = document.getElementById("back_button");

const description = document.getElementById("description");
const children = document.getElementById("children");



function applyStyling(styling) {
    if (styling.background) {
        document.body.style.background = `url(${styling.background})`
    }
    if (styling.bg_size) {
        document.body.style.backgroundSize = `${styling.bg_size}px`
    }
    if (styling.text_color) {
        let rgb = styling.text_color;
        column.style.color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    }
    if (styling.column_color) {
        let rgba = styling.column_color;
        column.style.backgroundColor = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`
    }
    if (styling.column_border_color) {
        let rgba = styling.column_border_color;
        column.style.borderColor = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`
    }
    if (styling.character) {
        character.src = styling.character
    }
    if (styling.icon) {
        tab_icon.href = styling.icon
    }

    console.log(styling)
}


// Parses the index of a branch into an object
async function getBranchIndex(location) {
    let response = await fetch(arrayToPath(location) + "/index.json");
    if (!response.ok) {
        return null
    }

    let json;
    try {
        json = await response.json();
    } catch {
        return null
    }

    return json
}


// Exactly what it says. Converts an array to a path string
function arrayToPath(arr) {
    let path = "";
    for (let i of arr) {
        path += `/${i}`
    }
    return path
}




// Path to current branch in array form
var branch_loc = ["content"];

// Go back to parent/previous branch
back_button.onclick = () => {
    if (1 < branch_loc.length) {
        branch_loc.pop();
        index()
    }
}

// Load branch into explorer
async function index() {
    // Load path buttons
    path_buttons.innerHTML = "";
    for (let [i, branch] of branch_loc.entries()) {
        let button = document.createElement("button");
        button.className = "path_button";
        button.innerText = branch;

        button.onclick = () => {
            branch_loc = branch_loc.slice(0, i+1);
            index()
        }

        path_buttons.appendChild(button);
    }


    children.innerHTML = "";
    description.innerText = "";

    let json = await getBranchIndex(branch_loc);

    if (!json) {
        children.innerText = "If you're seeing this, it's because I was an idiot and didn't set up the index properly. Or maybe there is something wrong with the server. I don't know."
    }

    description.innerText = json.description;

    // Display child branches if there are any
    if (json.branches) {
        for (let branch of json.branches) {
            let branch_json = await getBranchIndex([...branch_loc, branch]); // Unpacking the original array inside a new array with an item at the end effectively appends an item to a copy of the array without modifying the original
    
            let link = document.createElement("a");
            link.innerText = branch;
            link.href = "javascript:void(0)";
            link.onclick = () => { // Load the child branch
                branch_loc.push(branch);
                index()
            }
            children.appendChild(link);
    
            let about = document.createElement("div");
            about.innerText = " - " + branch_json.about;
            children.appendChild(about);
        }

        if (json.links) {
            children.appendChild(
                document.createElement("hr")
            )
        }
    }

    // Display links if there are any
    if (json.links) {
        for (let link of json.links) {    
            let a = document.createElement("a");
            a.innerText = link.name;

            // If the link's type is "relative", the link property should be the name of a file in the folder of the branch
            if (link.type.toLowerCase() == "relative") {
                a.href = arrayToPath(branch_loc) + "/" + link.link;
            } else if (link.type.toLowerCase() == "url") { // If the link's type is "url", the link property should be a URL.
                a.href = link.link;
            }

            children.appendChild(a);
        }
    }


    // Display a message if there are neither child branches nor links
    if (!json.links && !json.branches) {
        let text = document.createElement("h4");
        text.innerText = "There is currently no content here.";
        children.appendChild(text);
    }
    
    
    
    let styling = { // Default styling. Each property will be replaced by any styling the branch has.
        "background":"/assets/backgrounds/background_tile_purple.png",
        "bg_size":50,
        "text_color":[255, 255, 255],
        "column_color":[0, 0, 0, 0.5],
        "column_border_color":[138, 37, 233, 1],
        "character":"/assets/characters/booker.png",
        "icon":"/assets/characters/booker.png"
    };

    if (json.styling) {
        for (let p in json.styling) {
            styling[p] = json.styling[p]
        }
    }

    applyStyling(styling)
}
index();