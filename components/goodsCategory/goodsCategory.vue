<template>
	<view class="category">
		<view class="category-item" @click="selectedCategory(item)" v-for="(item,index) in categoryList" :key=index>
			<text :class="item.show ? 'category-item-selected': ''">
				{{item.name}}
			</text>
		</view>
	</view>

</template>

<script>
	export default {
		name: "goodsCategory",
		data() {
			return {
				categoryList: [
					{
						"id": 1,
						"name": "全部",
						"show": false
					},{
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
		created() {
			console.log("分类加载了")
			// 加载默认选中
			let category;
			this.categoryList.forEach(item => {
				if (item.id === 1) {
					category = item;
				}
			})
			this.selectedCategory(category);
		},
		methods: {
			selectedCategory(category) {
				// 点击的当前分类置反，其他范雷置灰
				category.show = !category.show;
				this.categoryList.forEach(item => {
					if (category.id != item.id) {
						item.show = false;
					}
				});
				console.log("选中了分类:", category)
				this.$emit("categoryChange", category);
			}
		}
	}
</script>
<style scoped lang="scss">
	@import 'goodsCategory.scss';
</style>
