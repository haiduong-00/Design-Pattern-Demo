class Leader{
    receiveRequest(offer){
        console.log(`BOSS said:OK:${offer}`);
    }
}

class Secretary {
    constructor() {
        this.leader = new Leader()
    }

    receiveRequest(offer) {
        // date...
        this.leader.receiveRequest(offer)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer
    }

    applyFor(target) {
        target.receiveRequest(this.offer)
    }
}

// How to use
// proxy luôn đứng giữa 2 Object để nhận và gửi dữ liệu

const devs = new Developer("i upto 5K USD")
devs.applyFor(new Secretary)