<template>
	<view>
		<view class="sort-condition">
			<view class="condition" @click="selectedCondition(item)" v-for="(item,index) in conditionItems" :key="index">
				<text :class="item.show ? 'condition conditionSelected': 'condition'">
					{{item.name}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "sortCondition",
		props: {

		},
		data() {
			return {
				conditionItems:[
					{
						"id":1,
						"show":true,
						"name": "推荐"
					},{
						"id":2,
						"show":false,
						"name": "最热"
					},{
						"id":3,
						"show":false,
						"name": "最新"
					}
				]
			};
		},
		methods:{
			selectedCondition(condition){
				this.conditionItems.forEach(item=>item.show=false);
				condition.show = true
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'sortCondition.scss';
</style>
