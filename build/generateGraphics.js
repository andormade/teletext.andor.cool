"use strict";

var PNG = require('pngjs').PNG;
var fs = require('fs');
var path = require('path');
var png2teletext = require('png2teletext');

const INPUT_DIR = 'src/graphics';
const OUTPUT_DIR = 'inbetween/graphics';

fs.readdirSync(INPUT_DIR).forEach((file) => {
	if (path.extname(file) === '.png') {
		file = INPUT_DIR + '/' + file;
		let data = fs.readFileSync(file);
		let png = PNG.sync.read(data);
		let teletext = png2teletext(png.data, png.width);
		let json = JSON.stringify(teletext);
		let outFile = OUTPUT_DIR + '/' + path.basename(file, '.png') + '.json';
		fs.writeFileSync(outFile, json);
	}
});
