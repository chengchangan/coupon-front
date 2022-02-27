export default class Common {


	static showToast() {
		uni.showToast({
			title: "客官请稍等...",
			icon: "loading",
			mask: true,
			duration: 20000
		})
	}


	//判断字符是否为空的方法
	static isEmpty(obj) {
		if (typeof obj == "undefined" || obj == null || obj == "") {
			return true;
		} else {
			return false;
		}
	}

}
