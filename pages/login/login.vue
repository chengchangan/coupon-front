<template>
	<view class="login">
		<view>
			<image class="go-back-logo" @click="goBack" src="../../static/go-back.png"></image>
		</view>
		<view class="login-prompt-wrapper">
			<text class="login-title">账号密码登录</text>
			<text class="login-prompt">没有账户？
				<text class="prompt">登录自动创建</text>
			</text>
		</view>

		<form class="login-form" @submit="login">
			<view>
				<input class="login-input" name="username" type="text" placeholder-style="color:#9e9e9e" placeholder="请输入手机号" />
			</view>
			<view>
				<input class="login-input" name="password" type="text" placeholder-style="color:#9e9e9e" password placeholder="请输入密码" />
			</view>
			<view class="login-button">
				<button form-type="submit" type="warn">登录</button>
			</view>
		</form>


	</view>
</template>

<script>
	import LoginUtil from '@/libs/loginUtil.js'
	import Common from "@/libs/common.js"
	import {
		ProductApi
	} from '@/libs/api/productApi.js';


	export default {
		data() {
			return {

			}
		},
		methods: {
			login(e) {

				var formdata = e.detail.value
				console.log(JSON.stringify(formdata));


				ProductApi.login(formdata).then(res => {
					LoginUtil.saveTokenAndUser(res.data);
					Common.showCustomToast(res.msg);
					
					// 登录成功后退回上一级
					uni.navigateBack({
						delta: 1,
						animationType: 'pop-out',
						animationDuration: 200
					});
				}).catch(e => {

				});
			},
			goBack(){
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'login.scss';
</style>
