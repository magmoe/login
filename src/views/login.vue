<template>
  <div>
    <h1>Login Here</h1>
    <div role="alert" v-if="invalidUsername">Invalid username!</div>
    <div role="alert" v-if="invalidPassword">Invalid password!</div>
    <input
      type="text"
      name="username"
      v-model="user.username"
      placeholder="user name"
    />
    <input
      type="password"
      name="password"
      v-model="user.password"
      placeholder="password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidUsername: false,
      invalidPassword: false,
    };
  },
  methods: {
    login() {
      if (this.user.username == this.$parent.userAccount.username) {
        bcrypt
          .compare(this.user.password, this.$parent.userAccount.hashedPassword)
          .then((match) => {
            if (match) {
              this.$emit("authenticated", true);
              this.$router.push({ name: "restricted" }).catch((error) => {
                if (error.name !== "NavigationDuplicated") {
                  console.log(error);
                }
              });
            } else {
              this.invalidPassword = true;
              this.invalidUsername = false;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.invalidUsername = true;
        this.invalidPassword = false;
      }
    },
  },
};
</script>