<template>
  <div class="ticket-count section">
    <van-cell
      class="ticket-selection-cell ticket"
      center="true"
      title="份数"
    >
      <van-stepper v-model="value"/>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'TicketCount',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
