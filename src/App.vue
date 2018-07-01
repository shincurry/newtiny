<template>
  <div id="app">
    <ticket-selection v-show="showPage"></ticket-selection>
    <ticket-count v-show="showPage"></ticket-count>
    <applicant-info v-show="showPage"></applicant-info>
    <participants-info
      v-show="showPage"
      v-for="count in ticketsCount"
      :key="count"
      :index="count"
    ></participants-info>
    <ticket-submit v-show="showPage"></ticket-submit>
    <loading-indicator></loading-indicator>
  </div>
</template>

<script>
import TicketSelection from './components/TicketSelection'
import TicketCount from './components/TicketCount'
import ApplicantInfo from './components/ApplicantInfo'
import ParticipantsInfo from './components/ParticipantsInfo'
import TicketSubmit from './components/TicketSubmit'
import LoadingIndicator from './components/LoadingIndicator'

export default {
  name: 'app',
  components: {
    LoadingIndicator,
    TicketSubmit,
    ParticipantsInfo,
    TicketSelection,
    TicketCount,
    ApplicantInfo
  },
  created: function () {
    this.$store.dispatch('fetchAvailableTickets')
  },
  computed: {
    ticketsCount: function () {
      return this.$store.state.ticketsCount
    },
    showPage: function () {
      return this.$store.state.availableTickets.length > 0
    }
  }
}
</script>

<style lang="scss">
  html {
    background-color: #f2f2f2;
  }

  .section {
    margin-bottom: 20px;

    .header {
      margin: 8px;
    }
  }

  /*
   * Vant Style Override
   */
  .van-cell__title {
    font-weight: bolder;
  }
  .van-cell__label {
    font-weight: normal;
  }
</style>
