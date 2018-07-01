<template>
  <div
    v-show="!isCompelete"
    class="loading-indicator"
  >
    <van-loading
      v-show="isLoading"
      class="loader indicator"
      color="black"
      size="60px"
    ></van-loading>
    <div
      v-show="isFailed"
      class="error indicator"
    >
      <van-icon class="icon" name="clear"/>
      <div class="message">加载失败</div>
    </div>

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
    isLoading: function () {
      return this.status === 'loading'
    },
    isFailed: function () {
      return this.status === 'error'
    },
    isCompelete: function () {
      return this.status === 'complete'
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

    .indicator {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      transform: translateX(-50%);
    }

    .error {
      top: 40%;
      .icon {
        color: #d80000;
        font-size: 80px;
      }
      .message {
        text-align: center;
        margin: 12px auto;
        font-size: 16px;
      }
    }
  }
</style>
