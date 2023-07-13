// api/test/login.ts
import AxiosToken from "../index";

const { request } = AxiosToken;
let remoteUrl = "";

// 这里我是前面配置了自动引入pinia，要是报错记得检查一下
export const userAkiStore = defineStore("userAki", () => {
  //网易云api登陆接口
  async function userLogin(params: LoginAki) {
    return await request({
      url: remoteUrl + "/login/cellphone",
      method: "get",
      params: params,
    });
  }
  return { userLogin };
});
