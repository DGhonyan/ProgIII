const { MotherOfNearlyAllThings, deleteArr } = require('./Parents.js')
const Idk = require('./Idk')

module.exports = class EaterEater extends MotherOfNearlyAllThings{
	constructor(x, y) {
		super(x, y)
		this.energy = 10
		this.speed = 2;
		this.change = 2;
		this.directions = []
		this.check = 0;
	}

	mult() {
		var a = super.chooseCell(0)
		var newXY = a[Math.floor(Math.random() * a.length)]
		if (newXY) {
			let x = newXY[0]
			let y = newXY[1]
			matrix[y][x] = 3
			var eatEater = new EaterEater(x, y)
			eater2.push(eatEater)
			this.energy -= 20
			this.check = 1;
		}
	}

	eat() {
		var a = super.chooseCell(2)

		var newXY = a[Math.floor(Math.random() * a.length)]

		let x = newXY[0]
		let y = newXY[1]

		matrix[y][x] = 3

		matrix[this.y][this.x] = 0

		this.energy += 5


		deleteArr(x, y, eater);
		this.x = x
		this.y = y
	}

	move() {
		this.check = 0;
		this.speed += this.change
		if (this.energy >= 70) {
			this.mult()
		}


		let arr = super.chooseCell(2)

		if (arr.length > 0) {
			this.eat()
		} else if (arr.length <= 0) {
			let arr1 = super.chooseCell(0)
			let arr2 = super.chooseCell(1)
			let emptyCell = arr1[Math.floor(Math.random() * arr1.length)]
			let emptyCell2 = arr2[Math.floor(Math.random() * arr2.length)]

			if (this.energy > 0 && emptyCell && this.speed % 2 == 0) {
				let x = emptyCell[0]
				let y = emptyCell[1]
				matrix[y][x] = 3
				matrix[this.y][this.x] = 0
				this.x = x
				this.y = y
				this.energy -= 1
			} else if (this.energy > 0 && emptyCell2 && this.speed % 2 == 0) {
				let x = emptyCell2[0]
				let y = emptyCell2[1]
				matrix[y][x] = 3
				matrix[this.y][this.x] = 0
				this.energy -= 1
				deleteArr(x, y, grassArr);
				this.x = x
				this.y = y
			}

		}

		let idk = this.chooseCell(5)

		if(idk.length > 0){

			matrix[this.y][this.x] = 5

			let x = this.x  
			let y = this.y 

			let idk2 = new Idk(x,y)
			idkArr.push(idk2)

			deleteArr(x, y, eater2);
		}

		if (this.energy <= 0) {
			this.die()
		}
	}

	die() {
		if (checkArr(this.x, this.y, grassArr) == 123){
			deleteArr(this.x, this.y, grassArr)
		}
		deleteArr(this.x, this.y, eater2);
		matrix[this.y][this.x] = 0
	}
}

const checkArr = (x, y, arr) => {
	for(let i in arr){
		if(x == arr[i].x && y == arr[i].y)
		{
			return 123;
		}
	}
}