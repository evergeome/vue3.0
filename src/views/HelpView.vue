<template>
	<div class="help">
		<h1>{{ pageName }}</h1>
		<p>{{ pageDescription }}</p>
		<div class="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>Vue 3.0!</strong> You should check in on some of those fields below.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			pageName: "Help",
			pageDescription: "We are glade to help you.",
		};
	},
	name: "HelpView",
	components: {},
};
</script>
