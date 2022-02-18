<template>
	<view class="recommendList">
		<view class="sort-condition">
			<view class="condition" @click="selectedCondition(item)" v-for="(item,index) in conditionItems" :key="index">
				<text :class="item.show ? 'condition conditionSelected': 'condition'">
					{{item.name}}
				</text>
			</view>
			
		</view>
		<view class="list-item">
			<view class="item" v-for="(item,index) in items" :key="index">

				<view class="pictrue">
					<image class="image" :src="item.img" mode="heightFix"></image>
				</view>
				<view class="info">
					<text class="title">{{item.name}}</text>
					<view class="discount">优惠信息</view>
					<view class="priceInfo">
						<text class="originPrice">
							原价￥
							<text class="price">
								{{item.price}}	
							</text>
						</text>
						<text>
							券后价
							<text class="discountPrice">
								￥<text class="price">{{item.vipPrice}}</text>
							</text>
						</text>
						<text class="couponAmount">
							省￥{{item.couponAmount}}
						</text>
					</view>
					<view class="other">
						<text>
							{{item.platform}} | {{item.storeName}}
						</text>
						<text>
							销量 {{item.salesQty}}
						</text>
					</view>
				</view>


			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "recommendGoodsList",
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
					// ,{
					// 	"id":4,
					// 	"name": "鞋服"
					// },{
					// 	"id":5,
					// 	"name": "数码"
					// },{
					// 	"id":6,
					// 	"name": "美妆"
					// },{
					// 	"id":7,
					// 	"name": "日用"
					// },{
					// 	"id":8,
					// 	"name": "零食"
					// }
					// ,{
					// 	"id":9,
					// 	"name": "美妆"
					// },{
					// 	"id":10,
					// 	"name": "日用"
					// },{
					// 	"id":11,
					// 	"name": "零食"
					// }
				],
				items: [{
						// "img": "https://img.alicdn.com/bao/uploaded/i2/4023086328/O1CN01qbWmtk1wcGzVxbfgA_!!0-item_pic.jpg",
						"id": 576605326949,
						"price": 108,
						"name": "红双喜正品水泥地耐磨幼儿园3小学生7成人篮球5号儿童4青少年定制,红双喜正品水泥地耐磨幼儿园3小学生7成人篮球5号儿童4青少年定制",
						"vipPrice": 33,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10
					},
					{
						// "img": "https://img.alicdn.com/bao/uploaded/i4/574598446/O1CN01e5csOM2CGJuJ9iq7G_!!0-item_pic.jpg",
						"price": 44.9,
						"name": "红双喜羽毛球拍双拍耐用型成人儿童小学生超轻全碳素单拍套装正品",
						"vipPrice": 44.9,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 8275748347
					},
					{
						// "img": "https://img.alicdn.com/bao/uploaded/i1/4023086328/O1CN01ghJ4Kc1wcGxlprWoM_!!0-item_pic.jpg",
						"price": 128,
						"name": "红双喜足球5号成人4号四号小学生3号儿童幼儿园训练比赛耐磨软皮",
						"vipPrice": 39.9,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 582818222083
					},
					{
						// "img": "https://img.alicdn.com/bao/uploaded/i4/707376852/O1CN01i7IAk920UGZmb3iXQ_!!0-item_pic.jpg",
						"price": 58,
						"name": "正品红双喜羽毛球12只装耐打王训练比赛用一桶3只装6只装打不易烂",
						"vipPrice": 13.5,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 10489420727
					},
					{
						// "img":"https://img.alicdn.com/bao/uploaded/i4/91927293/O1CN01X2zrVM23kFFKDZX75_!!0-item_pic.jpg",
						"price": 278,
						"name": "莹恋DHS红双喜狂飙3省狂蓝海绵省套三乒乓球胶皮球拍反胶套胶正品",
						"vipPrice": 139,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 4399586113
					},
					{
						// "img":"https://img.alicdn.com/bao/uploaded/i1/1097966962/O1CN01yWcF6a21Ie6mihG4w_!!0-item_pic.jpg",
						"price": 158,
						"name": "乒乓球拍胶皮红双喜狂飙3乒乓球胶皮狂飚3反胶套胶普狂三狂3正品",
						"vipPrice": 108,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 17066442536
					},
					{
						// "img":"https://img.alicdn.com/bao/uploaded/i2/91927293/O1CN01wZDRpp23kFF9ZAEW1_!!0-item_pic.jpg",
						"price": 135,
						"name": "莹恋DHS红双喜狂飙3乒乓球胶皮球拍反胶套胶粘性普狂三狂飚3正品",
						"vipPrice": 108,
						"couponAmount": 20,
						"platform": "淘宝",
						"storeName": "店铺",
						"salesQty": 10,
						"id": 4399134175
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
	@import 'recommendGoodsList.scss';

	// .recommendList {
	// 	width: 100%;
	// 	// height: 500rpx;
	// 	// background-color: #555555;
	// }
	.sortCondition {
		width: 100%;
		height: 50rpx;
		background-color: #ff0000;
		margin-top: 10rpx;
		text-align: center;
	}
</style>
