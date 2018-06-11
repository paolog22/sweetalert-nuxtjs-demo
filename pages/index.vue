<template>

  <form action="">
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Enter your username" v-model="login.username">
    </div><!-- form-group -->
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Enter your password" v-model="login.password">
      <a href="" class="tx-info tx-12 d-block mg-t-10">Forgot password?</a>
    </div><!-- form-group -->
    <button type="submit" class="btn btn-info btn-block" @click.prevent="submitLogin">Sign In</button>

    <div class="mg-t-60 tx-center">Not yet a member? <a href="page-signup.html" class="tx-info">Sign Up</a></div>

  </form>

</template>

<script>
  import AuthProxy from '~/core/proxies/AuthProxy'

  export default {
    layout: 'auth',
    data() {
      return {
        login: {
          username: null,
          password: null
        }
      }
    },
    methods: {
      submitLogin() {
        new AuthProxy().login(this.login)
          .then(({ data }) => {
            this.$store.commit('auth/SET_TOKEN', data.token)
            this.$router.push('/dashboard')
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }

</script>
