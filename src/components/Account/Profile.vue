<template>
  <div class="row">
    
    <div class="row">
      <div class="col-lg-12 col-sm-8">
      <h3>This is the Profile page</h3>
      <div v-if="signedIn">
      <h4>username {{this.account.username}}</h4>
      <h4>email {{this.account.attributes.email}}</h4>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
export default {
  components: {},
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
  data() {
    return {
      signedIn: false,
      account: {}
    };
  }
};
</script>
<style>
</style>
