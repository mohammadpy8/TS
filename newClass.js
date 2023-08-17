"use strict";
let ali;
ali = {
    name: "ali",
    email: "ksfjhea",
    age: 12,
    login(username) {
        console.log(username);
        return true;
    }
};
const isRegister = (user) => {
    if (user.name === "amin") {
        return true;
    }
    else {
        return false;
    }
};
isRegister({ name: "ali", email: "" });
