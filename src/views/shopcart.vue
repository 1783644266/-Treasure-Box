<template>
  <div >
    <toptitle v-show="$route.meta.title" />
  </div>
</template>

<script >
import toptitle from "components/toptitle/toptitle";

export default {
  data() {
    return {

    }
  },
  components: {
    toptitle,
  }
}
</script>

<style scoped>
</style>