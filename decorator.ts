function Logger(param: number) {

    return function (constructor: Function) {
        
        console.log("logger decorator", constructor);
    
        constructor.prototype.id = crypto.randomUUID();
        constructor.prototype.id = param;
    };

};

@Logger(25)

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
 