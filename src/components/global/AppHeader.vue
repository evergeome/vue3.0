<template>
	<div class="header">
		<div class="logo">healthcare</div>
		<ul>
			<router-link to="/" exact><a>Home</a></router-link>
			<router-link to="/blog"><a>Blog</a></router-link>
			<router-link to="/about"><a>About</a></router-link>
			<router-link to="/help"><a>Help</a></router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
	background-color: #159e4e;
	color: #fff;
	overflow: hidden;

	.logo {
		font-size: 24px;
		padding: 20px;
		float: left;
		width: 200px;
	}

	ul {
		float: left;
		width: calc(100% - 200px);
		text-align: right;
		padding: 25px;

		a {
			color: #fff;
			padding: 26px 8px;
			font-size: 14px;
		}

		.router-link-active {
			background-color: green;
		}
	}
}
</style>
