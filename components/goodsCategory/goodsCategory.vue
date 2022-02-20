<template>
	<view class="category">
		<view class="category-item" @click="selectedCategory(item)" v-for="(item,index) in categoryList" :key=index>
			<text :class="item.show ? 'category-item-selected': ''">
			{{item.name}}
			</text>
		</view>
	</view>
			
<!-- 		<view>
			<scroll-view class="scroll-view_H1" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
			</scroll-view>
		</view> -->
		
	
</template>

<script>
	export default {
		name: "goodsCategory",
		data() {
			return {
				categoryList: [
					{
						"id": 1,
						"name": "精选",
						"show": true
					},
					{
						"id": 2,
						"name": "数码",
						"show": false,
						"child": [{
								"id": 11,
								"name": "手机"
							},
							{
								"id": 12,
								"name": "电脑"
							},
						]
					},
					{
						"id": 3,
						"name": "男装",
						"show": false,
						"child": [{
								"id": 21,
								"name": "夹克"
							},
							{
								"id": 2,
								"name": "牛仔裤"
							},
						]
					},
					{
						"id": 4,
						"name": "女装",
						"show": false
					},
					{
						"id": 5,
						"name": "运动",
						"show": false
					},
					{
						"id": 6,
						"name": "宠物",
						"show": false
					},
					{
						"id": 7,
						"name": "娱乐",
						"show": false
					},
					{
						"id": 8,
						"name": "母婴",
						"show": false
					},
					{
						"id": 9,
						"name": "箱包",
						"show": false
					},
					{
						"id": 10,
						"name": "家纺",
						"show": false
					},
					{
						"id": 11,
						"name": "特产",
						"show": false
					}
				]
			};
		},
		methods: {
			selectedCategory(category) {
				this.categoryList.forEach(category => category.show = false);
				category.show = true;
				console.log("点击了优惠页面分类", category);
			},
			scroll: function(e) {
				console.log(e)
			 this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>
<style scoped lang="scss">
	@import 'goodsCategory.scss';
</style>
