type Admin1 = {
    type: "ADMIN";
    name: string;
    privily: string;
};

type Teacher2 = {
    type: "TEACHER";
    name: string;
    startDate: Date;
};

const showUsers = (member: Admin1 | Teacher2) => {
    switch (member.type) {
        case "ADMIN": {
            console.log(member.privily);  
            break;
        } 
        case "TEACHER": {
            console.log(member.startDate);
            break;
        }
        default: {
            throw new Error("invalid member");
        }
    }
}