<template>
  <span class="price-span">
    <span class="integer">{{ integer }}</span>
    <span class="decimal">.{{ decimal }}</span>
  </span>
</template>

<script>
export default {
  name: 'PriceSpan',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    integer: function () {
      return this.value.toFixed(2).split('.')[0]
    },
    decimal: function () {
      return this.value.toFixed(2).split('.')[1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .price-span {
    .integer {
      font-size: 1.1rem;
      font-weight: bolder;
    }
  }
</style>
