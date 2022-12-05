function createComputerHierarchy() {
    class ComputerComponent {
        constructor(manufacturer) {
            if (this.constructor === ComputerComponent) {
                throw new Error("Can't initialize an instance of ComputerComponent");
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends ComputerComponent {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends ComputerComponent {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends ComputerComponent {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor === Computer) {
                throw new Error("Can't initialize an instance of Computer");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery
        }
        set battery(value) {
            if ((value instanceof Battery) === false) {
                throw new TypeError('battery is not instance of Battery');
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(value) {
            if ((value instanceof Keyboard) === false) {
                throw new TypeError('keyboard is not instance of Keyboard');
            }

            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if ((value instanceof Monitor) === false) {
                throw new TypeError('monitor is not instance of Monitor');
            }

            this._monitor = value;
        }
    }

    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}