// date format is month, day, year
// dates before 8/26 be inaccurate

// name: Displayed name of project
// startDate: Month, day and year the project was started
// releaseDate: (if any) Month, day and year the project was released
// endDate: (if any) Month, day and year the project was cancelled or ended
// status: 0 = cancelled or ended, 1 = active, 2 = on hold (no development for an extended period of time)
// description: Obvious, isn't it?
// link: (if any) A URL with a working example or presentation of the project
// github: (if any) Name of the github repository containing the project

const projects = {
    "ultimate-sandbox":{
        "name":"Ultimate Sandbox",
        "category":"Software",
        "subcategory":"Game",

        "startDate":[null, null, 2021],
        "releaseDate":[null, null, 2021],
        "endDate":[null, null, 2021],

        "description":`Sandbox game.

        The original copy of this project was lost.
        
        This page will stay as a record.`,
    },

    "space-climb":{
        "name":"Space Climb",
        "category":"Software",
        "subcategory":"Game",

        "startDate":[null, null, 2022],
        "releaseDate":[null, null, 2022],
        "endDate":[null, null, 2023],

        "description":`Randomly-generated strategy game.

        The original copy of this version of Space Climb 
        was lost and is no longer available. There is a 
        newer version available at:
        https://thecreatorgrey.com/space-climb-reborn/
        
        This page will stay as a record.`,
    },

    "space-climb-reborn":{
        "name":"Space Climb Reborn",
        "category":"Software",
        "subcategory":"Game",

        "startDate":[6, 10, 2023],
        "releaseDate":[9, 2, 2023],
        "endDate":null,

        "description":`Randomly-generated strategy game.

        This idea started in an attempt to make a
        random 3D platformer level generator. I started
        applying psuedorandom numbers to different values of
        cubes and thought it looked cool.

        Instructions are available in-game.`,
        "link":"https://thecreatorgrey.com/space-climb-reborn"
    },

    "ruby-soundboard":{
        "name":"Ruby Soundboard",
        "category":"Software",
        "subcategory":"Tool",

        "startDate":[null, null, 2023],
        "releaseDate":[null, null, 2023],
        "endDate":[9, 16, 2024],

        "description":`Browser based soundboard.
        Click on the title of any card and select an audio file.
        You can click on any card with a file to play the sound.
        Originally made as a commission.
        `,
        "link":"https://thecreatorgrey.com/ruby-soundboard"
    },

    "voxelantis":{
        "name":"Voxelantis",
        "category":"Software",
        "subcategory":"Game",

        "previousAliases":["Mine Thing"],

        "startDate":[8, 29, 2023],
        "releaseDate":[8, 31, 2023],
        "endDate":null,

        "description":"Voxel based sandbox game.",
        "link":"https://thecreatorgrey.com/voxelantis"
    },

    "kodiak":{
        "name":"Kodiak",
        "category":"Software",
        "subcategory":"Tool",

        "startDate":[9, 18, 2023],
        "releaseDate":[12, 14, 2023],
        "endDate":null,

        "description":"WebGL game creation tool and level editor.",
        "link":"https://thecreatorgrey.com/kodiak/studio"
    },

    "wgfc":{
        "name":"Word Generator for Conlangs",
        "category":"Software",
        "subcategory":"Tool",

        "startDate":[8, 5, 2024],
        "releaseDate":[8, 5, 2024],
        "endDate":null,

        "description":"Word generator (for conlangs).",
        "link":"https://thecreatorgrey.com/wordgen/"
    },

    "clykr":{
        "name":"Clykr",
        "category":"Software",
        "subcategory":"Tool",

        "startDate":[8, 23, 2024],
        "releaseDate":[8, 23, 2024],
        "endDate":null,

        "description":"Simple autoclicker.",
        "link":"https://github.com/TheCreatorGrey/Clykr"
    },

    "raster-online":{
        "name":"Raster Online",
        "category":"Software",
        "subcategory":"Tool",

        "startDate":[9, 10, 2024],
        "releaseDate":[9, 13, 2024],
        "endDate":null,

        "description":"An online pixel art and raster editor originally created to make Voxelantis textures.",
        "link":"https://thecreatorgrey.com/raster-online/"
    },

    "desolate-loop":{
        "name":"Desolate Loop",
        "category":"Music",
        "subcategory":"Single",

        "startDate":[null, null, 2025],
        "releaseDate":[1, 8, 2025],
        "endDate":null,

        "description":"A loopable ambient track.",
        "link":"https://www.youtube.com/watch?v=1yOfSfGuP5k"
    },

    "tim":{
        "name":"Tim",
        "category":"Sewing",
        "subcategory":"Doll",

        "startDate":[null, null, 2024],
        "releaseDate":[10, 13, 2024],
        "endDate":null,

        "description":"My first sewing project."
    },

    "tabby":{
        "name":"Tabby",
        "category":"Sewing",
        "subcategory":"Doll",

        "startDate":[null, null, 2024],
        "releaseDate":[10, 15, 2024],
        "endDate":null,

        "description":"Tim's cat and successor."
    },

    "alan":{
        "name":"Alan",
        "category":"Sewing",
        "subcategory":"Doll",

        "startDate":[null, null, 2024],
        "releaseDate":[11, 17, 2024],
        "endDate":null,

        "description":"A doll made from an old shirt. Pattern designed largely in Blender."
    },

    "bust-sculpture":{
        "name":"Bust Sculpture",
        "category":"Art",
        "subcategory":"Sculpture",

        "startDate":[null, null, 2024],
        "releaseDate":[8, 20, 2024],
        "endDate":null,

        "description":"An eyeless and earless bust sculpture made in Blender."
    }
};

const categories = {
    "🪑":{
        "color":[255, 255, 0],
        "subcategories":["Game", "Tool"]
    },

    "☎️":{
        "color":[255, 0, 0],
        "subcategories":["Game", "Tool"]
    },
};


function getBannerSource(id) {
    let category = projects[id].category.toLowerCase();
    let source = `/banners/${category}/${id}.png`;

    let http = new XMLHttpRequest();
    
    http.open('HEAD', source, false);
    http.send();

    if (http.status === 404) {
        source = "/banners/missing.svg"
    }

    return source
}


function getProjectByID(id) {
    for (let p of projects) {
        if (p.id === id) {
            return p
        }
    }
}