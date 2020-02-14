import UserInfo from "./UserInfo";

{
    if (!localStorage.getItem("userInfo")) {

		let dummy = new Array(15).fill(undefined).map((val, index) => new UserInfo(`id-${index}`, `name-${index}`, `email-${index}`));
		console.log(dummy);
        localStorage.setItem("userInfo", JSON.stringify(dummy));
    }
}

let userList: Array<UserInfo> = JSON.parse(localStorage.getItem("userInfo"));

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
