<template>
    <div class="container mt-3">
    <form @submit.prevent="onLogin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="formModel.email"
                   id="inputEmail"
                   class="form-control"
                   placeholder="Email address"
                   required=""
                   autofocus="">
        </div>
        <div class="mt-3">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password"  v-model="formModel.password"
                   id="inputPassword"
                   class="form-control"
                   placeholder="Password"
                   required="">
        </div>
        <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">54. Vuejs Istanbul Bootcamp</p>
    </form>
    </div>
</template>

<script>
    export default {
        name: "Login.vue",
        data() {
            return {
                formModel: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            onLogin() {
                this.$store.dispatch('auth/login', this.formModel);
            }
        },
    }
</script>

<style scoped>

</style>
