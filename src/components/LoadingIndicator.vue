<template>
  <div
    v-show="show"
    class="loading-indicator"
  >
    <van-loading
      class="loader"
      color="black"
      size="60px"
    ></van-loading>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'LoadingIndicator',
  computed: {
    ...mapFields([
      'status'
    ]),
    show: function () {
      return this.status === 'loading'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .loading-indicator {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f2f2f2;

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      transform: translateX(-50%);
    }
  }
</style>
