<template>
	<view>
		<view class="nav-bar">
			<!-- 首页头部 -->
			<global-search-header></global-search-header>
			<!-- 中间轮播图 -->
			<middle-operation></middle-operation>
			<!-- 排序 -->
			<sort-condition></sort-condition>
			<!-- 商品列表 -->
			<goods-list></goods-list>
		</view>
		
	</view>
</template>

<script>
	import GlobalSearchHeader from '../../components/globalSearchHeader/globalSearchHeader.vue';
	import SortCondition from '../../components/sortCondition/sortCondition.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import MiddleOperation from '../../components/middleOperation/middleOperation.vue';
		
	export default {
		components: {
			GlobalSearchHeader,
			SortCondition,
			GoodsList,
			MiddleOperation
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>
/* 	.nav-bar {
		height: var(--status-bar-height);
		width: 100%;
	} */


</style>
