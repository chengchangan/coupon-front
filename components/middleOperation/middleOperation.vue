<template>
	<view class="operation-position">
		<swiper class="banner" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration" :circular="circular">
			<swiper-item class="banner-item" @click="bannerJump(item)" v-for="(item,index) in banners" :key=index>
				<image class="banner-img" :src="item.picUrl"></image>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	export default {
		name: "middleOperation",
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				circular: true,

				banners: [{
						"picUrl": "https://img.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg",
						"jumpUrl": ""
					},
					{
						"picUrl": "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
						"jumpUrl": ""
					}, {
						"picUrl": "//gw.alicdn.com/tps/TB1x2eZLVXXXXbCXVXXXXXXXXXX-1130-500.jpg_570x10000Q75.jpg_.webp",
						"jumpUrl": ""
					}
				]
			};
		},
		methods: {
			bannerJump(bannerItem) {
				console.log("点击轮播图",bannerItem)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'middleOperation.scss';
</style>
