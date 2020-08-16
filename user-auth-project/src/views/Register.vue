<template>
    <div class="container mt-3">
        <form @submit.prevent="onRegister">
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <div class="mb-3">
                <label for="inputName" class="sr-only">Full name</label>
                <input type="text" v-model="formModel.name"
                       id="inputName"
                       class="form-control"
                       placeholder="Full Name"
                       required=""
                       autofocus="">
            </div>
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
            <div class="mt-3">
                <label for="inputPasswordConfirm" class="sr-only">Password</label>
                <input type="password"  v-model="formModel.password_confirmation"
                       id="inputPasswordConfirm"
                       class="form-control"
                       placeholder="Password Confirm"
                       required="">
            </div>
            <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">
                <span class="pr-2">Register</span>
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
        name: "Register.vue",
        data() {
            return {
                formModel: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register',
            }),
            onRegister() {
                //this.$store.dispatch('auth/login', this.formModel);
                this.register(this.formModel).then((response)=>{
                    if(response) {
                        this.$router.push('/');
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
