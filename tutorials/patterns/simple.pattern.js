class ServiceLogistics {
    constructor(door = 6, price = '100.000 VND', name = 'Truck 10') {
        this.name = name;
        this.door = door;
        this.price = price;
    }

    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case '10':
                return new ServiceLogistics()
            case '20':
                return new ServiceLogistics(16, '1.000.000 VND', 'Truck 20')
        }
    }
}

console.log('Level xxx:::', ServiceLogistics.getTransport('10'));