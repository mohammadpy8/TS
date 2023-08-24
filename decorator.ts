function Logger(param: number) {

    return function (constructor: Function) {
        
        console.log("logger decorator", constructor);
    
        constructor.prototype.id = crypto.randomUUID();
        constructor.prototype.id = param;
    };

};

function insertInDom(value: string) {

    return function (target: Function) {

        console.log(`Targer => ${target}`);
        
        const parentElm = document.querySelector("#root")!
        if (parentElm) {
            parentElm.innerHTML = value;
        } else {
            throw new Error("root Elemnt not found !!");
        };
    };

};

@Logger(25)

@insertInDom("<h1>Mohammad :))</h1>")

class User {
    constructor(
        public fisrtname: string,
        public lastname: string,
        public email: string,
    ) {
        this.fisrtname = fisrtname;
        this.lastname = lastname;
        this.email = email;
    }

    speak(word: string) {
        console.log(`${this.fisrtname} says ${word}`);
    }
    
};

const alirrr = new User("", "", "");
console.log(alirrr);

//////////////////////////////////
 