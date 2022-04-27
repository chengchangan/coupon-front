<template>
	<view>
		<view class="goods-nav">

			<view class="nav-item" @click="clicked(item)" v-for="(item,index) in this.computedGoodsNavs" :key=index>
				<view class="nav-icon" :style="{'backgroundImage': 'url(' + item.showIcon + ')'}">
				</view>
				<text class="nav-title">{{item.navTitle}}</text>
			</view>

			<view class="link-arrive" @click="openExternalApp()">
				<text class="link-arrive-title">链接直达</text>
			</view>
		</view>
	</view>
</template>

<script>
	import LoginUtil from "@/libs/loginUtil.js"
	export default {
		name: "GoodsNav",
		props: {
			favorite: {
				type: Boolean,
				default: false
			},
			recommend: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			computedGoodsNavs() {
				this.goodsNavs.forEach(item => {
					item.showIcon = item.icon;
					if (this.favorite && item.clickEvent === 'favorite') {
						item.showIcon = item.selectedIcon;
					}
					if (this.recommend && item.clickEvent === 'recommend') {
						item.showIcon = item.selectedIcon;
					}
				})
				return this.goodsNavs;
			}
		},
		data() {
			return {
				goodsNavs: [{
						"icon": "../../static/shoucang.png",
						"selectedIcon": "../../static/shoucang-1.png",
						"navTitle": "收藏",
						"clickEvent": "favorite"
					},
					{
						"icon": "../../static/tuijian.png",
						"selectedIcon": "../../static/tuijian-1.png",
						"navTitle": "推荐",
						"clickEvent": "recommend"
					},
					{
						"icon": "../../static/share.png",
						"navTitle": "分享",
						"clickEvent": "share"
					}
				]
			};
		},
		methods: {
			clicked(item) {
				LoginUtil.checkAndGoLogin();
				this.$emit(item.clickEvent);
			},
			icon(item) {
				return item.icon;
			},
			openExternalApp() {
				this.$emit('openExternalApp');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'goodsNav.scss';
</style>
