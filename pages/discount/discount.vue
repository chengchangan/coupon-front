<template>
	<view>
		<view class="nav-bar">
			<!-- 首页头部 -->
			<app-header></app-header>
			<!-- 头部主搜 -->
			<global-search></global-search>
			<!-- 商品分类 -->
			<goods-category></goods-category>
			<!-- 商品列表 -->
			<!-- <goods-list></goods-list> -->
		</view>
	</view>
	
</template>

<script>
	
	import AppHeader from '../../components/appHeader/appHeader.vue';
	import GlobalSearch from '../../components/globalSearch/globalSearch.vue';
	import GoodsCategory from '../../components/goodsCategory/goodsCategory.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	
	export default {
		components:{
			AppHeader,
			GlobalSearch,
			GoodsCategory,
			GoodsList
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
	.nav-bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
