export default class RestApi {

	static baseUrl() {
		// return "http://172.18.36.57:1002";
		return "http://39.108.97.141:1002";
	}


	static doPost(path, data) {
		return this.execute('POST', path, null, data);
	}


	static doGet(path) {
		return this.execute('GET', path, null, null);
	}

	static execute(method, path, param, body) {
		// 封装param参数
		if (param) {
			let requestParam = "";
			for (let key in param) {
				requestParam = requestParam + key + "=" + param[key] + "&";
			}
			requestParam = requestParam.substr(0, requestParam.length - 1);
			path = path + "?" + requestParam;
		}

		return uni.request({
			url: this.baseUrl() + path,
			method: method,
			data: body
		});


	}


}
