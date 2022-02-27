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
				if (plus.os.name == 'Android') {
					plus.runtime.launchApplication({
							pname: 'com.example.thunder'
						},
						(e) => {
							console.log('Open system default browser failed: ' + e.message)
						}
					)
				} else if (plus.os.name == 'iOS') {
					this.handleOpenTaobao(item.jumpUrl);
					// plus.runtime.launchApplication({
					// 	action: 'taobao://s.taobao.com/search?q=' + item.jumpUrl
					// }, (e) => {
					// 	console.log('Open system default browser failed: ' + e.message);
					// });
				}

				// uni.navigateTo({
				// 	url: '/components/myWebView/myWebView?url=' + item.jumpUrl
				// })
			},
			handleOpenTaobao(url) {
				// 淘宝的商品链接，换成需要访问的地址
				// let url =
				// 	"https://detail.tmall.com/item.htm?spm=a230r.1.14.1.3d4b76f0LV6kFy&id=605165654577&ns=1&abbucket=6";
				let openUrl = url;
				// 因为 url 一般是从其它地方获取的，所以这里要将 http 和 https 删去
				// 也可以直接输入 https:// 之后的内容，则不需要此步判断，直接调用 plus.runtime.openURL
				if (url.substr(0, 5) === 'https') {
					openUrl = `taobao://${url.substr(8)}`;
				} else if (url.substr(0, 4) === 'http') {
					openUrl = `taobao:${url.substr(7)}`;
				} else{
					openUrl = `taobao:${url}`;
				}
				console.log("打开的链接为：",openUrl)
				plus.runtime.openURL(openUrl, function(res) {
					uni.showModal({
						content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
						success: function(res) {
							if (res.confirm) {
								plus.runtime.openURL(url);
							}
						}
					});
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'goodsList.scss';
</style>
