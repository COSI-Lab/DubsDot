var src = require('./links.json');
var fs = require('fs');

let result = dubsdotJsonToPug(src);

writeToFile("./includes/links.pug", result);

function dubsdotJsonToPug(src) {
	let result = "";

	// Loop through each section
	for(let item in src) {
		let name = capitalize(item);
		let content = src[item];

		result += "section\n\th1 " + name + "\n\tul\n";

		// Loop through each link in section
		for(let link in content) {
			let linkObj = content[link];
			result += "\t\tli\n"; // <li>
			result += "\t\t\ta(href=\"" + linkObj.url + "\") " + linkObj.name + "\n"; // <a>
			result += "\t\t\tp " + linkObj.desc + "\n"; // <p>
		}
	}

	return result;
}

function writeToFile(filename, str) {
	fs.writeFile(filename, str, err => {
		if(err) {
			return console.log(err);
		}

		console.log("File saved");
	});
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
