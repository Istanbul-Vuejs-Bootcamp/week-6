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
        <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">
            <span class="pr-2">Sign in</span>
            <div class="spinner-border text-light" role="status" v-if="loading">
                <span class="sr-only">Loading...</span>
            </div>
        </button>
        <p class="mt-5 mb-3 text-muted">54. Vuejs Istanbul Bootcamp</p>
    </form>
    </div>
</template>

<script>
    import { mapActions, mapState } from  'vuex';
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
            ...mapActions({
                login: 'auth/login',
                me: 'auth/me',
            }),
            onLogin() {
                //this.$store.dispatch('auth/login', this.formModel);
                this.login(this.formModel).then((response) => {
                    if(response) {
                        this.me().then((response) => {
                            this.$router.push('/');
                        })
                    }
                })
            }
        },
        computed: {
            ...mapState('auth', {
                loading: (state) => state.isLoading,
            })
        }
    }
</script>

<style scoped>

</style>
