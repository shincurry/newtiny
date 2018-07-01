<template>
  <div class="ticket-selection section">
    <div class="header">选择票种</div>
    <van-radio-group v-model="selected">
      <van-list>
        <van-cell-group>
          <ticket-selection-cell
            class="ticket"
            v-for="ticket in availableTickets"
            :key="ticket.type"
            :ticket="ticket"
          >
          </ticket-selection-cell>
        </van-cell-group>
      </van-list>
    </van-radio-group>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import TicketSelectionCell from './TicketSelectionCell'

export default {
  name: 'TicketSelection',
  components: {
    TicketSelectionCell
  },

  computed: {
    ...mapFields([
      'selectedTicket',
      'availableTickets',
      'ticketsCount'
    ]),
    /*
    * wrapper for mapFields<selectedTicket>
    * */
    selected: {
      get: function () {
        // mapFields<selectedTicket> getter
        return this.selectedTicket
      },
      set: function (newValue) {
        /*
        * 当选择其他种类的票时，重置购票数为 1
        * */
        if (this.selectedTicket !== newValue) {
          this.ticketsCount = 1
        }
        // mapFields<selectedTicket> setter
        this.selectedTicket = newValue
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
