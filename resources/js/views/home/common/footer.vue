<template>
<footer></footer>
</template>

<script>
    import CopyRight from './copyright';
    import Promise from "../../../lib/Mixins/ExtendedPromises";

    export default {
        name: "footer",
      inject: [  ],
      mixins: [ Promise, ],
        data(){
              return{
                  setting: {},
              }
          },
        components: {
            'app-copy-right': CopyRight
        },
      

      methods: {

      }
    }
</script>

<style scoped>

</style>