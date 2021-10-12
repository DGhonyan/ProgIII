const { MotherOfNearlyAllThings } = require('./Parents.js')

class Grass extends MotherOfNearlyAllThings{
	constructor(x, y) {
		super(x,y);
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x,     this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, 	 this.y],
			[this.x + 1, 	 this.y],
			[this.x - 1, this.y + 1],
			[this.x, 	 this.y + 1],
			[this.x + 1, this.y + 1]
		];
		this.multiply = 3;
		this.check = 0; //checking when it multiplies for correct statistics
	}

	

	mul() {
		this.multiply++;
		this.check = 0;

		let arr = super.chooseCellG(0)
		let emptyCell = arr[Math.floor(Math.random() * arr.length)]
		if (this.multiply % 4 == 0 && emptyCell) {

			let x = emptyCell[0]
			let y = emptyCell[1]
			matrix[y][x] = 1
			var gr = new Grass(x, y)
			grassArr.push(gr)
			this.multiply = 0
			this.check = 1;
		}
	}
}

module.exports = Grass