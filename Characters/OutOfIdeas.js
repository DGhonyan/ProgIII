const { MotherOfNearlyAllThings,deleteArr } = require('./Parents.js')

module.exports = class OutOfIdeas extends MotherOfNearlyAllThings{
	constructor (x, y){
		super(x, y)

		this.energy = 30
	}

	move() {
		let arr1 = super.chooseCell(0)
		let arr2 = super.chooseCell(1)
		let emptyCell = arr1[Math.floor(Math.random() * arr1.length)]
		let emptyCell2 = arr2[Math.floor(Math.random() * arr2.length)]

		if (this.energy > 0 && emptyCell) {
			let x = emptyCell[0]
			let y = emptyCell[1]
			matrix[y][x] = 6
			matrix[this.y][this.x] = 0
			this.x = x
			this.y = y
			this.energy -= 1
		} else if (this.energy > 0 && emptyCell2) {
			let x = emptyCell2[0]
			let y = emptyCell2[1]
			matrix[y][x] = 6
			matrix[this.y][this.x] = 0
			this.energy -= 1
			deleteArr(x, y, grassArr)
			this.x = x
			this.y = y
		}else if(this.energy <= 0)
		{
			this.explode()
		}
	}

	explode() {
		this.directions = [
            [this.x, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 1, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 1, this.y - 4],
            [this.x + 4, this.y - 1],
            [this.x + 4, this.y],
            [this.x + 4, this.y + 1],
            [this.x - 1, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x - 4, this.y - 1],
            [this.x - 4, this.y],
            [this.x - 4, this.y + 1],
            [this.x, this.y - 5],
            [this.x + 5, this.y],
            [this.x, this.y + 5],
            [this.x - 5, this.y], 
			[this.x, this.y - 6],
            [this.x + 6, this.y],
            [this.x, this.y + 6],
            [this.x - 6, this.y],
			[this.x, this.y - 7],
            [this.x + 7, this.y],
            [this.x, this.y + 7],
            [this.x - 7, this.y],
			[this.x, this.y - 8],
            [this.x + 8, this.y],
            [this.x, this.y + 8],
            [this.x - 8, this.y],
			[this.x, this.y - 9],
            [this.x + 9, this.y],
            [this.x, this.y + 9],
            [this.x - 9, this.y],
			[this.x, this.y - 10],
            [this.x + 10, this.y],
            [this.x, this.y + 10],
            [this.x - 10, this.y]
        ];
		for (i in this.directions)
		{
			let x = this.directions[i][0];
			let y = this.directions[i][1];

			if(x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1)
			{
				matrix[y][x] = 0;
				deleteArr(x, y, eater);
				deleteArr(x, y, grassArr);
				deleteArr(x, y, eater2);
				deleteArr(x, y, waterfall)
				deleteArr(x, y, idkArr);
				deleteArr(x, y, ooiarr)
			}
		}
		matrix[this.y][this.x] = 0;
	}
	create(){
		let rand = Math.round(Math.random() * (matrix.length - 1))
		if (matrix[rand][rand] != 4 && matrix[rand][rand] != 6) {

			var ooi = new OutOfIdeas(rand, rand)
			matrix[rand][rand] = 6
			ooiarr.push(ooi)
			deleteArr(rand, rand, eater);
			deleteArr(rand, rand, grassArr);
			deleteArr(rand, rand, eater2)
			deleteArr(rand, rand, idkArr);
		}
	}	
}