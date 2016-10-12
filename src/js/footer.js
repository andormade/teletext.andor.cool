import BaseElement from './tom/src/baseElement';

const MOSAICS_BLACK = 0x10;
const MOSAICS_RED = 0x11;
const MOSAICS_GREEN = 0x12;
const MOSAICS_YELLOW = 0x13;
const MOSAICS_BLUE = 0x14;
const MOSAICS_MAGENTA = 0x15;
const MOSAICS_CYAN = 0x16;
const MOSAICS_WHITE = 0x17;

export default class Footer extends BaseElement {
	constructor(options) {
		super(options);
	}

	render() {
		let data = [];
		let negyed = Math.floor(this.width / 4);

		data[0] = 0x1e;
		data[1] = MOSAICS_RED;

		for (let row = 2; row < this.width; row++) {
			data[row] = 127;


			if (row / negyed === 1) {
				data[row] = MOSAICS_GREEN;
			}


			if (row / negyed === 2) {
				data[row] = MOSAICS_YELLOW;
			}


			if (row / negyed === 3) {
				data[row] = MOSAICS_CYAN;
			}
		}

		return [data];
	}
}
