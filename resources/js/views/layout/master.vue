<template>
  <div>
    <app-head></app-head>
    <!-- main content start -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "../home/common/navbar.vue";
import Footer from "../home/common/footer.vue";
export default {
  name: "master",
   components: {
    "app-head": Header,
    "app-footer": Footer,
  },
};
</script>

<style scoped>
</style>