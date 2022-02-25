<template>
	<view>
		<do-global-search @doSearch="doSearch"></do-global-search>
		以下是搜索结果
		<goods-list :items="searchGoodsList"></goods-list>
	</view>
</template>

<script>
	import DoGlobalSearch from '../../../components/doGlobalSearch/doGlobalSearch.vue';
	import GoodsList from '../../../components/goodsList/goodsList.vue';
	import {
		GlobalSearchApi
	} from './globalSearchPageResult.js';

	export default {
		components: {
			DoGlobalSearch,
			GoodsList
		},
		data() {
			return {
				searchQuery: {
					pageIndex: 1,
					pageSize: 10
				},
				searchGoodsList: []
			}
		},
		onLoad: function(param) {
			console.log("搜索结果页收到参数：", param);
			this.searchQuery.keyword = param.keyword;
			this.loadPageList();
		},
		onReachBottom() {
			this.searchQuery.pageIndex = this.searchQuery.pageIndex + 1;
			console.log("滚动到底部了,加载下一页", this.searchQuery);
			this.loadPageList();
		},
		methods: {
			loadPageList() {
				GlobalSearchApi.searchGoods(this.searchQuery)
					.then(res => {
						res.data.data.list.forEach(item => this.searchGoodsList.push(item));
					});
			},
		}
	}
</script>

<style>

</style>
