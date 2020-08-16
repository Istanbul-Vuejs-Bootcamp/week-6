<template>
    <div class="container mt-3">
        <form @submit.prevent="onUpdate">
            <h1 class="h3 mb-3 font-weight-normal">Update Profile</h1>
            <div class="mt-3">
                <label for="inputName" class="sr-only">Name</label>
                <input type="text"  v-model="formModel.name"
                       id="inputName"
                       class="form-control"
                       placeholder="name"
                       required="">
            </div>
            <button class="mt-3 btn btn-lg btn-success btn-block" type="submit">
                <span class="pr-2">Update</span>
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
        name: "Profile",
        data() {
            return {
                formModel: {
                    name: ''
                }
            }
        },
        methods: {
            ...mapActions({
                updateProfile: 'auth/updateProfile',
            }),
            onUpdate() {
                this.updateProfile(this.formModel).then((response) => {
                    if(response) {
                        this.$router.push('/');
                    }
                })
            }
        },
        computed: {
            ...mapState('auth', {
                loading: (state) => state.isLoading,
                name: (state) => state.authUser ? state.authUser.name : null,
            })
        },
        watch: {
            name(newVal) {
                if(newVal) {
                    this.formModel.name = newVal;
                }
            }
        },
        mounted() {
            if(this.$store.getters["auth/getAuthUser"]) {
                this.formModel.name = this.$store.getters["auth/getAuthUser"].name;
            }
        }


    }
</script>

<style scoped>

</style>
