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
                <h1 class="text-center"><b>Change Password</b></h1>
                <p>Use the Reset code sent to your email</p>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label">OTP Code</label>
                <input type="text" id="typeotp_codeX-2" v-model="form.otp_code" class="form-control form-control-lg"
                  placeholder="OTP" />
                <div class="invalid-feedback" v-show="errors.otp_code">
                  <span v-for="(e, index) in errors.otp_code" :key="index">
                    {{ e }} <br>
                  </span>
                </div>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label">Password</label>
                <input type="password" id="typePasswordX-2" v-model="form.password" class="form-control form-control-lg"
                  placeholder="*****************" />
                <div class="invalid-feedback" v-show="errors.password">
                  <span v-for="(e, index) in errors.password" :key="index">
                    {{ e }} <br>
                  </span>
                </div>
              </div>
              <div class="form-outline mb-4">
                <label class="form-label">Confirm Password</label>
                <input type="password" id="typePasswordX-2" v-model="form.password_confirmation"
                  class="form-control form-control-lg" placeholder="*****************" />
                <div class="invalid-feedback" v-show="errors.password_confirmation">
                  <span v-for="(e, index) in errors.password_confirmation" :key="index">
                    {{ e }} <br>
                  </span>
                </div>
              </div>

              <br>


              <div class="d-flex  mb-4 btn-center">
                <button class="btn btn-main btn-block" @click.prevent="resetPassword" type="button">Change
                  Password</button>
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
import Error from "../../lib/Mixins/Error";
import Promise from "../../lib/Mixins/ExtendedPromises";
import { NORMAL, NORMAL_REDIRECT_URL } from "../../lib/constant";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "reset-password",
  inject: ["authRepository"],
  mixins: [Error, Promise, Alert],
  data() {
    return {
      title: "Reset password",
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
        password: auth ? auth.password : null,
        password_confirmation: auth ? auth.password_confirmation : null,
      });
    },
    goToSignIn() {
      this.goToGivenRouteName("login");
    },
    goToGivenRouteName(routeName) {
      this.$router.push({ name: routeName });
    },
    resetPassword() {
      let route = "";
      this.form.startProcessing();

      let formData = Object.assign(this.form, {
        email: this.$route.params.email,
      });

      let operation = this.response(
        this.authRepository.resetPassword(formData)
      );

      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            this.form.finishProcessing();
            this.$router.push("/login");
            this.$swal({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              icon: "success",
              title: "Password Reset",
              text: "Password has been changed successfully!",
            });
            // this.$toastr.s("", data.body);
          }
        })
        .catch((err) => {
          if (operation.isRejected()) {
            if (err.status === 401) {
              this.errors = (err.data.body);
            }
            if (err.status === 500) {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
                title: "ERROR!!",
                text: err.data.body,
              });
              // this.$toastr.e("", err.data.body);
            }
          }
          this.form.finishProcessing();
        });
    },
  },
};
</script>