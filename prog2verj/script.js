function generator(matLen, gr, grEat, pred, bact, sunk, shun, amp) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < bact; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < sunk; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < shun; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < amp; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }

    return matrix;

}

let side = 30;

let matrix = generator(15, 30, 10, 8, 5, 20, 7, 12);


let grassArr = []
let grassEaterArr = []
let predatorArr = []
let bactArr = []
let sunkArr = []
let shunArr = []
let ampArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            } else if (matrix[y][x] == 3) {
                let grE = new Predator(x, y)
                predatorArr.push(grE)
            } else if (matrix[y][x] == 4) {
                let grE = new Bact(x, y)
                bactArr.push(grE)
            } else if (matrix[y][x] == 5) {
                let grE = new Sunk(x, y)
                sunkArr.push(grE)
            } else if (matrix[y][x] == 6) {
                let grE = new Shun(x, y)
                shunArr.push(grE)

            } else if (matrix[y][x] == 7) {
                let grE = new Amp(x, y)
                ampArr.push(grE)

            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('black')
            }
            else if (matrix[y][x] == 6) {
                fill('brown')

            }
            else if (matrix[y][x] == 7) {
                fill("#009999")
            }
            rect(y * side, x * side, side, side)
        }
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in bactArr) {
        bactArr[i].mul()

    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }

    for (let i in shunArr) {
        shunArr[i].mul()
        shunArr[i].eat()

    }
    for (let i in ampArr) {
        ampArr[i].mul()


    }
}

var clickCount = 0;
function draw2(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}



function draw2() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('pink')
            } else if (matrix[y][x] == 2) {
                fill('pink')
            } else if (matrix[y][x] == 4) {
                fill('pink')
            } else if (matrix[y][x] == 6) {
                fill('pink')
            } else if (matrix[y][x] == 0) {
                fill('pink')
            } else if (matrix[y][x] == 3) {
                fill('pink')
            } else if (matrix[y][x] == 5) {
                fill('pink')
            } else if (matrix[y][x] == 7) {
                fill('pink')
            }
            rect(x * side, y * side, side, side)
        }
    }
}



var p = document.getElementById("pElement1");
p.addEventListener("click", draw2);

var clickCount = 0;
function draw3(evt) {
    clickCount++;
    console.log(evt);
    var str = "winter" + clickCount;
    this.innerText = str;
}
function draw3() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('purple')
            } else if (matrix[y][x] == 2) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('brown')
            } else if (matrix[y][x] == 6) {
                fill('red')
            } else if (matrix[y][x] == 0) {
                fill('pink')
            } else if (matrix[y][x] == 3) {
                fill('white')
            } else if (matrix[y][x] == 5) {
                fill('yellow')
            } else if (matrix[y][x] == 7) {
                fill('green')
            }
            rect(x * side, y * side, side, side)
        }
    }
}


var p = document.getElementById("pElement2");
p.addEventListener("click", draw3);

var clickCount = 0;
function draw4(evt) {
    clickCount+=3;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}
function draw4() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('black')
            } else if (matrix[y][x] == 2) {
                fill('grey')
            } else if (matrix[y][x] == 4) {
                fill('black')
            } else if (matrix[y][x] == 6) {
                fill('grey')
            } else if (matrix[y][x] == 0) {
                fill('balck')
            } else if (matrix[y][x] == 3) {
                fill('grey')
            } else if (matrix[y][x] == 5) {
                fill('black')
            } else if (matrix[y][x] == 7) {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
}


var p = document.getElementById("pElement");
p.addEventListener("click", draw4);

var statistics = {};
let a = 45;
let b = 10;
let c = 20;
let e = 10;
let d = 10;
let k = 10;
let z = 11;
setInterval(function () {
    statistics.grass = a++;
    statistics.grassEater = b++;
    statistics.sunk = c++;
    statistics.amp = e++;
    statistics.shun = d++;
    statistics.bact = k++;
    statistics.Predator = z++;


}, 6000)



var clickCount = 1;
function statis(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}

function statis() {
    console.log(setInterval(function () {
        statistics.grass = a++;
        statistics.grassEater = b++;
        statistics.sunk = c++;
        statistics.amp = e++;
        statistics.shun = d++;
        statistics.bact = k++;
        statistics.Predator = z++;

    }, 6000));

    console.log(statistics);
}

var p = document.getElementById("pElement2");
p.addEventListener("click", statis);


function windowLoad() {
    console.log("winter");
}
window.onload = windowLoad;






