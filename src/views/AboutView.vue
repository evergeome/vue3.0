<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About Us",
      pageDescription: "Welcome to our About Us page.",
    };
  },
  name: "AboutView",
  components: {},
};
</script>