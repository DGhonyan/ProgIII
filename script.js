var socket = io();
let weath;
var side = 15;

function setup() {
    background("black");
}

socket.on("weather", function (data) {
    weath = data;
})

socket.on("data", draw)



function draw(data) {

    let { grassCount, grassEaterCount, Eater2Count, idkCount, OOICount } = data

    document.getElementById('grass').innerText = 'Grass ' + grassCount

    document.getElementById('eater').innerText = 'Grass Eater ' + grassEaterCount

    document.getElementById('eater2').innerText = 'Eater Eater ' + Eater2Count

    document.getElementById('idk').innerText = 'Coral things ' + idkCount

    document.getElementById('OOI').innerText = 'Purple things ' + OOICount
    let matrix = data.matrix
    createCanvas(matrix.length * side, matrix.length * side);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("#333300");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("#00d40e");
                }
            } else if (matrix[y][x] == 0) {
                fill('#c4c4c4')
            } else if (matrix[y][x] == 2) {
                fill('#D10408')
            } else if (matrix[y][x] == 3) {
                fill('#000000')
            } else if (matrix[y][x] == 4) {
                if(weath == 'winter'){
                    fill('#88c4d8')
                }else if(weath == 'autumn')
                    fill('#042749')
                else fill('#0a12ff')
            }else if(matrix[y][x] == 5){
                fill('coral')
            }else if(matrix[y][x] == 6){
                fill('purple')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

function kill() {
    socket.emit("kill")
}

function addGrass() {
    socket.emit("add grass")
}

function addGrassEater() {
    socket.emit("add grassEater")
}

function deleteEater2() {
    socket.emit("delete eater2")
}

function deleteGrassEater() {
    socket.emit("delete grassEater")
}

function deleteGrass() {
	socket.emit("delete grass")
}

function deleteIdk() {
	socket.emit("delete idk")
}

function deleteWaterfall() {
	socket.emit("delete waterfall")
}

function addWaterfall() {
    socket.emit("add waterfall")
}

function addIdk() {
    socket.emit("add idk")
}

function addEater2() {
    socket.emit("add eater2")
}

function addOOI() {
    socket.emit("add ooi")
}

function kill() {
    socket.emit('kill')
}

function winter() {
    socket.emit('winter')
}


function spring() {
    socket.emit('spring')
}


function summer() {
    socket.emit('summer')
}


function autumn() {
    socket.emit('autumn')
}

function noahsFlood(){
    socket.emit('flood')
}