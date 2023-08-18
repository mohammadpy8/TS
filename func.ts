interface Username {
    name: string,
    email: string,
    age: number,
}

const isLoginForm = (user: Username) => {
    if (user.name === "amin") {
        return true;
    } else {
        return false;
    }
};

const AddNew = (num1: number, num2: number) => {
    return num1 + num2;
}

const number15: number = 12;

export default isLoginForm;
export { number15, AddNew };