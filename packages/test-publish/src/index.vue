<template>
  <div>
    <p>{{ msg }}</p>
    <van-button>按钮8</van-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Button } from 'vant'
export default defineComponent({
  name: "HelloWorld",
  components: {
    [Button.name]: Button
  },
  setup() {
    const msg = ref(11);
    return {
      msg
    }
  }
})
</script>
<style lang="scss">
p {
  font-size: 14px;
}
</style>