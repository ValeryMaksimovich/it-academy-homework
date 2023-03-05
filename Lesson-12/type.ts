import fse from 'fs-extra';

// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface Workers {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}
const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
    ];
// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву
interface User {
    name: string;
    age: number;
    occupation?: string;
    }
interface Admin {
    name: string;
    age: number;
    role?: string;
}
type Person = User | Admin;

const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// 3. Напишите анотации типов к этому классу.
interface IdentityManipulator {
    set: Function ;
    get: Function;
    delete: Function;
    getObject: Function;
    key: number;
    value: number;
}

class ObjectManipulator {

    constructor(protected obj: any) {}

    public set(key: 5, value: 3) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: 5) {
        return this.obj[key];
    }

    public delete(key: 5) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

// 4. Обеспечьте правильную типизацию для указанных функций.

export function map<T>(mapper: Function, input : T[]|any) : T[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]|any): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


export function filter<T>(filterer: Function, input: T[]|any) : T[]|Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[] | any): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

export function add(a: number, b:number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}