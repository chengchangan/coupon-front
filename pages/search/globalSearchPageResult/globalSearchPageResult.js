import RestApi from "@/libs/restapi";

export class GlobalSearchApi extends RestApi {

	static searchGoods(data) {
		return RestApi.doPost("/product/search", data)
	}


}
