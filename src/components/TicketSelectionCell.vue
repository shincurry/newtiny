<template>
  <van-cell
    class="ticket-selection-cell ticket"
    :center="true"
    :title="ticket.type"
    :label="ticket.note"
  >
    <van-row justify="center" align="center">
      <van-col span="10" offset="7">
        <div class="price"><price-span :value="ticket.price"></price-span> 元</div>
        <div
          class="rest"
          v-show="showRestMessage"
        >还剩 {{ ticket.rest }} 张</div>
      </van-col>
      <van-col span="4" offset="3">
        <van-radio class="select-radio" :name="ticket.type" :disabled="ticket.rest === 0"/>
      </van-col>
    </van-row>
  </van-cell>
</template>

<script>
import PriceSpan from './PriceSpan'

export default {
  name: 'TicketSelectionCell',
  components: {PriceSpan},
  props: {
    ticket: {
      type: Object,
      default: function () {
        return {
          type: '',
          note: '',
          price: 0,
          rest: 99
        }
      }
    }
  },
  computed: {
    showRestMessage: function () {
      return this.ticket.rest < 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .ticket-selection-cell {
    min-height: 60px;
  }

  .price, .rest {
    line-height: 1rem;
  }

  .rest {
    color: red;
    font-size: 0.6rem;
    text-align: right;
  }

  .select-radio {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
