<template>
	<view>
		<view class="nav-bar">
			<!-- 首页头部 -->
			<global-search-header></global-search-header>
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
	import GlobalSearchHeader from '../../components/globalSearchHeader/globalSearchHeader.vue';
	import SortCondition from '../../components/sortCondition/sortCondition.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import MiddleOperation from '../../components/middleOperation/middleOperation.vue';
	import {
		HomeApi
	} from "./home.js"



	export default {
		components: {
			GlobalSearchHeader,
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
				this.recommendGoodsList =[];
				this.recommendQuery.sortCondition = sortCondition.id;
				this.recommendQuery.pageIndex = 1;
				this.loadPageList();
			}


		}
	}
</script>

<style>
	/* 	.nav-bar {
		height: var(--status-bar-height);
		width: 100%;
	} */
</style>
