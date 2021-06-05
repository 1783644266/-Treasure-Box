<template>
  <div class="category">
    <toptitle />
  </div>
</template>

<script >
import { TOTOP } from "api/mixin";
import { Toast } from "mint-ui";

export default {
  mixins: [TOTOP],
  mounted() {
    Toast({
      message: "无后台数据，暂未开发",
      position: "middle",
      duration: 1500,
    });
  },
};
</script>

<style scoped>
</style>