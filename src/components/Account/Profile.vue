<template>
  <div class="content">
    <!-- user profile -->
    
    <loading :active.sync="isLoading" 
    :can-cancel="true" 
    :is-full-page="fullPage"></loading>

    <div class="row">
        
      <div class="col-xl-5">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Profile Data</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <fg-input placeholder="Enter email" label="Email address" v-validate="modelValidations.email" :error="getError('email')" v-model="userData.email"></fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <fg-input placeholder="Enter firstname" label="First Name" v-validate="modelValidations.firstname" :error="getError('firstname')" v-model="userData.firstname"></fg-input>
              </div>
              <div class="col">
                <fg-input placeholder="Enter lastname" label="Last Name" v-validate="modelValidations.lastname" :error="getError('lastname')" v-model="userData.lastname"></fg-input>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- user market place table -->
      <div class="col-xl-7">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Which marketplaces (Upwork, Golance, Fiverr, etc.) do you use?</h5>
          </div>
          <div class="card-body row">
            <div class="col-sm-12">
              <el-table :data="userData.marketplaces" header-row-class-name="text-primary">
                <el-table-column prop="name" label="Marketplace"> </el-table-column>
                <el-table-column prop="profile_url" label="Profile URL"> </el-table-column>
                <el-table-column class-name="action-buttons td-actions" align="right" label="">

                  <template slot-scope="props">

                    <a href="#!" @click="deleete(props.$index)"><i class="fa fa-times"></i></a>

                  </template>

                </el-table-column>
              </el-table>

              <el-table :data="['']" :show-header="false">
                <el-table-column> 
                  <template slot-scope="props">          
                    <fg-input placeholder="Name" class="mt-2" v-model="input.name"></fg-input>
                  </template>
                </el-table-column>
                <el-table-column> 
                  <template slot-scope="props">
                    <fg-input placeholder="Profile URL"  class="mt-2" v-model="input.profile_url"></fg-input>
                  </template>
                </el-table-column>
                <el-table-column class-name="action-buttons td-actions" align="right" label="">
                  <template slot-scope="props">
                    <a href="#!" @click="add" class="btn btn-waves">add</a>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>



import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
import axios from "axios";

import Loading from "vue-loading-overlay";

import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: { Loading },

  async beforeCreate() {
    try {
      this.account = await Auth.currentAuthenticatedUser();
      this.signedIn = true;
    } catch (err) {
      this.signedIn = false;
    }
    AmplifyEventBus.$on("authState", async info => {
      if (info === "signedIn") {
        this.signedIn = true;
        this.account = await Auth.currentAuthenticatedUser();
      } else {
        this.signedIn = false;
      }
    });
  },

  mounted() {
    this.getProfile();
  },

  data() {
    return {
      isLoading: false,
      fullPage: true,
      userData: {
        entity_id: "",
        version: "",
        changed_by_id: "",
        user_id: "",
        changed_on: "",
        firstname: "",
        lastname: "",
        email: "",
        marketplaces: []
      },

      modelValidations: {
        email: {
          required: true,
          email: true
        },
        firstname: {
          required: true,
          min: 3
        },
        lastname: {
          required: true,
          min: 3
        }
      },

      columns: ["Marketplace", "Profile URL", ""],

      input: {
        name: "",
        profile_url: ""
      },
      editInput: {
        name: "",
        profile_url: ""
      }
    };
  },

  methods: {
    getProfile() {
      this.isLoading = true;
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            "/users/" +
            "80586340-5b00-419b-8b45-9875e96770fd"
        ) //this should change later to username
        .then(response => {
          this.userData = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.isLoading = false));
    },
    updateProfile() {
      this.isLoading = true;
      axios
        .put(
          process.env.VUE_APP_ROOT_API + "/users",
          JSON.stringify(this.userData),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        ) //this should change later to username
        .then(response => {
          this.getProfile();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.isLoading = false));
    },

    getError(fieldName) {
      return this.errors.first(fieldName);
    },

    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });
    },

    add: function() {
      this.userData.marketplaces.push({
        name: this.input.name,
        profile_url: this.input.profile_url
      });

      for (var key in this.input) {
        this.input[key] = "";
      }
      this.$refs.name.focus();
    },
    //function to defintely delete data
    deleete: function(index) {
      this.userData.marketplaces.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.el-table .td-actions {
  button.btn {
    margin-right: 5px;
  }
}

.card1 {
  background-color: #ffffff;
}

.card {
  width: 100%;
}
</style>
