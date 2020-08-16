<template>
    <div>
        HOME PAGE<br>
        Merhaba {{ user.name }}<br>
        <router-link to="/profile">
            Bilgileri güncelle
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Home",
        computed: {
            ...mapGetters({
                user: 'auth/getAuthUser'
            })
        },
        created() {
        },

    }
</script>

<style scoped>

</style>
