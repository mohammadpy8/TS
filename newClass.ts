type UserType = {
    name: string, 
    email: string,

}

interface User {
    name: string;
    email: string;

    age?: number;

    login:(username: string ) =>  boolean, 

};
////error
type UserType = {

}

interface User {
    city?: string
}

interface TeacherInterface extends User {
    score: number,
    subject: [],
}

let ali: UserType;
ali = {
    name: "ali",
    email: "ksfjhea", 
    age: 12,
    city: "",
    login(username: string) {
        console.log(username);
        return true
        
    }
}

const isRegister = (user: UserType) => {
    if (user.name === "amin") {
        return true;
    } else {
        return false;
    }
}

isRegister({ name: "ali", email: "" });
