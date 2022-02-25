<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad(val) {
			this.url = val.url
		},
		methods: {

		}
	}
</script>

<style>

</style>
