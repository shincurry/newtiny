<template>
  <div class="ticket-count section">
    <van-cell
      class="ticket-selection-cell ticket"
      title="份数"
      :center="true"
    >
      <van-stepper
        v-model="count"
        :max="maxSelection"
      />
    </van-cell>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'TicketCount',
  computed: {
    ...mapFields([
      'ticketsCount',
      'selectedTicket',
      'availableTickets'
    ]),
    /*
    * wrapper for mapFields<ticketsCount>
    * */
    count: {
      get: function () {
        // mapFields<ticketsCount> getter
        return this.ticketsCount
      },
      set: function (newValue) {
        /*
        * 当购票数量改变时，同时动态地改变参与者信息数组的元素，
        * 如果购票数增加，则在参与者信息数据数组末尾新增一个元素，
        * 如果购票数减少，则去掉最后一个元素。
        * */
        if (newValue < this.ticketsCount) {
          this.$store.dispatch('popParticipantsInfos')
          console.log('popParticipantsInfos')
        } else {
          this.$store.dispatch('pushParticipantsInfos')
          console.log('pushParticipantsInfos')
        }
        // mapFields<ticketsCount> setter
        this.ticketsCount = newValue
      }
    },
    maxSelection: function () {
      /*
      * 根据当前选择种类的票剩余数量，限制可选择的最大购票数
      * */
      let selected = this.selectedTicket
      let rest = this.availableTickets.filter((t) => t.type === selected)[0].rest
      return rest
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
