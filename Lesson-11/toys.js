
class Playrooms {
    getPrice() {
        return this.price || 0;

    }
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setSex(sex) {
        this.sex = sex;
    }

    setSize(size) {
        this.size = size;
    }
    setAge (age) {
        this.age = age;
    }
}

class Cars extends Playrooms {
    constructor() {
        super();
        this.setName('Cars')
        this.setPrice(50)
        this.setSex('Boys')
        this.setSize('Big')
        this.setAge (4 |5 | 6 | 7)
    }
}

class Dolls extends Playrooms {
    constructor() {
        super();
        this.setName('Dolls')
        this.setPrice(30)
        this.setSex('Girls')
        this.setSize('Small')
        this.setAge (4 |5 | 6 | 7)
    }
}

class Balls extends Playrooms {
    constructor() {
        super();
        this.setName('Balls')
        this.setPrice(10)
        this.setSex('Girls' | 'Boys')
        this.setSize('Big')
        this.setAge (4 |5 | 6 | 7)
    }
}

class Cubes extends Playrooms {
    constructor() {
        super();
        this.setName('Cubes')
        this.setPrice(15)
        this.setSex('Girls' | 'Boys')
        this.setSize('Small')
        this.setAge (3 |4 | 5 )
    }
}

class Composite extends Playrooms {
    constructor() {
        super();
        this.playrooms = [];
    }

    add(playroom) {
        this.playrooms.push(playroom);
    }

    getPrice() {
        return this.playrooms
            .map(playroom => playroom.getPrice())
            .reduce((a, b) => a + b)
    }
}
class Room extends Composite {
    constructor() {
        super();
        this.setName('Playroom for boys')
    }
}

class Room1 extends Composite {
    constructor() {
        super();
        this.setName('Playroom for girls')
    }
}

let room = new Room();
room.add(new Cars());
room.add(new Balls());
room.add(new Cubes());



console.log(`${room.getName()} price is ${room.getPrice()}`)

let room1 = new Room1();
room1.add(new Dolls());
room1.add(new Balls());
room1.add(new Cubes());



console.log(`${room1.getName()} price is ${room1.getPrice()}`)