import RestApi from "@/libs/restapi";

export class DiscountSearchApi extends RestApi {

	static searchGoods(data) {
		return RestApi.doPost("/product/search", data)
	}


}
