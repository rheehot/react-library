import UserInfo from "./UserInfo";

{
    if (!localStorage.getItem("userInfo")) {

		let dummy = new Array(15).fill(undefined).map((val, index) => new UserInfo(index, `name${index}`, `email${index}`));
		console.log(dummy);
        localStorage.setItem("userInfo", JSON.stringify(dummy));
    }
}

let userList: Array<UserInfo> = JSON.parse(localStorage.getItem("userInfo"));

export async function getUserInfo(id: number): Promise<UserInfo> {
    return new Promise(resolve => {

        let timeoutId = setTimeout(() => {

            console.log(id);
            console.log(userList[id]);

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
            resolve(200);

        }, 100);
    });
}
