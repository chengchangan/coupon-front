import RestApi from "@/libs/restapi";

export class FavoriteApi extends RestApi {

	static attentionGoodsList(param) {
		return RestApi.execute('POST', '/attentionProduct/query', param, null);
	}


}
