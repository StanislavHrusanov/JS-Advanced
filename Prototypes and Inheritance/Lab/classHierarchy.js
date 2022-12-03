function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            this._area = 0;
        }
        get area() {
            return this._area
        }
        changeUnits(value) {
            this.units = value;
        }

        checkUnits(value) {
            if (value == 'cm') {
                return 1
            } else if (value == 'mm') {
                return 10;
            } else if (value == 'm') {
                return 100;
            }
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            return this.checkUnits(this.units) * this._radius;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            return this.checkUnits(this.units) * this._width;
        }
        get height() {
            return this.checkUnits(this.units) * this._height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}