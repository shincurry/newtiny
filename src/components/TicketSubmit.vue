<template>
  <div class="ticket-submit section">
    <van-cell
      class="ticket-selection-cell ticket"
      :center="true"
      title="份数"
    >
      <template slot="title">
        <div>共 {{ ticketsCount }} 张票</div>
        <div>合计 {{ totalAmount }} 元</div>
      </template>
      <van-button type="primary" size="large">立即支付</van-button>
    </van-cell>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'TicketSubmit',
  computed: {
    ...mapFields([
      'ticketsCount',
      'selectedTicket',
      'availableTickets'
    ]),
    totalAmount: function () {
      let count = this.ticketsCount
      let selected = this.selectedTicket
      let price = this.availableTickets.filter((t) => t.type === selected)[0].price
      return price * count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
