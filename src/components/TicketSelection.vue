<template>
  <div class="ticket-selection section">
    <div class="header">选择票种</div>
    <!--<ticket-selection-cell-->
      <!--v-for="ticket in tickets"-->
      <!--:key="ticket.title"-->
      <!--:title="ticket.title"-->
      <!--:label="ticket.label"-->
      <!--:price="ticket.price"-->
      <!--:rest="ticket.rest"-->
    <!--&gt;</ticket-selection-cell>-->
    <van-radio-group v-model="radio">
      <van-list>
        <van-cell-group>
          <ticket-selection-cell
            class="ticket"
            v-for="ticket in tickets"
            :key="ticket.title"
            :ticket="ticket"
          >
          </ticket-selection-cell>
        </van-cell-group>
      </van-list>
    </van-radio-group>
  </div>
</template>

<script>
import TicketSelectionCell from './TicketSelectionCell'

export default {
  name: 'TicketSelection',
  components: {
    TicketSelectionCell
  },
  data: () => {
    return {
      radio: '1',
      tickets: [
        {
          title: '标准票',
          price: 199,
          rest: 2
        },
        {
          title: '站票',
          label: '无座位，可自备小板凳',
          price: 99,
          rest: 99
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
