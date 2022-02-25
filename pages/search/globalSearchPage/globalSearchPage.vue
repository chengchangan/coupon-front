<template>
	<view>
		<do-global-search @doSearch="doSearch"></do-global-search>
		查询页的其他推荐信息
	</view>
</template>

<script>
	import DoGlobalSearch from '../../../components/doGlobalSearch/doGlobalSearch.vue';
	
	export default {
		components:{
			DoGlobalSearch
		},
		data() {
			return {
				
			}
		},
		methods: {
			doSearch(param){
				// 确认搜索，跳到搜索结果页面
				uni.navigateTo({
					url: '../globalSearchPageResult/globalSearchPageResult?keyword=' + param.keyword
				});
			}
		}
	}
</script>

<style>

</style>
