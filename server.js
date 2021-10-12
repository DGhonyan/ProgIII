var weath = 'winter'
const Grass = require('./Characters/Grass')
const GrassEater = require('./Characters/GrassEater')
var EaterEater = require("./Characters/EaterEater.js");
var Waterfall = require("./Characters/Waterfall.js");
var Idk = require("./Characters/Idk")
let OutOfIdeas = require('./Characters/OutOfIdeas');


grassArr = [];
eater = [];
eater2 = [];
waterfall = [];
idkArr = [];
ooiarr = []
matrix = [];
grassCount = 0;
grassEaterCount = 0;
eater2Count = 0;
waterfallCount = 0; //i'm not gonna use this
ooiCount = 0;
idkCount = 0;

let a = 20

for (i = 0; i < a; i++) {
	let arr = Array.from({ length: a }, () => 0)
	matrix.push(arr)
}

var express = require('express');
const { off } = require('process');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);



function addGrass() {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0 && grassArr.length == 0){
        var gr = new Grass(x, y)
        grassCount++;
        grassArr.push(gr)
    }
    io.sockets.emit("send matrix", matrix);
}

function addGrassEater() {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0 || matrix[y][x] == 1) {
        let eater1 = new GrassEater(x, y)
        grassEaterCount++;
        eater.push(eater1)
    }
    io.sockets.emit("send matrix", matrix);
}

function addEater2() {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        let neater = new EaterEater(x, y)
        eater2Count++;
        eater2.push(neater)
    }
    

    io.sockets.emit("send matrix", matrix);
}

function addWaterfall() {
    if (waterfall.length == 0) {
        let w = new Waterfall(0, 0)
        waterfall.push(w)
    }
    io.sockets.emit("send matrix", matrix);
}

function addIdk() {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        let idk = new Idk(x, y)
        idkCount++;
        idkArr.push(idk)
    }
    io.sockets.emit("send matrix", matrix);
}

function addOOI() {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
    if (matrix[y][x] == 0) {
        let ooi = new OutOfIdeas(x, y)
        ooiCount++;
        ooiarr.push(ooi)
    }
    io.sockets.emit("send matrix", matrix);
}


const deleteGrass = () => {
    grassArr.splice(0, grassArr.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				matrix[y][x] = 0
			}
		}
	}
}

const deleteGrassEater = () => {
    eater.splice(0, eater.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 2) {
				matrix[y][x] = 0
			}
		}
	}
}


const deleteEater2 = () => {
    eater2.splice(0, eater2.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 3) {
				matrix[y][x] = 0
			}
		}
	}
}


const deleteWaterfall = () => {
    waterfall.splice(0, waterfall.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 4) {
				matrix[y][x] = 0
			}
		}
	}
}

const deleteIdk = () => {
    idkArr.splice(0, idkArr.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 5) {
				matrix[y][x] = 0
			}
		}
	}
}

const kill = () => {
    grassArr.splice(0, grassArr.length)
    eater.splice(0, eater.length)
    eater2.splice(0, eater2.length)
    waterfall.splice(0, waterfall.length)
    idkArr.splice(0, idkArr.length)
    ooiarr.splice(0, ooiarr.length)
    for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++){
			matrix[y][x] = 0
		}
	}
}

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

function winter(){
    weath = 'winter';
    io.sockets.emit('weather', weath)
}

function spring(){
    weath = 'spring';
    io.sockets.emit('weather', weath)
}

function summer(){
    weath = 'summer';
    io.sockets.emit('weather', weath)
}

function autumn(){
    weath = 'autumn';
    io.sockets.emit('weather', weath)
}

function noahsFlood(){
    if(waterfall.length == 0){
        let flood = new Waterfall(1, 0)
        waterfall.push(flood)
    }
    for (var i of waterfall) {
        i.multFlood();
    }
    let data = {
        matrix
    }
    io.sockets.emit('data', data)
}

function game() {
    if (grassArr.length <= 400) {
        for (var i of grassArr) {
            if (weath != 'winter')
            {
                i.mul();
                if (i.check == 1)
                grassCount++;
            }
        }
    }
    if (eater[0]) {
        for (let i of eater) {
            if(weath == 'winter')
                i.changeEnergy = 2;
            else if(weath == 'spring')
                i.changeEnergy = 8;
            else i.changeEnergy = 5;
            i.move();
            if (i.check == 1)
                grassEaterCount++;
        }
    }
    if (eater2[0]) {
        for (var i of eater2) {
            if(weath == 'winter')
                i.change = 0.5;
            else if(weath == 'spring')
                i.change = 2;
            else i.change = 1;
            i.move();
            if (i.check == 1)
                eater2Count++;
        }
    }
    if (waterfall[0]) {
        for (var i of waterfall) {
            if(weath == 'winter')
                i.change = 0.5
            else i.change = 1
            i.mult();
        }
    }
    if (idkArr[0]) {
        for (var i in idkArr) {
            idkArr[i].move();
            if(idkArr.length <= 2)
            {
                idkArr[i].create()
                idkCount++;
            }
        }
        
    }

    for(i of ooiarr){
        if (ooiarr.length < 2){
            i.create();
            ooiCount++;
        }
        i.move();
    }

    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            for(i in grassArr){
                if(x == grassArr[i].x && y == grassArr[i].y && matrix[y][x] === 0)
                    grassArr.splice(i, 1)
            }
        }
    }

    for (let y = 0; y < matrix.length; y++){
        for (let x = 0; x < matrix[y].length; x++){
            for(i in eater2){
                if(x == eater2[i].x && y == eater2[i].y && matrix[y][x] != 3)
                    eater2.splice(i, 1)
            }
        }
    }
    let sendData = {
        matrix: matrix,
        grassCount: grassArr.length,
        grassEaterCount: eater.length,
        Eater2Count: eater2.length,
        idkCount: idkArr.length,
        OOICount:ooiarr.length
    }
    io.sockets.emit("data", sendData);
    
}


io.on('connection', function (socket) {
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add eater2", addEater2);
    socket.on("add waterfall", addWaterfall);
    socket.on("add idk", addIdk);
    socket.on('add ooi', addOOI)
    socket.on("delete grass", deleteGrass);
    socket.on("delete grassEater", deleteGrassEater);
    socket.on("delete eater2", deleteEater2);
    socket.on("delete idk", deleteIdk);
    socket.on("winter", winter);
    socket.on("spring", spring);
    socket.on("summer", summer);
    socket.on("autumn", autumn);
    socket.on("delete waterfall", deleteWaterfall)
    socket.on('flood', noahsFlood)
});

setInterval(game, 50)

// setInterval(addGrass, 3000)
// setInterval(addGrassEater, 3000)
// setInterval(addWaterfall, 3000)
// setInterval(deleteWaterfall, 10000)
// setInterval(addIdk, 2000)
// setInterval(addOOI, 5000)


var statistics = {};

function Json() {
    statistics = {
        grassCount,
        grassEaterCount,
        eater2Count,
        idkCount,
        ooiCount
    }

    fs.writeFile("statistics.json", JSON.stringify(statistics), () => {
        console.log('Done!');
    })
}

setInterval(Json, 2000);