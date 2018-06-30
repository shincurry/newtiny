<template>
  <div id="app">
    <ticket-selection></ticket-selection>
    <ticket-count></ticket-count>
    <applicant-info></applicant-info>
    <participants-info
      v-for="count in ticketsCount"
      :key="count"
      :index="count"
    ></participants-info>
    <ticket-submit></ticket-submit>
  </div>
</template>

<script>
import TicketSelection from './components/TicketSelection'
import TicketCount from './components/TicketCount'
import ApplicantInfo from './components/ApplicantInfo'
import ParticipantsInfo from './components/ParticipantsInfo'
import TicketSubmit from './components/TicketSubmit'

export default {
  name: 'app',
  components: {
    TicketSubmit,
    ParticipantsInfo,
    TicketSelection,
    TicketCount,
    ApplicantInfo
  },
  data: function () {
    return {
      ticketsCount: 10
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
</style>
