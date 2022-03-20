export default class RestApi {

	static baseUrl() {
		// return "http://192.168.3.6:1002";
		return "http://39.108.97.141:1002";
	}


	static doPost(path, data) {
		return uni.request({
			url: this.baseUrl() + path,
			method: "POST",
			data: data
		});
	}


	static doGet(path) {
		return uni.request({
			url: this.baseUrl() + path,
			method: "GET"
		});
	}

	static execute(options) {
		options.header = {
			'Authorization' : 'Bearer ' + token,
			'Content-Type' : 'application/json'
		}


	}


}
