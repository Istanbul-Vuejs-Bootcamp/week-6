<template>
    <div>
        {{ this.number }}
        <br>
        <button @click="increase">Artir</button>
    </div>
</template>

<script>
    export default {
        name: "myComponent",
        props: {
            startValue: {
                default: 0,
                required: true,
            }
        },
        data() {
            return {
                number: 0
            }
        },
        methods: {
            increase() {
                this.number++;
            }
        },
        created() {
            this.number = this.startValue;
        }
    }
</script>
