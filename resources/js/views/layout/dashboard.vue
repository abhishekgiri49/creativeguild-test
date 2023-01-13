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
const {
  getToken,
  removeToken,
  removeUser,
} = require("../../lib/storage");
import Promise from "../../lib/Mixins/ExtendedPromises";

export default {
  name: "dashboard",
  inject: ["authRepository"],
  mixins: [Promise],
  components: {
    "app-head": Header,
    "app-footer": Footer,
  },
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
  
  mounted() {
    // SIDEBAR LIST DROPDOWN
    var listLink = document.querySelectorAll(
      ".sidebar--list ul li.has--child > a"
    );
    for (var i = 0; i < listLink.length; i++) {
      var listEle = document.createElement("span");
      var listEleClass = (listEle.className = "child--arrow");
      listLink[i].appendChild(listEle, listLink[i]);
    }
    $(".sidebar--list ul li.has--child").on("click", function () {
      $(this).find("ul.inner--list").slideToggle();
      $(this).toggleClass("active");
      $(this).siblings().removeClass("active");
      $(this).siblings().find("ul.inner--list").slideUp();
    });
    // SIDEBAR LIST DROPDOWN
    // SIDEBAR TOGGLE
    var sidebarToggle = document.querySelectorAll(".sidebarToggler"),
      sidebarMain = document.querySelector(".dashboard--sidebar");
    for (var j = 0; j < sidebarToggle.length; j++) {
      sidebarToggle[j].onclick = function () {
        sidebarMain.classList.toggle("collapse--mysidebar");
      };
    }
    // SIDEBAR TOGGLE
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


<style scoped>
</style>