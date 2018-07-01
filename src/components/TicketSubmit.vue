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
      <van-button
        type="primary"
        size="large"
        @click="submit"
      >
        立即支付
      </van-button>
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
      'availableTickets',
    ]),
    totalAmount: function () {
      return this.$store.getters.totalAmount
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('submitTicketsPurchaseInfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
