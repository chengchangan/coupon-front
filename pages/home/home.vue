<template>
	<view>
		<view>
			<!-- 首页头部 -->
			<app-header></app-header>
			<!-- 搜索栏 -->
			<global-search @clickSearch="jumpSearch"></global-search>
			<!-- 中间轮播图 -->
			<middle-operation></middle-operation>
			<!-- 排序 -->
			<sort-condition @homeSortConditionChange="homeSortConditionChange"></sort-condition>
			<!-- 商品列表 -->
			<goods-list :items=recommendGoodsList></goods-list>
		</view>

	</view>
</template>

<script>
	import AppHeader from '../../components/appHeader/appHeader.vue';
	import GlobalSearch from '../../components/globalSearch/globalSearch.vue';
	import SortCondition from '../../components/sortCondition/sortCondition.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import MiddleOperation from '../../components/middleOperation/middleOperation.vue';
	import {
		HomeApi
	} from "./home.js"



	export default {
		components: {
			AppHeader,
			GlobalSearch,
			SortCondition,
			GoodsList,
			MiddleOperation
		},
		data() {
			return {
				recommendQuery: {
					pageIndex: 1,
					pageSize: 20
				},
				recommendGoodsList: []
			}
		},
		created() {
			this.loadPageList();
		},
		onReachBottom() {
			this.recommendQuery.pageIndex = this.recommendQuery.pageIndex + 1;
			console.log("滚动到底部了,加载下一页", this.recommendQuery);
			this.loadPageList();
		},
		methods: {
			loadPageList() {
				HomeApi.listRecommendGoods(this.recommendQuery)
					.then(res => {
						res.data.data.list.forEach(item => this.recommendGoodsList.push(item));
					});
			},
			homeSortConditionChange(sortCondition) {
				this.recommendGoodsList = [];
				this.recommendQuery.sortCondition = sortCondition.id;
				this.recommendQuery.pageIndex = 1;
				this.loadPageList();
			},
			jumpSearch() {
				// 跳转到主搜页面
				uni.navigateTo({
					url: '../search/globalSearchPage/globalSearchPage'
				})
			}


		}
	}
</script>

<style>

</style>
