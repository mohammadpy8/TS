interface User {
    name: string;
    email: string;

    login:(username: string ) =>  boolean, 

}

let ali: User;
ali = {
    name: "ali",
    email: "ksfjhea", 
    login(username: string) {
        console.log(username);
        return true
        
    }
}

const isRegister = (user: User) => {
    if (user.name === "amin") {
        return true;
    } else {
        return false;
    }
}

isRegister({ name: "ali", email: "" });
