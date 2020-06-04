let argument = process.argv[2];

let node = require("node-essentials");
// Use Node File Stream
const fs = require('fs');
// Read Data File
let data = eval(fs.readFileSync(`./data/logs.json`)+'');

let fixed = '';
let csv = 'Message,Date\n';

data.forEach(element => {
    fixed += `Message: ${fixName(element.message)} \n Date: ${element.date}\n\n`;
    csv += `${fixName(element.message)},${element.date}\n`;
    node.writeToFile("logs", argument, "txt", fixed)
    node.writeToFile("logs", argument, "csv", csv)
});

function fixName(name) {
    if (name.includes("-")) {
        return name.split('-').join(' ');
    }
    else if (name.includes("_")) {
        return name.split('_').join(' ');
    }
    else {
        return titleCase(name);
    }
}