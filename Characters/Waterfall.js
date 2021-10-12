const { MotherOfLastTwo, deleteArr } = require('./Parents.js')

module.exports = class Waterfall extends MotherOfLastTwo{
	constructor(x, y) {
		super(x, y);
		this.energy = 6;
		this.change = 1;

		this.directionsF = [
			[this.x - 1, this.y - 1],
			[this.x,     this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, 	 this.y],
			[this.x + 1, 	 this.y],
			[this.x - 1, this.y + 1],
			[this.x, 	 this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}

	mult() {
		this.energy += this.change;
		var a = super.chooseCellW()
		var newXY = a[Math.floor(Math.random() * a.length)]

		if (a.length > 0 && this.energy % 4 == 0) {
			let x = newXY[0]
			let y = newXY[1]
			matrix[y][x] = 4

			var waterfall1 = new Waterfall(x, y)

			waterfall.push(waterfall1)

			deleteArr(x, y, eater);
			deleteArr(x, y, grassArr);
			deleteArr(x, y, eater2);
			deleteArr(x, y, idkArr);
			deleteArr(x, y, ooiarr);
		}
	}


	chooseCellF() {
		var found = []
		for (var i in this.directionsF) {

			var x = this.directionsF[i][0]
			var y = this.directionsF[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] !== 4 ) {
				found.push(this.directionsF[i])
			}

		}
		return found
	}

	multFlood() {
		this.energy += 2;
		var a = this.chooseCellF()
		var newXY = a[Math.floor(Math.random() * a.length)]

		if (a.length > 0 && this.energy % 4 == 0) {
			let x = newXY[0]
			let y = newXY[1]
			matrix[y][x] = 4

			var waterfall1 = new Waterfall(x, y)

			waterfall.push(waterfall1)

			deleteArr(x, y, eater);
			deleteArr(x, y, grassArr);
			deleteArr(x, y, eater2);
			deleteArr(x, y, idkArr);
			deleteArr(x, y, ooiarr);
		}
	}



	die() {
		waterfall.splice(0, waterfall.length)
		let y = this.y
		let x = this.x
		matrix[y][x] = 0
	}

}