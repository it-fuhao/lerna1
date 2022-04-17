<template>
  <p>123</p>
  <FhHelloWorld></FhHelloWorld>
  <Button>annual</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { Button, Collapse } from 'vant';
// import FhHelloWorld from '../packages/hello-world';
import FhHelloWorld from '@lerna1/hello-world';
export default defineComponent({
  components: {
    // [Button.name]: Button,
    // 'vant-button': Button,
    FhHelloWorld
  },
  setup() {
    
  },
})
</script>
<script lang="ts" setup>
// import FhHelloWorld from '../packages/hello-world';
// import { Button, Collapse } from 'vant';
// import FhHelloWorld from '@lerna1/hello-world';

</script>

<style scoped>

</style>

