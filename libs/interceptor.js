import LoginUtil from "@/libs/loginUtil.js"
import Common from "@/libs/common.js"
import {
	hex_md5,
	hex_hmac_md5
} from "@/libs/md5.js"

function isPromise(obj) {
	return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}


uni.addInterceptor('request', {
	invoke(args) {
		// 请求发出前的拦截
		
		let header = {};
		let token = LoginUtil.getToken();
		// 1、token补充
		if (!Common.isEmpty(token)) {
			header.token = token;
		}
		
		// 2、客户端类型补充 todo
		// console.log("客户端类型：",plus.os.name)

		// 3、有效请求标识
		let timestamp = Date.now();
		let signMark = hex_md5('sm' + timestamp);
		header.timestamp = timestamp;
		header.sign_mark = signMark;

		args.header = header;
	},
	success(args) {
		// 可以判断是否 401,去登录页面
		if (args.data.status === 401) {
			LoginUtil.goLogin();
		}
	},
	fail(err) {
		console.log('interceptor-fail', err)
	},
	complete(res) {
		if (res.data.status !== 200) {
			Common.showCustomToast(res.data.msg);
		}
		console.log('interceptor-complete', res)
	}
})

/**
 * 响应结果的截取，数组第二个才是response
 */
uni.addInterceptor({
	returnValue(res) {
		if (!isPromise(res)) {
			return res
		}
		return new Promise((resolve, reject) => {
			res.then(res => {
				console.log("开始请求")
				if (res[0]) {
					reject(res[0])
				} else {
					if (res[1].data) {
						resolve(res[1].data)
					} else {
						resolve(res[1])
					}
				}
			})
		})
	}
})
