class ListItems<T extends boolean | number | string> {
    private items: T[] = [];

    addItem(item: T) {
        
        this.items.push(item);

        return true;
    };

    getItems(): T[] {
        return [...this.items];
    }
};

class ListItems2 {
    private items: (boolean | number | string)[] = [];

    addItem(item:boolean | number | string) {
        
        this.items.push(item);

        return true;
    };

    getItems() {
        return [...this.items];
    }
};

//////////////////////////////////

interface User {
    username: string;
    email: string;
    age:number
}

interface optionalUser {
    username?: string;
    email?: string;
}

const alireza10: User = { username: "ali", email: "", age:10 };
const mohammadreza10: optionalUser = {}; 

type optialUserName<T> = {
    [key in keyof T]?: T[key]
};

const alimohmmad: optialUserName<User> = { username: "" };  

type readOnly = {
    readonly [key in keyof User]: User[key];
};

const amialiii: readOnly = { username: "amir", email: "", age: 15 };
amialiii.age = 25; ////error
console.log(amialiii);




