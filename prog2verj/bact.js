class Bact extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        setTimeout(function () {
            if (newCell && this.multiply >= 16) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 4;

                var newGr = new Bact(newX, newY);
                bactArr.push(newGr);
                this.multiply = 0;
            }
        }, 4000)
    }
}