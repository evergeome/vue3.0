<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "Welcome to our Blog.",
    };
  },
  name: "BlogView",
  components: {},
};
</script>