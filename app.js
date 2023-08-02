var user = {
    id: 1,
    username: "alo",
    age: 15,
    skills: [false],
};
user.age = 12;
console.log(user.id);
/////////////////
var users = [
    "amin",
    "ali",
    "babak",
    [],
];
users.push(false);
var items = [
    [false, "admin"],
    [12, "b"],
];
/////////////////
var roul = [1, "1", 2];
//////////////////
function inLogin(userName, password) {
    if (userName === "admin" && password === "admin") {
        return true;
    }
    else {
        return false;
    }
}
console.log(inLogin("m", "m"));
/////////////////////////
var test = 12;
var testt = 12;
function sum(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return (param1 + param2);
    }
    else if (typeof param1 === "string" && typeof param2 === "string") {
        return (param1.toString() + param2.toString());
    }
}
;
console.log(sum("a", "b"));
var userss = [];
//////////////////////////
var age = 10;
age = 20; ////not
function setProperty(params) {
    return "20".concat(params);
}
;
console.log(setProperty("rem"));
///////////////////////////
var num1 = 12;
var num2 = 10;
var sum2 = "sum: ".concat(num1 + num2);
function setCSS(paramss) {
    return (paramss);
}
;
console.log(setCSS("12px"));
//////////////////////////
var testVar = 12;
if (typeof testVar === "number") {
    testVar++;
}
if (typeof testVar === "string") {
    testVar.length;
}
testVar = "js";
console.log(testVar);
//////////////////////////////
var mohammad = "mohammad";
var firstName = mohammad;
var subTitle = mohammad;
console.log(mohammad.length);
//////////////////////////////////
var ali = 12;
// ali = 15; ////error//////
var numbers = [12, 13];
// numbers.push(10);/////error;
function sum3(num1, num2) {
    return num1 + num2;
}
console.log(sum3.apply(void 0, numbers));
////////////////////////////////
var favorite = ["js", "st"];
var users1 = [
    {
        id: 1,
        name: "amin",
        favorite: favorite,
    }
];
users1[0].favorite.push("coding");
var actions = [
    { type: "ADD" },
    { type: "REMOVE" },
];
for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
    var action = actions_1[_i];
    if (action.type === "CREATEAD") { /////////error is loading///////
        console.log("CREATEAD");
    }
    else {
        console.log("REMOVEs");
    }
}
//////////////////////////////////////////
var numbersssss = [12, 13];
// numbersssss.push(15); ///////error///
var linkElem = document.querySelector(".link"); /////////////tashkhis in exist elemenet
var useName = document.querySelector("input");
var useName2 = document.querySelector("input");
console.log(useName === null || useName === void 0 ? void 0 : useName.className);
//////////////////////////////
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
})(Role || (Role = {}));
;
var userName12 = {
    id: 1,
    name: "m",
    age: 20,
    role: Role.admin
};
if (userName12.role === Role.admin) {
    console.log("access");
}
else {
    console.log("no access");
}
//////////////////////////////////////////
var sumation = function (num, num2) {
    return (num + num2);
};
var logger = function (param) {
    console.log(param);
    //////function is not return any think
};
var looger = function () {
    return undefined;
};
/////////////////////////////////////////
