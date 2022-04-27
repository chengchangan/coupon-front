<template>
	<view class="favorite">
		<view class="favorite-header">
			<view class="manager-wapper">
				<text class="manager-title">我的关注</text>
				<text class="manager-button">管理</text>
			</view>

			<view class="type-wapper">
				<view class="type-item" @click="typeChange(item)" v-for="(item,index) in attentionTypeList" :key=index>
					<text :class="item.show ? 'type-item-selected': ''">
						{{item.name}}
					</text>
				</view>
			</view>

		</view>

		<!-- 商品列表 -->
		<goods-list :items="attentionGoodsList"></goods-list>

	</view>
</template>

<script>
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import StoreUtil from '@/libs/storeUtil.js';
	import {
		FavoriteApi
	} from './favorite.js';

	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				attentionTypeList: [{
					"id": 1,
					"name": "全部",
					"show": true,
					"key": "all"
				}, {
					"id": 2,
					"name": "推荐",
					"show": false,
					"key": "recommend"
				}, {
					"id": 3,
					"name": "降价",
					"show": false,
					"key": "depreciate"
				}, {
					"id": 4,
					"name": "喜欢",
					"show": false,
					"key": "favorite"
				}],
				queryParam: {
					"pageIndex": 1
				},
				attentionGoodsList: []
			}
		},
		created() {
			this.loadPageList();
		},
		onShow: function() {
			console.log("页面加载了");
			/**
			 * 关注页面加载时，判断本地缓存中是否有值，就决定页面展示的数据
			 */
			let selectedType;
			let currentAttentionType = StoreUtil.getCurrentAttentionType();
			if (currentAttentionType) {
				this.attentionTypeList.forEach(item => {
					item.show = false;
					if (item.key === currentAttentionType) {
						selectedType = item;
					}
				})
			}

			if (selectedType) {
				this.typeChange(selectedType);
			} else {
				this.loadPageList();
			}
			StoreUtil.removeTempCurrentAttentionType();
		},
		onReachBottom() {
			this.queryParam.pageIndex = this.queryParam.pageIndex + 1;
			this.loadPageList();
		},
		methods: {
			typeChange(category) {
				this.queryParam = {
					"pageIndex": 1
				}
				this.attentionGoodsList = [];

				// 点击的当前分类置反，其他范雷置灰
				category.show = !category.show;
				this.attentionTypeList.forEach(item => {
					if (category.id != item.id) {
						item.show = false;
					}
				});
				this.loadPageList();
			},
			loadPageList() {
				this.attentionTypeList.forEach(item => {
					if (item.show) {
						this.$set(this.queryParam, item.key, true);
					}
				});

				FavoriteApi.attentionGoodsList(this.queryParam)
					.then(res => {
						res.data.data.list.forEach(item => this.attentionGoodsList.push(item));
						uni.hideToast();
					});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'favorite.scss';
</style>
