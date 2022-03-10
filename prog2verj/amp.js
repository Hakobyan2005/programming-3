class Amp extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        setTimeout(function () {
            if (newCell && this.multiply >= 15) {
                var newX = newCell[1];
                var newY = newCell[0];
                matrix[newY][newX] = 3;

                var newGr = new Amp(newX, newY);
                ampArr.push(newGr);
                this.multiply = 0;
            }
        }, 4000)
    }
}









