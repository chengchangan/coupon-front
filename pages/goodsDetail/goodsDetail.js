import RestApi from "@/libs/restapi";

export class GoodsDetailApi extends RestApi {

	static listRecommendGoods(data) {
		return RestApi.doPost("/product/recommendPageList", data)
	}

	static getGoodsDetail(itemId) {
		return RestApi.doGet("/product/getDetail/" + itemId)
	}

	static favorite(productId) {
		return RestApi.doGet("/attentionProduct/favorite/" + productId)
	}
	
	static recommend(productId) {
		return RestApi.doGet("/attentionProduct/recommend/" + productId)
	}
}
