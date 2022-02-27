<template>
	<view class="main-search">
		<image v-if="showGoback" class="go-back-logo" @click="goBack" src="../../static/go-back.png"></image>
		<view class="search">
			<input class="input-button" :value="keyword" type="text" confirm-type="search" @confirm="search"
				@input="onKeyInput" placeholder="苹果13" />
			<text class="search-button" @click="search">搜索</text>
		</view>

	</view>
</template>

<script>
	import Common from "@/libs/common.js";

	export default {
		components: {},
		name: "mainSearch",
		props: {
			showGoback: {
				type: Boolean,
				default: true
			},
			keyword: {
				type: String,
				default: "",
			}
		},
		data() {
			return {
				inputValue: ""
			};
		},
		watch: {
			keyword: function(kw) {
				// 监听外部传入的搜索词 (历史搜索选择后传入)
				console.log("监听到外部出入搜索组件里的值", kw)
				this.inputValue = kw;
			}
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
				// 监听键盘输入信息
				this.inputValue = event.target.value
				// todo 可以进行提示
				console.log("输入的内容", this.inputValue)
			},
			search() {
				// 处理情况：搜索页 -> 结果页后，再次点击搜索，此时inputValue 是空的
				if (Common.isEmpty(this.inputValue) && !Common.isEmpty(this.keyword)) {
					this.inputValue = this.keyword;
				}
				console.log("search keyword:", this.keyword)
				console.log("search inputValue:", this.inputValue)
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
