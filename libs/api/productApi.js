import RestApi from "@/libs/restapi";

export class ProductApi extends RestApi {

	static searchGoods(data) {
		return RestApi.doPost("/core/product/search", data)
	}

	static attentionGoodsList(param) {
		console.log("查询关注的")
		return RestApi.execute('POST', '/core/attentionProduct/query', param, null);
	}

	static listRecommendGoods(data) {
		return RestApi.doPost("/core/product/recommendPageList", data)
	}

	static getGoodsDetail(itemId) {
		return RestApi.doGet("/core/product/getDetail/" + itemId)
	}

	static favorite(productId) {
		return RestApi.doGet("/core/attentionProduct/favorite/" + productId)
	}

	static recommend(productId) {
		return RestApi.doGet("/core/attentionProduct/recommend/" + productId)
	}

	static login(data) {
		return RestApi.execute('POST', '/core/user/login', data, null);
	}

	static logout() {
		return RestApi.doPost('/core/user/logout', null);
	}


}
