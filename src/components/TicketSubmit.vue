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
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'

export default {
  name: 'TicketSubmit',
  computed: {
    ...mapFields([
      'ticketsCount',
      'selectedTicket',
      'availableTickets',
      'applicantInfo',
      'formError'
    ]),
    ...mapMultiRowFields([
      'participantsInfos'
    ]),
    totalAmount: function () {
      return this.$store.getters.totalAmount
    }
  },
  methods: {
    validate () {
      if (this.applicantInfo.phone.length === 0) {
        this.$store.dispatch('addError', 'applicant-phone-empty')
      }
      if (this.applicantInfo.email.length === 0) {
        this.$store.dispatch('addError', 'applicant-email-empty')
      }
      this.participantsInfos.forEach((info, index) => {
        if (info.name.length === 0) {
          this.$store.dispatch('addError', `participant-${index + 1}-name-empty`)
        }
        if (info.idCard.length === 0) {
          this.$store.dispatch('addError', `participant-${index + 1}-idCard-empty`)
        }
      })
    },
    submit () {
      this.validate()
      if (this.formError.length !== 0) {
        return
      }
      this.$store.dispatch('submitTicketsPurchaseInfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
