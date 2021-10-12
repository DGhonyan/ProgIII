const { MotherOfLastTwo, deleteArr } = require('./Parents.js')

module.exports = class Idk extends MotherOfLastTwo{
	constructor(x, y) {
			super(x, y)
			this.energy = 0
	}

	move(){


		this.energy++


		let arr1 = super.chooseCell(0)
		let arr2 = super.chooseCell(1)
		let emptyCell = arr1[Math.floor(Math.random() * arr1.length)]
		let emptyCell2 = arr2[Math.floor(Math.random() * arr2.length)]

		if (this.energy % 10 == 0 && emptyCell) {
			let x = emptyCell[0]
			let y = emptyCell[1]
			matrix[y][x] = 5
			matrix[this.y][this.x] = 0
			this.x = x
			this.y = y
			this.energy = 0
		}else if (this.energy % 10 == 0 && emptyCell2) {
			let x = emptyCell2[0]
			let y = emptyCell2[1]
			matrix[y][x] = 5
			matrix[this.y][this.x] = 0
			this.energy = 0
			deleteArr(x, y, grassArr)
			this.x = x
			this.y = y

		}
	}

	create(){
		let rand = Math.round(Math.random() * (matrix.length - 1))
		if (matrix[rand][rand] != 4 && matrix[rand][rand] != 5) {

			let idk = new Idk(rand, rand)
			matrix[rand][rand] = 5
			idkArr.push(idk)
			deleteArr(rand, rand, eater);
			deleteArr(rand, rand, grassArr);
			deleteArr(rand, rand, eater2)
			deleteArr(rand, rand, ooiarr);
		}
	}	
}