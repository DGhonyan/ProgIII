class MotherOfNearlyAllThings{
	constructor(x, y) {
		this.x = x;
		this.y = y;

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
	}

	updateDirection() {
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
	}

	chooseCellG(character) {
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == character) {
				found.push(this.directions[i])
			}

		}
		return found
	}

	chooseCell(character) {
		this.updateDirection()
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == character) {
				found.push(this.directions[i])
			}

		}
		return found
	}
	chooseCell1() {
		this.updateDirection()
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] != 4 && matrix[y][x] != 6) {
				found.push(this.directions[i])
			}

		}
		return found
	}
}

class MotherOfLastTwo{
	constructor(x, y){
		this.x = x;
		this.y = y;

		this.directions = [
			[this.x, this.y - 1],
			[this.x - 4, this.y],
			[this.x + 4, this.y],	
			[this.x, this.y + 1]
		];
	}

	updateDirection(){
		this.directions = [
			[this.x, this.y - 1],
			[this.x - 4, this.y],
			[this.x + 4, this.y],	
			[this.x, this.y + 1]
		];
	}

	updateDirectionIdk() {
		this.directions = [
			[this.x, this.y - 4],
			[this.x - 4, this.y],
			[this.x + 4, this.y],	
			[this.x, this.y + 4]
		];
	}
	chooseCell1() {
		this.updateDirection()
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] !== 5) {
				found.push(this.directions[i])
			}

		}
		return found
	}

	chooseCell(ch) {
		this.updateDirectionIdk()
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == ch && matrix[y][x] !== 5) {
				found.push(this.directions[i])
			}

		}
		return found
	}

	chooseCellW() {
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] !== 4 ) {
				found.push(this.directions[i])
			}

		}
		return found
	}

}

const deleteArr = (x, y, arr) => {
	for (let i in arr) {
		if (x == arr[i].x && y == arr[i].y) {
			arr.splice(i, 1);
			break;
		}
	}
}

module.exports = {
    MotherOfLastTwo,
    MotherOfNearlyAllThings, 
    deleteArr
}