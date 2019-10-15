const fs = require("fs");

function createFolder (folderName){
    fs.mkdir(folderName, ()=>{
        console.log ("Created main folder");
    })
}

function createStudent (folderName, studName, profile) {
    fs.mkdir(`./${folderName}/${studName}`, ()=>{
        console.log("Created student's folder");
    })
    fs.writeFile(`./${folderName}/${studName}/${studName}.txt`, profile, ()=> {
        console.log("Created personal profile")
    })
}

function picsAdd (picsFold, studFold) {
    fs.createReadStream(picsFold).pipe(fs.createWriteStream(studFold));
}

module.exports.createFolder = createFolder;
module.exports.createStudent = createStudent;
module.exports.picsAdd = picsAdd;
module.exports.toChangeFolder = toChangeFolder;