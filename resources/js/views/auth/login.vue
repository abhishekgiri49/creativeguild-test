<template>
  <section>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5">
              <div class="text-center">
                <div class="logo-row">
                  <img src="/frontend/image/cg-logo.png" alt="logo" class="logo">
                </div>
                <h1 class="text-center"><b>Login to your account</b></h1>
                <p>Don't have an account? <a href="javascript:void(0);" @click.prevent="goToSignUp">Create Account</a>
                </p>
              </div>

              <form @submit.prevent="login">
                <div class="form-outline mb-4">
                  <label class="form-label">Email</label>
                  <input type="email" id="typeEmailX-2" v-model="form.email" class="form-control form-control-lg"
                    placeholder="smith@gmail.com" />
                  <div class="invalid-feedback" v-show="errors.email">
                    <span v-for="(e, index) in errors.email" :key="index">
                      {{ e }}<br>
                    </span>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label">Password</label>
                  <input type="password" id="typePasswordX-2" v-model="form.password"
                    class="form-control form-control-lg" placeholder="*****************" />
                  <div class="invalid-feedback" v-show="errors.password">
                    <span v-for="(e, index) in errors.password" :key="index">
                      {{ e }}<br>
                    </span>
                  </div>
                </div>

                <!-- Checkbox -->
                <div class="d-flex justify-content-start mb-4">

                  <a href="javascript:void(0);" @click.prevent="goToForgetPassword" title="Forgot Password?"
                    class="primary">Forget password?</a>
                </div>
                <br>


                <div class="d-flex  mb-4 btn-center">
                  <button class="btn btn-main btn-block" type="submit">Login</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import Alert from "../../lib/Mixins/Alert";
import Promise from "../../lib/Mixins/ExtendedPromises";
import { NORMAL, NORMAL_REDIRECT_URL } from "../../lib/constant";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "login",
  inject: ["authRepository"],
  mixins: [Promise, Alert],
  data() {
    return {
      title: "Welcome back!",
      form: this.buildForm(),
      errors: {},
    };
  },
  mounted() { },
  computed: {
    authError() {
      return this.$store.getters.authError;
    },
    registeredUser() {
      return this.$store.getters.registeredUser;
    },
  },
  methods: {
    buildForm(auth) {
      return new Form({
        email: auth ? auth.email : null,
        password: auth ? auth.password : null,
        remember_me: auth ? auth.remember_me : false,
      });
    },

    goToForgetPassword() {
      this.goToGivenRouteName("forget-password");
    },

    goToGivenRouteName(routeName) {
      this.$router.push({ name: routeName });
    },

    goToSignUp() {
      this.goToGivenRouteName("register");
    },

    login() {
      let route = "";
      this.form.startProcessing();
      this.$store.dispatch("login");
      let operation = this.response(this.authRepository.login(this.form));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            // console.log(data);
            this.$store.commit("loginSuccess", data);
            this.form.finishProcessing();

            if (this.$store.getters.getRole) {
              route = NORMAL_REDIRECT_URL;
            }

            this.$router.push(route);
            // this.$toastr.s("", "You are logged in successfully !");
          }
        })
        .catch((err) => {
          if (operation.isRejected()) {
            if (err.status === 417) {
              this.errors.set(err.data.body);
            }
            if (err.status === 401) {
              // console.log(err.data.body);
              // this.$bvToast.toast(err.data.body, {
              //   title: `Login Error`,
              //   variant: "danger",
              //   solid: true,
              // });
              this.errors = err.data.body;
            }
            this.$store.commit("loginFailed", { err });
          }
          this.form.finishProcessing();
        });
    },
  },
};
</script>

