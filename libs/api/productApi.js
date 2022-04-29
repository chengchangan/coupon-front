import RestApi from "@/libs/restapi";

export class ProductApi extends RestApi {

	static searchGoods(data) {
		return RestApi.doPost("/product/search", data)
	}

	static attentionGoodsList(param) {
		return RestApi.execute('POST', '/attentionProduct/query', param, null);
	}

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

	static login(data) {
		return RestApi.execute('POST', '/user/login', data, null);
	}

	static logout() {
		return RestApi.doPost('/user/logout', null);
	}


}
