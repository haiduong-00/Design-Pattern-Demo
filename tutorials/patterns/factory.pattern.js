// create service Car

class Car {
    constructor( {name = 'Ford Ranger 2023', doors = 4, price = '10 VNĐ', customerInfo = {} } ){
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

// create service logistics
class ServiceLogistics {
    transportClass = Car
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo)
    }
}

// order for customer by Car
const carService = new ServiceLogistics()
console.log('CarServic::', carService.getTransport(
    {
        customerInfo: {
            name: 'duonghai',
            cargoVolume: '100 kg'
        }
    }
));

// cach 1:
class Truck {
    constructor( {name = 'Container 2023', doors = 16, price = '100 VNĐ', customerInfo = {} } ){
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

carService.transportClass = Truck
console.log('TruckServic::', carService.getTransport(
    {
        customerInfo: {
            name: 'NgocDiep',
            cargoVolume: '1000 kg'
        }
    }
));

// cach 2:
class TruckService extends ServiceLogistics {
    transportClass = Truck
}

const truckService = new TruckService()
console.log('TruckServic::', carService.getTransport(
    {
        customerInfo: {
            name: 'ABC',
            cargoVolume: '1000 kg'
        }
    }
));
