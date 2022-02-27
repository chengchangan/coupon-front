<template>
	<view>
		<view class="nav-bar">
			<!-- 首页头部 -->
			<app-header></app-header>
			<!-- 头部主搜 -->
			<do-global-search :showGoback=false @doSearch="doSearch"></do-global-search>
			<!-- 商品分类 -->
			<goods-category @categoryChange="categoryChange"></goods-category>
			<!-- 商品列表 -->
			<goods-list :items="searchGoodsList"></goods-list>
		</view>
	</view>

</template>

<script>
	import AppHeader from '../../components/appHeader/appHeader.vue';
	import DoGlobalSearch from '../../components/doGlobalSearch/doGlobalSearch.vue';
	import GlobalSearch from '../../components/globalSearch/globalSearch.vue';
	import GoodsCategory from '../../components/goodsCategory/goodsCategory.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import Common from '@/libs/common.js';
	import {
		DiscountSearchApi
	} from './discount.js';

	export default {
		components: {
			AppHeader,
			DoGlobalSearch,
			GlobalSearch,
			GoodsCategory,
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
			categoryChange(category){
				Common.showToast();
				this.searchQuery.keyword = category.name;
				this.searchQuery.pageIndex = 1;
				this.searchGoodsList = [];
				this.loadPageList();
			},
			loadPageList() {
				DiscountSearchApi.searchGoods(this.searchQuery)
					.then(res => {
						res.data.data.list.forEach(item => this.searchGoodsList.push(item));
						uni.hideToast();
					});
			},
		}
	}
</script>

<style>
	.nav-bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
