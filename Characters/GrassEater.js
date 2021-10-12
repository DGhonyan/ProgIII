const { MotherOfNearlyAllThings, deleteArr } = require('./Parents.js')
const EaterEater = require('./EaterEater')

module.exports = class GrassEater extends MotherOfNearlyAllThings{
	constructor(x, y) {
		super(x, y)
		this.energy = 5
		this.changeEnergy = 5
		this.directions = [];
		this.check = 0;
	}

	mult() {
		var a = super.chooseCell(0)
		var b = super.chooseCell(1)
		var newXY = a[Math.floor(Math.random() * a.length)]
		var rand = b[Math.floor(Math.random() * b.length)]
		if (this.energy >= 50 && newXY) {
			let x = newXY[0]
			let y = newXY[1]
			matrix[y][x] = 2
			var grEater = new GrassEater(x, y)
			eater.push(grEater)
			this.energy -= 20
			this.check = 1;
		} else if (this.energy >= 50 && b.length > 0) {
			let x = rand[0]
			let y = rand[1]
			matrix[y][x] = 2
			var grEater = new GrassEater(x, y)
			eater.push(grEater)
			this.energy -= 20
			deleteArr(x, y, grassArr);
			this.check = 1;
		}

	}
	eat() {

		var a = super.chooseCell(1)
		var aaaa = super.chooseCell(0)


		var newXY = a[Math.floor(Math.random() * a.length)]

		if (newXY) {
			let x = newXY[0]
			let y = newXY[1]
			matrix[y][x] = 2

			matrix[this.y][this.x] = 0

			this.energy += this.changeEnergy

			deleteArr(x, y, grassArr);
			this.x = x
			this.y = y
		} else if (aaaa.length > 0) {

			var bbbb = aaaa[Math.floor(Math.random() * aaaa.length)]

			var c = bbbb[0]
			var d = bbbb[1]

			
			matrix[this.y][this.x] = 0
			
			matrix[d][c] = 2


			this.energy -= 1 / 2

			//deleteArr(c, d, grassArr);

			this.x = c
			this.y = d
		}
		if((matrix[this.y][this.x] == 1 || matrix[this.y][this.x] == 0) && checkArr === true){
			deleteArr(x, y, grassArr)
		}
	}

	move() {
		this.check = 0;
		if (this.energy >= 25) {
			this.mult()
		}

		let arr = this.chooseCell(1)
		let arr9 = this.chooseCell(0)
		if (arr.length > 0 || arr9.length > 0) {
			this.eat()
		} 

		var idk = this.chooseCell(5)

		if(idk.length > 0){ 
			var ul = idk[Math.floor(Math.random() * idk.length)]
			let x = ul[0]
			let y = ul[1]

			matrix[y][x] = 0

			this.energy -= 50

			deleteArr(x, y, idk);
		}

		if (this.energy <= 0) {
			this.die()
			if (eater.length >= 55) {
				let rand = Math.round(Math.random() * (matrix.length - 1))
				if(matrix[rand][rand] == 0 || matrix[rand][rand] == 1)
				{
					var eat3 = new EaterEater(rand, rand)
					eater2.push(eat3)
				}
			}
		}

	}

	die() {
		let y = this.y
		let x = this.x
		deleteArr(x, y, eater);
		matrix[y][x] = 0
	}
}

const checkArr = (x, y, arr) => {
	for(let i in arr){
		if(x == arr[i].x && y == arr[i].y)
		{
			return true;
		}
	}
}