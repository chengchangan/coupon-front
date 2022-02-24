<template>
	<view class="recommendList">

		<view class="list-item">
			<view class="item" @click="jumpDetail(item)" v-for="(item,index) in items" :key="index">

				<view class="pictrue">
					<image class="image" :src="item.mainImage" mode="heightFix"></image>
				</view>

				<view class="info">
					<text class="title">{{item.title}}</text>
					<!-- <view class="discount">优惠信息</view> -->
					<view class="priceInfo">
						<text class="originPrice">
							原价￥
							<text class="price">
								{{item.fixedPrice}}
							</text>
						</text>
						<text>
							券后价
							<text class="discountPrice">
								￥<text class="price">{{item.discountFixedPrice}}</text>
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
		name: "goodsList",
		props: {
			items: {
				type: Array,
				default: [],
				required: true
			}
		},
		data() {
			return {

			};
		},
		methods: {
			jumpDetail(item) {
				uni.navigateTo({
					url: '/components/myWebView/myWebView?url=' + item.jumpUrl
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'goodsList.scss';
</style>
