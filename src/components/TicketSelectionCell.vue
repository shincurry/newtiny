<template>
  <van-cell
    class="ticket-selection-cell ticket"
    center="true"
    :title="ticket.title"
    :label="ticket.label"
  >
    <van-row justify="center" align="center">
      <van-col span="8" offset="10">
        <div class="price">{{ ticket.price }} 元</div>
        <div
          class="rest"
          v-show="showRestMessage"
        >还剩 {{ ticket.rest }} 张</div>
      </van-col>
      <van-col span="4" offset="2">
        <van-radio class="select-radio" :name="ticket.title"/>
      </van-col>
    </van-row>

    <!--<span class="ticket-info">-->
      <!--<span class="price">{{ ticket.price }} 元</span>-->
      <!--<span-->
        <!--class="rest"-->
        <!--v-show="showRestMessage"-->
      <!--&gt;还剩 {{ ticket.rest }} 张</span>-->
    <!--</span>-->
    <!--<span class="select-radio">-->
      <!--<van-radio :name="ticket.title"/>-->
    <!--</span>-->
  </van-cell>
</template>

<script>
export default {
  name: 'TicketSelectionCell',
  props: {
    ticket: {
      type: Object,
      default: function () {
        return {
          title: '',
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
    min-height: 80px;
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
