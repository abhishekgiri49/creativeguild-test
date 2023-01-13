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
                <h1 class="text-center"><b>Password Reset Request</b></h1>
                <p>have an account? <a href="javascript:void(0);" @click.prevent="goToSignIn">login</a></p>
              </div>


              <div class="form-outline mb-4">
                <label class="form-label">Email</label>
                <input type="email" id="typeEmailX-2" v-model="form.email" class="form-control form-control-lg"
                  placeholder="smith@gmail.com" />
                <div class="invalid-feedback" v-show="form.errors.email">
                  <span v-for="(e, index) in form.errors.email" :key="index">
                    {{ e }} <br>
                  </span>
                </div>
              </div>



              <br>


              <div class="d-flex  mb-4 btn-center">
                <button class="btn btn-main btn-block" @click.prevent="forgetPassword" type="button">Submit Reset
                  Request</button>
              </div>


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
  name: "forget-password",
  inject: ["authRepository"],
  mixins: [Promise, Alert],
  data() {
    return {
      title: "Welcome back!",
      form: this.buildForm(),
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
      });
    },
    goToSignIn() {
      this.goToGivenRouteName("login");
    },
    goToGivenRouteName(routeName) {
      this.$router.push({ name: routeName });
    },
    forgetPassword() {
      let route = "",
        process;
      this.form.startProcessing();

      process = this.authRepository.forgetPassword(this.form);

      let operation = this.response(process);
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            this.form.finishProcessing();

            if (data.status) {
              this.$router.push({
                name: "reset-password",
                params: { email: this.form.email },
              });
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                icon: "success",
                title: "Email Sent",
                text: "OTP to reset your password has been sent to your email !",
              });
              // this.$toastr.s("", data.body);
            } else {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
                title: "Forget Password",
                text: data.body,
              });
            }
          }
        })
        .catch((err) => {
          if (operation.isRejected()) {
            if (err.status === 401) {
              this.form.errors = (err.data.body);
            }
            if (err.status === 500) {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
                title: "Forget Password",
                text: err.data.body,
              });
            }
          }
          this.form.finishProcessing();
        });
    },
  },
};
</script>