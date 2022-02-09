<template>
	<view class="content">
		<view class="logo">
			欢聚优品~有你存在
		</view>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="wrap">
			this is my project
		</view>
		<view class="storeStr">
			这是持久化store思想:{{storeStr}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				storeStr: ''
			}
		},
		methods: {
			async getAnswer() {
				const res = await this.$http.get('/applet/answerList', {
					qId: 123,
				})
				if (res.code === 200) {
					return res.data
				} else {
					this.$message.toast('请求失败')
					return false
				}
			}
		},
		onLoad() {
			// // 永久存储化使用方法
			this.$store.setData('user', {
				name: 'oil'
			}) // 赋值
			this.$store.user.value = '123'
			this.storeStr = this.$store.user.name
			console.log(this.$store)
			// // console.log(this.$store.user) // 读值
			// this.getAnswer()
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			width: 100%;
			height: 300rpx;
			margin-bottom: 100rpx;
			background: url('../../static/mine_bg.png');
			background-size: 100% 100%;
			background-position: center;
			text-align: center;
			line-height: 300rpx;
			font-size: 60rpx;
			color: #fff;
			font-family: arial;
		}

		.text-area {
			display: flex;
			justify-content: center;
		}

		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
