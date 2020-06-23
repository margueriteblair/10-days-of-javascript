class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray;
    }
    perimeter() {
        let sum = this.sidesArray.reduce(function(a, b){
            return a+b;
        }, 0);
        return sum;
    }
}