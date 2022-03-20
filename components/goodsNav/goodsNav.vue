<template>
	<view>
		<view class="goods-nav">

			<view class="nav-item" v-for="(item,index) in goodsNavs" :key=index>
				<view class="nav-icon" :style="{'backgroundImage': 'url(' + item.icon + ')'}">
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
	export default {
		name: "GoodsNav",
		data() {
			return {
				goodsNavs: [{
						"icon": "../../static/shoucang.png",
						"selectedIcon": "../../static/shoucang-1.png",
						"navTitle": "收藏"
					},
					{
						"icon": "../../static/share.png",
						"navTitle": "分享"
					},
					{
						"icon": "../../static/tuijian.png",
						"selectedIcon": "../../static/tuijian-1.png",
						"navTitle": "推荐"
					}
				]
			};
		},
		methods: {
			openExternalApp() {
				this.$emit('openExternalApp');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'goodsNav.scss';
</style>
