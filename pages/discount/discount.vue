<template>
	<view>
		<view class="nav-bar">
			<!-- 首页头部 -->
			<global-search-header></global-search-header>
			<!-- 商品分类 -->
			<goods-category></goods-category>
			<!-- 商品列表 -->
			<!-- <goods-list></goods-list> -->
		</view>
	</view>
	
</template>

<script>
	import GlobalSearchHeader from '../../components/globalSearchHeader/globalSearchHeader.vue';
	import GoodsCategory from '../../components/goodsCategory/goodsCategory.vue';
	import GoodsList from '../../components/goodsList/goodsList.vue';
	
	export default {
		components:{
			GlobalSearchHeader,
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
