<template>
  <section>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-10 col-xl-12">
          <div class="row bg-board ">
            <div class="col-md-3">
              <div class="logo-row">
                <img src="/frontend/image/profile.jpeg" alt="profile" class="profile">
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="p-bold">{{currentUser.name}}</h3> <a href="javascript:void(0);" @click="logout">Logout</a>
              <p><b>Bio</b></p>
              <p>{{currentUser.bio}}</p>
            </div>
            <div class="col-md-3">
              <ul class="details">
                <li>Phone</li>
                <li><span class="font-red">{{currentUser.phone}}</span></li>
                <li>Email</li>
                <li><span class="font-red">{{currentUser.email}}</span></li>
              </ul>
            </div>
          </div>
          <br>
          <div class="row bg-board ">
            <div class="col-md-3">
              Album
            </div>
            <div class="col-md-6">

            </div>
            <div class="col-md-3">
              <button class="btn btn-danger" @click="showSidebar = true">Add Album</button>
            </div>
          </div>
          <div class="card-container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="(row, index) in rows" :key="row.id">
                <div class="card">
                  <span class="close" @click.prevent="destroy(index,row.id)"><i class="fa fa-trash" aria-hidden="true"></i>
</span>
                  <img :src="'/uploads/album-images/' + row.image" class="card-img-top" :alt="row.title" />
                  <h3 class="bottom-right" @click="edit(index)">{{ row.title }}</h3>
                  <div class="card-body">

                    <p class="card-text">
                      {{ row.description }}
                    </p>
                    <span v-if="row.featured == '1'"><i class="fa-solid fa-heart font-red al-heart"></i></span>
                    
                    <span class="al-date">{{ row.date }}</span>
                  </div>
                </div>
              </div>

            </div>
            <vue-pagination :pagination="paginatedData" @paginate="search()" :offset="10">
            </vue-pagination>
          </div>
        </div>
      </div>
    </div>
    <el-drawer v-model="showSidebar" title="Album" :before-close="dismissSidebar" direction="rtl" class="demo-drawer">
      <div class="demo-drawer__content">
        <form>
          <div class="form-outline mb-4">
            <label class="form-label">Title</label>
            <input type="text" id="typeotp_codeX-2" v-model="formData.title" class="form-control form-control-lg"
              placeholder="Title" />
            <div class="invalid-feedback" v-show="errors.title">
              <span v-for="(e, index) in errors.title" :key="index">
                {{ e }} <br>
              </span>
            </div>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label">description</label>
            <textarea v-model="formData.description" class="form-control form-control-lg"></textarea>
            <div class="invalid-feedback" v-show="errors.description">
              <span v-for="(e, index) in errors.description" :key="index">
                {{ e }} <br>
              </span>
            </div>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label">Image</label>
            <input type="file" ref="photo" class="form-control" name="image" id="customFile" />
            <div class="invalid-feedback" v-show="errors.description">
              <span v-for="(e, index) in errors.description" :key="index">
                {{ e }} <br>
              </span>
            </div>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label">Is Featured</label><br>
            <label class="radio-inline">
              <input type="radio" v-model="formData.featured" value="1">Yes
            </label>
            <label class="radio-inline">
              <input type="radio" v-model="formData.featured" value="0">No
            </label>
            <div class="invalid-feedback" v-show="errors.featured">
              <span v-for="(e, index) in errors.featured" :key="index">
                {{ e }} <br>
              </span>
            </div>
          </div>
          <div class="drawer__footer">
            <button class="btn btn-light" type="button" @click="dismissSidebar">Cancel</button>
            <button class="btn btn-primary" type="button" :loading="loading" @click.prevent="add">{{
              loading? 'Submitting ...': 'Submit'
            }}</button>
          </div>
        </form>
      </div>
    </el-drawer>
  </section>
</template>


<script>
import Alert from "../../lib/Mixins/Alert";
import Error from "../../lib/Mixins/Error";
import Utils from "../../lib/Mixins/Utils";
import Promise from "../../lib/Mixins/ExtendedPromises";
import { Form, HasError, AlertError } from "vform";
import VuePagination from "../common/Pagination.vue";
const { getToken } = require("../../lib/storage");
export default {
  name: "dashboard",
  mixins: [Error, Promise, Alert, Utils],
  inject: ["authRepository", "albumRepository"],
  components: {
    VuePagination,
  },
  data() {
    return {
      data: [],
      loading: false,
      showSidebar: false,
      paginatedData: {},
      rows: [],
      form: this.buildForm(),
      moment: moment,
      formData: {
        id: "",
        user_id: "",
        title: "",
        description: "",
        featured: '1',
        image: "",
      },
      showSidebar: false,
      isEditOn: false,
    };
  },
  mounted() {
    this.dismissSidebar();
  },
  computed: {
    
    currentUser() {
      return this.$store.getters.currentUser;
    },
    
  },
  async created() {

    this.paginatedData = await this.albumRepository.getPaginated(this.filter, 1);
    this.rows = this.paginatedData.data;
  },
  methods: {
    buildForm(auth) {
      return new Form({
        title: auth ? auth.title : null,
        description: auth ? auth.description : null,
        featured: auth ? auth.featured : null,
      });
    },
    async search() {
      this.paginatedData = await this.albumRepository.getPaginated(
        this.filter,
        this.paginatedData.current_page
      );
      this.rows = this.paginatedData.data;
    },
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
              this.formData.errors.set(err.data.body);
            }
            if (err.status === 401) {
              this.$toastr.i("", err.data.message);
            }
          }
        });
    },

    add() {
      let url =this.formData.id ? 'api/album/update/'+this.formData.id : 'api/album/create';
      let formData = new FormData();
      formData.append("image", this.$refs.photo.files[0]);
      formData.append('title', this.formData.title);
      formData.append('description', this.formData.description);
      formData.append('featured', this.formData.featured);
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`,
          },
        })
        .then((response) => {
          this.dismissSidebar();
          this.search();
          this.$swal({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              icon: "success",
              title: "Successfull",
              text: "New Item has been added!",
            });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    edit(index) {
      this.showSidebar = true;
      this.isEditOn = true;
      this.formData = this.rows[index];
    },

    
    destroy(index, id) {
      this.confirm((result) => {
        if (result.value) {
          let deletion = this.response(this.albumRepository.delete(id));
          deletion.then((data) => {
            if (deletion.isFulfilled()) {
              delete this.rows[index];
              this.rows.splice(index, 1);
              this.$toastr.s("SUCCESS", "Successfully deleted !");
            } else if (deletion.isRejected()) {
              if (error.response.status === 417) {
                this.$toastr.e(data.response.data.body);
              }
            }
          });
        }
      });
    },

    toggle() {
      this.showSidebar = false;
    },
    opensidebar() {
      // this.showSidebar = true;
      this.resetForms();
      this.setDefaultErrors();
    },
    dismissSidebar() {
      this.showSidebar = false;
      // this.$root.$emit('bv::toggle::hide', 'item-sidebar')
      this.isEditOn = false;
      this.resetForms();
    },
    resetForms() {
      this.formData = {
        id: "",
        user_id: "",
        title: "",
        description: "",
        featured: "1",
        image: "",
      };
    },
  },
};
</script>

