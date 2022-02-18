<template>
	<view>
		<view class="status_bar">
			
			<global-search-header></global-search-header>
			
			<view class="operation">运营位</view>
			
			<recommend-goods-list></recommend-goods-list>
			
		</view>
		
	</view>
</template>

<script>
	import GlobalSearchHeader from '../../components/globalSearchHeader.vue';
	import RecommendGoodsList from '../../components/recommendList/recommendGoodsList.vue';
	
	export default {
		components: {
			GlobalSearchHeader,
			RecommendGoodsList
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
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}


	.operation{
		width: 100%;
		height: 300rpx;
		background-color: #00ff00;
	}

</style>
