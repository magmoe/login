<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-if="authenticated"
        to="/"
        v-on:click.native="logout()"
        replace
        >Logout</router-link
      >
    </div>
    <router-view v-on:authenticated="setAuthenticated" />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      userAccount: {
        username: "admin",
        hashedPassword:
          "$2a$10$DEk/zACgZhWt72B8P4yZXOZUYCTLq3FGY4h36VLQlDZQWH9ziN2zi",
      },
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.push({ name: "login" }).catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          console.log(error);
        }
      });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>
