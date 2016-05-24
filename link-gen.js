var src = require('./links.json');
var fs = require('fs');

var result = "";

for(let item in src) {
	let name = item;
	let content = src[item];

	result += "section\n\th1 " + name + "\n\tul\n";
	for(let link in content) {
		let linkObj = content[link];
		result += "\t\tli\n\t\t\ta(href=\"" + linkObj.url + "\") " + linkObj.name + "\n";
		result += "\t\t\tp " + linkObj.desc + "\n";
	}
}

console.log(result);
fs.writeFile("./includes/links.pug", result, err => {
	if(err) {
		return console.log(err);
	}

	console.log("File saved");
});
