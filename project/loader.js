function formatDate(date) {
    // month day year

    let monthNames = [
        "January", "Febuary", "March",
        "April", "May", "Jun", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let month = monthNames[date[0]-1];
    if (!month) {
        month = "?"
    }

    if (date[1]) {
        day = date[1]
    } else {
        day = "?"
    }

    return `${month} ${day}, ${date[2]}`
}


const params = new URLSearchParams(window.location.search);
const projectID = params.get("id");
const projectInfo = projects[projectID];


let projectBanner = document.getElementById(
    "project-banner"
)
projectBanner.src = getBannerSource(projectID)
projectBanner.onload = function () {
    if (this.naturalWidth < 100) {
        this.style.imageRendering = 'pixelated'
    }
}

document.getElementById(
    "project-title"
).innerText = projectInfo.name

document.getElementById(
    "project-description"
).innerText = projectInfo.description


let redirectButton = document.getElementById("project-redirect");
if (projectInfo.link) {
    redirectButton.onclick = () => {
        window.location.href = projectInfo.link
    }
} else {
    redirectButton.hidden = true
}



let properties = '\n\n';

properties += `Started: ${formatDate(projectInfo.startDate)}\n`
if (projectInfo.releaseDate) {
    properties += `Released or finished: ${formatDate(projectInfo.releaseDate)}\n`
} else {
    properties += `Released or finished: Not Released or finished\n`
}
if (projectInfo.endDate) {
    properties += `Ended: ${formatDate(projectInfo.endDate)}\n`
}

document.getElementById(
    "project-properties"
).innerText = properties