export default class RestApi {

	static baseUrl() {
		return "http://192.168.3.6:1002";
		// return "http://101.34.35.72:1002";
	}


	static doPost(path, data) {
		return uni.request({
			url: this.baseUrl() + path,
			method: "POST",
			data: data
		});
	}


	static doGet(path, data) {
		return uni.request({
			url: this.baseUrl() + path,
			method: "GET"
		});
	}


}
