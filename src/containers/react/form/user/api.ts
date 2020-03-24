import UserInfo from "./UserInfo";

{
    if (!localStorage.getItem("userData")) {

		let dummy = new Array(15).fill(undefined).map((val, index) => new UserInfo(index, `name${index}`, `email${index}`));
        localStorage.setItem("userData", JSON.stringify(dummy));
    }
}

let userList: Array<UserInfo> = JSON.parse(localStorage.getItem("userData"));

export async function getUserInfo(id: number): Promise<UserInfo> {
    return new Promise(resolve => {

        let timeoutId = setTimeout(() => {

            resolve(userList[id]);
            clearTimeout(timeoutId);

        }, 100);
    });
}

export async function getUserList(): Promise<Array<UserInfo>> {

    return new Promise(resolve => {

        let timeoutId = setTimeout(() => {

            resolve(userList);
            clearTimeout(timeoutId);
        }, 100);
    })
}

export async function deleteUser(id: number) {

    return new Promise(resolve => {

        setTimeout(() => {

            const toDel = userList.find(user => user.id === id);
            userList.splice(userList.indexOf(toDel), 1);
            localStorage.setItem("userData", JSON.stringify(userList));
            resolve(200);

        }, 100);
    });
}

export async function modifyUser(id: number, userInfo: UserInfo) {

    return new Promise(resolve => {

        setTimeout(() => {
            const toModify = userList.find(user => user.id === id);
            Object.assign(toModify, userInfo);
            localStorage.setItem("userData", JSON.stringify(userList));
            resolve(toModify);
        }, 100);
    });
}

export async function insertUser(userInfo: UserInfo) {

    return new Promise(resolve => {

        setTimeout(() => {
            userList.push(userInfo);
            localStorage.setItem("userData", JSON.stringify(userList));
            resolve(userInfo);
        }, 100);
    });
}
