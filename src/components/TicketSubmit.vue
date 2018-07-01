<template>
  <div class="ticket-submit section">
    <van-cell
      class="ticket-selection-cell ticket"
      :center="true"
      title="份数"
    >
      <template slot="title">
        <div>共 <span class="total-amount">{{ ticketsCount }}</span> 张票</div>
        <div>合计 <price-span class="total-price" :value="totalAmount"></price-span> 元</div>
      </template>
      <van-button
        type="primary"
        size="large"
        :loading="submiting"
        @click="submit"
      >
        立即支付
      </van-button>
    </van-cell>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
import PriceSpan from './PriceSpan'

export default {
  name: 'TicketSubmit',
  components: {PriceSpan},
  data: function () {
    return {
      submiting: false
    }
  },
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

      this.$dialog.confirm({
        title: '确定要提交订单吗？',
        message: `共 ${this.ticketsCount} 张票，合计 ${this.totalAmount} 元。`,
        confirmButtonText: '确认订单',
        lockScroll: true,
        closeOnClickOverlay: true
      })
        .then(() => {
          this.submiting = true
          this.$store.dispatch('submitTicketsPurchaseInfo')
            .then(() => {
              this.submiting = false
              Toast.success('提交订单成功')
            })
            .catch(() => {
              this.submiting = false
              Toast.fail('提交订单失败')
            })
        })
        .catch(() => {
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .total-amount, .total-price {
    color: #44bb00;
  }
</style>
