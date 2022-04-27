import Common from '@/libs/common.js';

export default class StoreUtil {

	static attentionTypeKey() {
		return "current_attention_type";
	}

	/**
	 * 我的界面跳转到关注界面，参数传递
	 */
	static tempSaveCurrentAttentionType(attentionType) {
		uni.setStorageSync(this.attentionTypeKey(), attentionType);
	}

	static getCurrentAttentionType() {
		return uni.getStorageSync(this.attentionTypeKey());
	}

	static removeTempCurrentAttentionType() {
		return uni.removeStorage({
			key: this.attentionTypeKey()
		});
	}
}
