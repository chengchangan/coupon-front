<template>
	<view class="user">

		<!-- 用户信息 -->
		<view class="user-info">
			<view>
				<image class="head-img"></image>
			</view>
			<view class="user-nick">
				<text>{{user.userNick}}</text>
			</view>
			<view class="setting" @click="setting">
				<image class="setting-img"></image>
			</view>

		</view>

		<!-- 工具栏 -->

		<view class="tool">
			<view class="tool-title">
				我的工具
			</view>
			<view class="tool-nav">

				<view class="nav-item" @click="waitImpl()">
					<view class="nav-icon nav-icon-browse"></view>
					<text class="nav-title">足迹</text>
				</view>

				<view class="nav-item" @click="attention('favorite')">
					<view class="nav-icon nav-icon-favorite"></view>
					<text class="nav-title">喜欢</text>
				</view>

				<view class="nav-item" @click="attention('depreciate')">
					<view class="nav-icon nav-icon-depreciate"></view>
					<text class="nav-title">降价</text>
				</view>

				<view class="nav-item" @click="waitImpl()">
					<view class="nav-icon nav-icon-service"></view>
					<text class="nav-title">客服</text>
				</view>

			</view>
		</view>


		<view class="tool">
			<view class="tool-title">
				更多工具
			</view>
			<view class="tool-nav">
				<view class="nav-item">
					<view class="nav-icon nav-icon-other"></view>
					<text class="nav-title">其他 </text>
				</view>
			</view>

		</view>


	</view>
</template>

<script>
	import LoginUtil from '@/libs/loginUtil.js'
	import StoreUtil from '@/libs/storeUtil.js'
	import Common from '@/libs/common.js'

	export default {
		data() {
			return {
				user: {}
			}
		},
		onShow() {
			LoginUtil.checkAndGoLogin();
			this.user = LoginUtil.getUser();
		},
		methods: {
			attention(attentionType) {
				StoreUtil.tempSaveCurrentAttentionType(attentionType)
				uni.switchTab({
					url: '/pages/favorite/favorite'
				})
			},
			setting(){
				
			},
			waitImpl() {
				Common.showCustomToast('等待精彩呈现哦~');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'my.scss';
</style>
