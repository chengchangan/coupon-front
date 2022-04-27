import LoginUtil from "@/libs/loginUtil.js"
import Common from "@/libs/common.js"

function isPromise(obj) {
	return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}


uni.addInterceptor('request', {
	invoke(args) {

		let token = LoginUtil.getToken();
		// 请求发出前的拦截
		if (!Common.isEmpty(token)) {
			args.header = {
				'token': LoginUtil.getToken()
			}
		}
	},
	success(args) {
		// 可以判断是否 403,去登录页面
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
					resolve(res[1])
				}
			})
		})
	}
})
