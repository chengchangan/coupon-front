<template>
	<view class="goods-detail">

		<!-- 详情轮播图 -->
		<view class="detail-image">
			<swiper class="banner" :indicator-dots="indicatorDots" :duration="duration" :circular="circular">
				<swiper-item @click="previewImg(index)" v-for="(item,index) in goodsDetail.smallImages" :key=index>
					<image class="banner-img" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 商品信息 -->
		<view class="detail-info">
			<!-- 标题 -->
			<view class="title">
				<text class="platform">{{goodsDetail.platform}}</text>
				<text class="title-text" @longpress="copyTitle">
					{{goodsDetail.title}}
				</text>

			</view>

			<!-- 价格 -->
			<view class="price-info">
				<text class="after-price-title">
					到手价
				</text>
				<text class="after-price-icon">
					￥
				</text>
				<text class="after-price-num">
					{{goodsDetail.discountFixedPrice}}
				</text>

				<text class="origin-price">
					原价￥{{goodsDetail.fixedPrice}}
				</text>

				<text class="coupon-amount" v-show="goodsDetail.couponAmount">
					省￥{{goodsDetail.couponAmount}}
				</text>

				<text class="sell-num">
					{{goodsDetail.monthSales}}笔成交
				</text>
			</view>

			<!-- 优惠券信息 -->
			<view class="coupon-info" v-if="goodsDetail.couponAmount">
				<view class="coupon-info-wapper">
					<view class="coupon-amount-wapper">
						<text class="coupon-icon">
							￥
						</text>
						<text class="coupon-amount">
							{{goodsDetail.couponAmount}}
						</text>
					</view>

					<view class="coupon-date">
						{{goodsDetail.couponValidTime}}
					</view>
				</view>

				<view class="coupon-button" @click="openExternalApp()">
					立即领券
				</view>
			</view>

		</view>

		<view class="detail-serve">
			<view class="delivery-local">
				<text>
					发货
				</text>
				<text>
					{{goodsDetail.itemLocation}}
				</text>
			</view>

			<view class="serve">
				<text>
					保障
				</text>
				<text class="serve-item" v-for="(item,index) in goodsDetail.serveItems" :key=index>
					{{item}}
				</text>

			</view>
		</view>

		<goods-nav :favorite=goodsDetail.favorite :recommend=goodsDetail.recommend @favorite="favorite" @share="share"
			@recommend="recommend" @openExternalApp="openExternalApp()"></goods-nav>

		<view class="recommend">
			<view class="recommend-title">
				猜你喜欢
			</view>
			<!-- 商品列表 -->
			<goods-list :items=recommendGoodsList></goods-list>
		</view>



	</view>
</template>

<script>
	import GoodsList from '../../components/goodsList/goodsList.vue';
	import GoodsNav from '../../components/goodsNav/goodsNav.vue';
	import {
		GoodsDetailApi
	} from "./goodsDetail.js"

	export default {
		components: {
			GoodsList,
			GoodsNav
		},
		data() {
			return {

				indicatorDots: true,
				duration: 500,
				circular: true,

				recommendQuery: {
					pageIndex: 1,
					pageSize: 20
				},
				goodsDetail: {},
				recommendGoodsList: []
			}
		},
		onLoad: function(param) {
			this.loadGoodsDetail(param.itemId);
		},
		created() {
			this.loadPageList();
		},
		onReachBottom() {
			console.log("goodsDetail", this.goodsDetail)
			this.recommendQuery.pageIndex = this.recommendQuery.pageIndex + 1;
			console.log("滚动到底部了,加载下一页", this.recommendQuery);
			this.loadPageList();
		},
		methods: {
			loadGoodsDetail(itemId) {
				GoodsDetailApi.getGoodsDetail(itemId)
					.then(res => {
						this.goodsDetail = res.data.data;
					}).catch(e => {
						console.log("加载失败", e)
					})
			},
			loadPageList() {
				GoodsDetailApi.listRecommendGoods(this.recommendQuery)
					.then(res => {
						res.data.data.list.forEach(item => this.recommendGoodsList.push(item));
					});
			},
			// 预览图片多张
			previewImg(index) {
				uni.previewImage({
					current: index,
					urls: this.goodsDetail.smallImages,
					indicator: 'number',
					loop: true
				});
			},
      copyTitle() {
        uni.setClipboardData({
          data: this.goodsDetail.title
        })
      },
			favorite() {
				GoodsDetailApi.favorite(this.goodsDetail.productId)
					.then(res => {
						this.loadGoodsDetail(this.goodsDetail.itemId);
					});
			},
			share() {
				console.log("分享:", this.goodsDetail.title)
			},
			recommend() {
				GoodsDetailApi.recommend(this.goodsDetail.productId)
					.then(res => {
						this.loadGoodsDetail(this.goodsDetail.itemId);
					});
			},

			openExternalApp() {
				let jumpUrl = this.goodsDetail.jumpUrl;
				if (plus.os.name == 'Android') {
					plus.runtime.launchApplication({
							pname: 'com.example.thunder'
						},
						(e) => {
							console.log('Open system default browser failed: ' + e.message)
						}
					)
				} else if (plus.os.name == 'iOS') {
					this.handleOpenTaobao(jumpUrl);

				}

			},
			handleOpenTaobao(url) {
				// 淘宝的商品链接，换成需要访问的地址
				// let url = "https://detail.tmall.com/item.htm?spm=a230r.1.14.1.3d4b76f0LV6kFy&id=605165654577&ns=1&abbucket=6";
				let openUrl = url;
				// 因为 url 一般是从其它地方获取的，所以这里要将 http 和 https 删去
				// 也可以直接输入 https:// 之后的内容，则不需要此步判断，直接调用 plus.runtime.openURL
				if (url.substr(0, 5) === 'https') {
					openUrl = `taobao://${url.substr(8)}`;
				} else if (url.substr(0, 4) === 'http') {
					openUrl = `taobao:${url.substr(7)}`;
				} else {
					openUrl = `taobao:${url}`;
				}
				console.log("打开的链接为：", openUrl)
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
	@import 'goodsDetail.scss';
</style>
