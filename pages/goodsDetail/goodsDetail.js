import RestApi from "@/libs/restapi";

export class GoodsDetailApi extends RestApi {

	static listRecommendGoods(data) {
		return RestApi.doPost("/product/recommendPageList", data)
	}

	static getGoodsDetail(itemId) {
		return RestApi.doGet("/product/getDetail/" + itemId)
	}

}
