<template>
	<view class="search-page-result">
		<do-global-search :keyword="keyword" @doSearch="doSearch"></do-global-search>
		<goods-list :items="searchGoodsList"></goods-list>
	</view>
</template>

<script>
	import DoGlobalSearch from '../../../components/doGlobalSearch/doGlobalSearch.vue';
	import GoodsList from '../../../components/goodsList/goodsList.vue';
	import {
		GlobalSearchApi
	} from './globalSearchPageResult.js';
	import Common from "@/libs/common.js";


	export default {
		components: {
			DoGlobalSearch,
			GoodsList
		},
		data() {
			return {
				keyword: "",
				searchQuery: {
					pageIndex: 1,
					pageSize: 10
				},
				searchGoodsList: []
			}
		},
		onLoad: function(param) {
			// 页面加载时,获取传递的参数、加载后台数据、展示等待中logo
			console.log("搜索结果页收到参数：", param);
			this.keyword = param.keyword;
			this.searchQuery.keyword = param.keyword;
			Common.showToast();
			this.loadPageList();
		},
		onReachBottom() {
			this.searchQuery.pageIndex = this.searchQuery.pageIndex + 1;
			console.log("滚动到底部了,加载下一页", this.searchQuery);
			this.loadPageList();
		},
		methods: {
			doSearch(param) {
				Common.showToast();
				this.searchQuery.keyword = param.keyword;
				this.searchQuery.pageIndex = 1;
				this.searchGoodsList = [];
				this.loadPageList();
			},
			loadPageList() {
				GlobalSearchApi.searchGoods(this.searchQuery)
					.then(res => {
						res.data.data.list.forEach(item => this.searchGoodsList.push(item));
						uni.hideToast();
					});
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'globalSearchPageResult.scss';
</style>
