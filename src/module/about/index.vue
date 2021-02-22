<template>
    <div>
    <header>
        {{aboutMsg}}
    </header>
      <user />
    </div>
</template>
<script>
import user from '../../components/user.vue';
    export default {
  components: { user },
        data () {
            return {
                aboutMsg: '我是about组件页面'
            }
        }
    }
</script>