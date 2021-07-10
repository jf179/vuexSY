<template>
  <div class="list">
    <!-- 对list数组进行遍历取出详情 -->
    <div class="article_item" v-for="(item, index) in list" :key="index">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div class="img_box">
        <!-- 由于返回的图片是存储在对象数组内的还需要根据详情item再单独循环迭代图片 当前页面循环的item需要进行区别-->
        <img
          v-for="(item2, index2) in item.cover.images"
          :key="index2"
          :src="item2"
          class="w100"
        />
      </div>
      <!---->
      <div class="info_box">
        <span>{{ item.aut_name }} </span>
        <span>{{ item.comm_count }} </span>
        <span>{{ item.pubdate }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("list", ["list"]),
  },
  methods: {},
};
</script>
<style>
</style>