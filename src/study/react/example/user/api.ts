import UserInfo from "./UserInfo";

{
		if(! localStorage.getItem("userInfo")) {
				localStorage.setItem("userInfo", JSON.stringify(new UserInfo("테스트id", "테스트name", "테스트email")));
		}
}

export async function getUserInfo(): Promise<UserInfo>	{
		return new Promise(resolve => {

				setTimeout(() => {

						resolve(<UserInfo>JSON.parse(localStorage.getItem("userInfo")));

				}, 1000);
		});
}