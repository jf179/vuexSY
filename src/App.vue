<template>
  <div id="app">
    <catagtory></catagtory>
    <list> </list>
  </div>
</template>  
<script>
// 导入组件
import catagtory from "@/components/catagtory.vue";
import list from "@/components/list.vue";
export default {
  components: {
    catagtory,
    list,
  },
};
</script>

<style>
@import url(~@/style/index.css);
</style>