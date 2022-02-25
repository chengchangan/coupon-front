export default class RestApi {

	static baseUrl() {
		return "http://localhost:1002";
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
