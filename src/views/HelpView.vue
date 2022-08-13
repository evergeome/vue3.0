<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
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