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
    
function LowerCase(target: any, methodName: string, desciptor: PropertyDescriptor) {

    const mainMethod = desciptor.value;
    
    desciptor.value = function (value: string) {

        console.log(this);
        
        mainMethod.call(this, value.toLowerCase());
    };

    console.log(target);
    console.log(methodName);
    console.log(desciptor.value);

}

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

    @LowerCase

    speak(word: string) {
        console.log(`${this.fisrtname} says ${word}`);
    }
    
};

const alirrr = new User("", "", "");
alirrr.speak("Hello TS");
console.log(alirrr);

//////////////////////////////////
 