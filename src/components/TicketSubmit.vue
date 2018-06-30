<template>
  <div class="ticket-submit section">
    <van-cell
      class="ticket-selection-cell ticket"
      center="true"
      title="份数"
    >
      <template slot="title">
        <div>共 14 张票</div>
        <div>合计 388.68 元</div>
      </template>
      <van-button type="primary" size="large">立即支付</van-button>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'TicketSubmit',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
