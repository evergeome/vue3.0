<template>
	<div class="header">
		<div class="container">
			<div class="row">
				<div class="logo col-auto">healthcare</div>
				<ul class="col text-end">
					<router-link to="/" exact><a>Home</a></router-link>
					<router-link to="/blog"><a>Blog</a></router-link>
					<router-link to="/about"><a>About</a></router-link>
					<router-link to="/help"><a>Help</a></router-link>
				</ul>
			</div>

		</div>
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
	}

	ul {
		padding: 25px;

		a {
			color: #fff;
			padding: 31px 8px;
			font-size: 14px;
		}

		.router-link-active {
			background-color: green;
		}
	}
}
</style>
