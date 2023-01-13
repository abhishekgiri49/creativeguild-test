<template>
  <section>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-8">
          <div class="card shadow-2-strong">
            <div class="card-body p-5">
              <div class="text-center">
                <div class="logo-row">
                  <img src="/frontend/image/cg-logo.png" alt="logo" class="logo">
                </div>
                <h1 class="text-center"><b>Register an account</b></h1>
                <p>have an account? <a href="javascript:void(0);" @click.prevent="goToSignIn">login</a></p>
              </div>
              <form @submit.prevent="register">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline mb-4">
                      <label class="form-label">Name</label>
                      <input type="text" id="typeNameX-2" v-model="form.name" class="form-control form-control-lg"
                        placeholder="Full Name" />
                      <div class="invalid-feedback" v-show="form.errors.name">
                        <span v-for="(e, index) in form.errors.name" :key="index">
                          {{ e }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
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
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline mb-4">
                      <label class="form-label">Phone</label>
                      <input type="text" class="form-control form-control-lg" v-model="form.phone"
                        placeholder="Phone Number" />
                      <div class="invalid-feedback" v-show="form.errors.phone">
                        <span v-for="(e, index) in form.errors.phone" :key="index">
                          {{ e }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline mb-4">
                      <label class="form-label">Bio</label>
                      <input type="text" id="typeEmailX-2" v-model="form.bio" class="form-control form-control-lg" />
                      <div class="invalid-feedback" v-show="form.errors.bio">
                        <span v-for="(e, index) in form.errors.bio" :key="index">
                          {{ e }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline mb-4">
                      <label class="form-label">Password</label>
                      <input type="password" id="typePasswordX-2" v-model="form.password"
                        class="form-control form-control-lg" placeholder="*****************" />
                      <div class="invalid-feedback" v-show="form.errors.password">
                        <span v-for="(e, index) in form.errors.password" :key="index">
                          {{ e }}
                        </span>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline mb-4">
                      <label class="form-label">Confirm Password</label>
                      <input type="password" id="typePasswordX-2" v-model="form.password_confirmation"
                        class="form-control form-control-lg" placeholder="*****************" />

                    </div>
                  </div>
                </div>

                <br>


                <div class="d-flex  mb-4 btn-center">
                  <button class="btn btn-main btn-block" type="submit">Register</button>
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
import { Form, HasError, AlertError } from "vform";
export default {
  name: "register",
  inject: ["authRepository"],
  mixins: [Promise, Alert],
  data() {
    return {
      title: "Welcome back!",
      form: this.buildForm(),
    };
  },
  mounted() { },
  methods: {
    buildForm(auth) {
      return new Form({
        name: auth ? auth.name : null,

        email: auth ? auth.email : null,
        password: auth ? auth.password : null,
        password_confirmation: auth ? auth.password_confirmation : null,
        bio: auth ? auth.bio : null,
        phone: auth ? auth.phone : null,


      });
    },

    goToForgetPassword() {
      this.goToGivenRouteName("forget-password");
    },

    goToSignIn() {
      this.goToGivenRouteName("login");
    },

    goToGivenRouteName(routeName) {
      this.$router.push({ name: routeName });
    },

    register() {
      let process;
      this.form.startProcessing();
      this.$store.dispatch("login");


      process = this.authRepository.register(this.form);

      let operation = this.response(process);
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            this.form.finishProcessing();

            if (data.status) {
              this.$router.push("/login");

              this.$toastr.s("", data.message);
            } else {
              this.$toastr.e("", data.message);
            }

          }
        })
        .catch((err) => {
          if (operation.isRejected()) {
            if (err.status === 401) {
              console.log(err.data.body);
              this.form.errors = (err.data.body);
            }

          }
          this.form.finishProcessing();
        });
    },
  },
};
</script>
