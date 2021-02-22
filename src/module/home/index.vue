<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <button @click="jump">jump to about page</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件页面"
            }
        },
        methods: {
            jump() {
                this.$router.push('/about')
            }
        }
    }
</script>