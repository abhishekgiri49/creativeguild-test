<template>
  <div id="root">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const default_layout = "default";
import DefaultLayout from "./views/layout/master.vue";
import DashboardLayout from "./views/layout/dashboard.vue";
export default {
  components: {
    DefaultLayout,
    DashboardLayout,
  },
  computed: {
    layout() {
      let layout = (this.$route.meta.layout || default_layout) + "-layout";
      return layout;
    },
  },
};
</script>