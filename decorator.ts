@Logger

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

    @Change

    speak(word: string) {
        console.log(`${this.fisrtname} says ${word}`);
    }
    
};