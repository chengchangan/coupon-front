<template>
	<view class="search-page">
		<do-global-search :keyword="keyword" @doSearch="doSearch"></do-global-search>
		<view class="history-search">
			<view class="history-title">历史搜索</view>
			<view class="history-item-wapper">
				<text class="history-item" @click="selectedHistoryItem(item)" v-for="(item,index) in historySearchItem"
					:key="index">
					{{item}}
				</text>
			</view>

		</view>
	</view>
</template>

<script>
	import DoGlobalSearch from '../../../components/doGlobalSearch/doGlobalSearch.vue';

	export default {
		components: {
			DoGlobalSearch
		},
		data() {
			return {
				historyStorageKey: "history_storage_key",
				keyword: "",
				historySearchItem: []
			}
		},
		onLoad() {
			// 搜索页加载时,获取本地缓存的历史查询
			let storageHistory = uni.getStorageSync(this.historyStorageKey);
			if (storageHistory) {
				this.historySearchItem = JSON.parse(storageHistory);
			}
		},
		methods: {
			doSearch(param) {
				this.keyword = param.keyword;
				this.saveSearchHistory();
				// 确认搜索，跳到搜索结果页面
				uni.navigateTo({
					url: '../globalSearchPageResult/globalSearchPageResult?keyword=' + param.keyword
				});
			},
			selectedHistoryItem(item) {
				// 选中历史搜索,传递给子组件(以便跳转时使用)
				this.keyword = item;
			},
			saveSearchHistory() {
				// 删除相同
				this.historySearchItem.forEach((item, index) => {
					if (item === this.keyword) {
						this.historySearchItem.splice(index, 1);
					}
				})
				// 添加到数组头部
				this.historySearchItem.unshift(this.keyword);
				// 截掉多余长度
				this.historySearchItem = this.historySearchItem.slice(0, 9);

				uni.setStorage({
					key: this.historyStorageKey,
					data: JSON.stringify(this.historySearchItem),
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'globalSearchPage.scss';
</style>
