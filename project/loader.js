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
const projectInfo = getProjectByID(projectID);


document.getElementById(
    "project-banner"
).src = getBannerSource(projectInfo.id)

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

properties += `Created: ${formatDate(projectInfo.startDate)}\n`
if (projectInfo.releaseDate) {
    properties += `Released: ${formatDate(projectInfo.releaseDate)}\n`
} else {
    properties += `Released: Not Released\n`
}
if (projectInfo.endDate) {
    properties += `Ended: ${formatDate(projectInfo.endDate)}\n`
}

properties += `Status: ${
    [
        "Cancelled or Ended", 
        "Active Development", 
        "On Hold"
    ][projectInfo.status]}\n`

document.getElementById(
    "project-properties"
).innerText = properties



let changeDisplay = document.getElementById(
    "project-changes"
)

if (projectInfo.github) {
    getLatestGithubCommits(projectInfo.github, 6).then(
        (commits) => {
            console.log(commits)
            for (let c of commits) {
                changeDisplay.innerHTML += `
                ${c[0]}<br>(${formatDate(c[1])})<br><br>
                `
            }
        }
    )
} else {
    changeDisplay.hidden = true
}