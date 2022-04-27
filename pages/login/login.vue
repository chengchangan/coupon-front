<template>
	<view>
		<view>
			<text>欢迎来到登录页面</text>
		</view>
		<form @submit="login">
			<view class="uni-form-item uni-column">
				<label class="title">账号</label>
				<input class="uni-input" name="username" type="text" placeholder="请输入手机号" />
			</view>
			<view class="uni-form-item uni-column">
				<label>密码</label>
				<input class="uni-input" name="password" type="text" password placeholder="请输入密码" />
			</view>

			<view class="uni-btn-v">
				<button form-type="submit">登录</button>
			</view>
		</form>


	</view>
</template>

<script>
	import LoginUtil from '@/libs/loginUtil.js'
	import Common from "@/libs/common.js"
	import {HomeApi} from '../home/home.js'
	export default {
		data() {
			return {

			}
		},
		methods: {
			login(e) {
				console.log("登录：", e);
				
				var formdata = e.detail.value
				console.log(JSON.stringify(formdata));
				
				
				HomeApi.login(formdata).then(res=>{
					let data = res.data;
					LoginUtil.saveTokenAndUser(data.data);
					Common.showCustomToast(data.msg);
					
					uni.navigateBack({
						delta: 1,
						animationType: 'pop-out',
						animationDuration: 200
					});
				}).catch(e=>{
					
				});
			}
		}
	}
</script>

<style>
.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
