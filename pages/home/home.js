import RestApi from "@/libs/restapi";

export class HomeApi extends RestApi {

	static listRecommendGoods(data) {
		return RestApi.doPost("/product/recommendPageList", data)
	}


}
