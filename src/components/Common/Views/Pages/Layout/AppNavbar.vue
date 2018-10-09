<template>
  <navbar navbar-menu-classes="navbar-right">
    <template slot="navbar-menu">
      <router-link to="/account/profile" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-layout-11"></i> Dashboard
        </a>
      </router-link>
       <router-link to="/signin" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-tap-01"></i> Sign In
        </a>
      </router-link>

      <router-link to="/account/profile" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-satisfied"></i> User
        </a>
      </router-link>
      <router-link to="/lock" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-key-25"></i> Lock
        </a>
      </router-link>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from "src/components/UIComponents";
export default {
  name: "main-navbar",
  components: {
    Navbar
  }
};
</script>

<style scoped>
</style>
