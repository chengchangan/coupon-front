export default class Common {


	static showToast() {
		uni.showToast({
			title: "客官请稍等...",
			icon: "loading",
			mask: true,
			duration: 20000
		})
	}

	static showCustomToast(msg) {
		uni.showToast({
			title: msg,
			duration: 1500
		})
	}

	static hideToast() {
		uni.hideToast();
	}

	//判断字符是否为空的方法
	static isEmpty(obj) {
		if (typeof obj == "undefined" || obj == null || obj === "") {
			return true;
		} else {
			return false;
		}
	}

}
