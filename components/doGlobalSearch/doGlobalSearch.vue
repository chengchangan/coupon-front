<template>
	<view class="main-search">
		<image class="go-back-logo" @click="goBack" src="../../static/go-back.png"></image>
		<view class="search">
			<input class="input-button" type="text" confirm-type="search" @input="onKeyInput" placeholder="苹果13" />
			<text class="search-button" @click="search">搜索</text>
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		name: "mainSearch",
		data() {
			return {
				inputValue: ""
			};
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				});
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
				// todo 可以进行提示
				console.log("输入的内容", this.inputValue)
			},
			search() {
				console.log("search keyword:", this.inputValue)
				this.$emit("doSearch", {
					"keyword": this.inputValue
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	@import 'doGlobalSearch';
</style>
