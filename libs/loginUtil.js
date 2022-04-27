import Common from '@/libs/common.js';

export default class LoginUtil {

	static tokenKey() {
		return "token";
	}

	static userKey() {
		return "user";
	}

	static checkAndGoLogin() {
		if (this.isNeedLogin()) {
			this.goLogin();
		}
	}

	static isNeedLogin() {
		let token = uni.getStorageSync(this.tokenKey());
		return Common.isEmpty(token);
	}

	static goLogin() {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}

	static saveTokenAndUser(loginData) {
		uni.setStorageSync(this.tokenKey(), loginData.token);
		uni.setStorageSync(this.userKey(), loginData.user);
	}


	static getToken() {
		return uni.getStorageSync(this.tokenKey());
	}

	static getUser() {
		return uni.getStorageSync(this.userKey());
	}

}
