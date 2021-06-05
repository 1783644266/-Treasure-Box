<template>
  <div class="detailRating">
    <div class="top">用户评价</div>
    <div v-if="commentInfo">
      <div class="rating-user" v-for="(item, i) in commentInfo" :key="i">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
        <div class="content">
          <span>{{ item.content }}</span>
        </div>
        <div class="rating-time">
          <span>{{item.created | date-format}}</span>
          <span>{{item.style}}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div>暂无评价</div>
    </div>
  </div>
</template>

<script >
export default {
  
  props: ["commentInfo"],
  data() {
    return {};
  },
  
};
</script>

<style scoped>
.detailRating {
  
  border-top: 7px solid #f2f5f8;
  border-bottom: 7px solid #f2f5f8;
  width: 100%;
  padding: 15px 8px 5px;
}
.top {
  border-bottom: 1px solid #ada8a8;
  line-height: 40px;
}
img {
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.rating-user {
  padding: 10px 0 0;
  font-size: 15px;
}
.content {
  line-height: 25px;
  font-size: 14px;
}
.rating-time {
  line-height: 20px;
  color: #999;
  font-size: 14px;
}
.rating-time span {
  margin-right: 15px;
}
</style>