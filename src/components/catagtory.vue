<template>
  <div>
    <ul class="catagtory">
      <li
        :class="{ select: currenIndex === index }"
        v-for="(item, index) in channelsList"
        :key="index"
        @click="click(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>   
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("catagtory", ["currenIndex", "channelsList"]),
  },

  created() {
    this.getChannelsList();
  },
  methods: {
    ...mapActions("catagtory", ["getChannelsList"]),
    ...mapMutations("catagtory", ["setCurrenIndex"]),
    // 继续使用mapActions获取id详情进行点击索引与详细联动
    ...mapActions('list', ['getList']),
    click(index) {
      this.setCurrenIndex(index); // 根据索引显示当前选中项颜色
      this.getList() // 调用方法
    },
  },
};
</script>
<style>
</style>