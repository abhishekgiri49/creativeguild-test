<template>
  
</template>

<script>
const { getToken, removeToken, removeUser } = require("../../../lib/storage");
import Promise from "../../../lib/Mixins/ExtendedPromises";

export default {
  name: "navbar",
  inject: ["authRepository"],
  mixins: [Promise],
  data() {
    return {
      setting: {},
    };
  },
  computed: {
    showLogin() {
      return !this.$store.getters.isLoggedIn;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    resolveDashboardUri() {
      let role = "user";
      return `/${role}/dashboard`;
    },
  },

  methods: {
    logout() {
      let operation = this.response(this.authRepository.logout());
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            this.$store.dispatch("logout");
            this.$store.commit("logout");

            const path = `/login`;
            if (this.$route.path !== path) this.$router.push(path);
            // location.reload();

            this.$toastr.s("", `You are logged out successfully !`);
          }
        })
        .catch((err) => {
          if (operation.isRejected()) {
            if (err.status === 417) {
              this.form.errors.set(err.data.body);
            }
            if (err.status === 401) {
              this.$toastr.i("", err.data.message);
            }
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-user {
  text-transform: capitalize !important;
}
</style>