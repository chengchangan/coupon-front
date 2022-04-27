import RestApi from "@/libs/restapi";

export class HomeApi extends RestApi {

	static listRecommendGoods(data) {
		return RestApi.doPost("/product/recommendPageList", data)
	}


	static login(data) {
		let param = "username=" + data.username + "&password=" + data.password;
		return RestApi.doPost("/user/login?" + param, null);
	}
}
