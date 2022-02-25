<template>
	<view>
		<view class="search-line" @click="jumpSearch">
			<image class="search-logo" src="../../static/search-logo.png"></image>
			<text class="search-note">苹果13</text>
			<text class="search-button">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "globalSearch",
		data() {
			return {

			};
		},
		methods: {
			jumpSearch(){
				this.$emit("clickSearch");
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'globalSearch.scss';
</style>
