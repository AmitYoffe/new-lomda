interface IUserInfo {
    firstname: string;
    lastname: string;
    // more?
}

// When the active directory function is complete there should be a connection between them

function UserGreetings({ firstname, lastname }: IUserInfo) {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return `בוקר טוב, ${firstname} ${lastname}`;
    } else if (currentHour >= 12 && currentHour < 17) {
        return `צהריים טובים, ${firstname} ${lastname}`;
    } else if (currentHour >= 17 && currentHour < 22) {
        return `ערב טוב, ${firstname} ${lastname}`;
    } else {
        return `לילה טוב, ${firstname} ${lastname}`;
    }
}


export default UserGreetings;