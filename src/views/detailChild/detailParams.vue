<template>
  <div class="detailParams" v-if="paramInfo.sizes">
    <table>
      <tr class="A" v-for="(item, i) in paramInfo.sizes[0]" :key="i">
        <td v-for="(it, index) in item"  :key="index">{{it}}</td>
      </tr>
    </table>
    <table>
      <tr class="B"  v-for="(item,i) in paramInfo.infos" :key="`${i}a`">
        <td class="key">{{item.key}}</td>
        <td class="paramB">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script >
export default {
  props: ['paramInfo'],
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.detailParams {
  width: 100%;
  padding: 20px 0 0 20px;
}
table {
  width: 100%;
  font-size: 14px;
}
.A td {
  border-bottom: 1px solid rgba(100,100,100,.1);
  line-height: 32px;
}

.B td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0;
}
.key {
  width: 80px;
}

.paramB {
  color: #FF5777;
}
</style>