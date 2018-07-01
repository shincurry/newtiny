<template>
  <div class="participants-info section">
    <div class="header">参与者信息（第 {{index}} 位）</div>
    <van-cell-group>
      <van-field
        v-model="participantsInfos[index-1].name"
        required
        clearable
        label="姓名"
        placeholder="请输入您的真实姓名"
      />
      <van-field
        v-model="participantsInfos[index-1].idCard"
        required
        clearable
        label="身份证号"
        icon="question"
        placeholder="请输入您的身份证号"
        @click-icon="$toast('由于现场安保需要，请输入您的身份证号')"
      />
      <van-radio-group class="gender-select-group" v-model="participantsInfos[index-1].gender">
        <van-radio class="gender-select" name="男性">男性</van-radio>
        <van-radio class="gender-select" name="女性">女性</van-radio>
        <van-radio class="gender-select" name="其他">其他</van-radio>
        <van-radio class="gender-select" name="不愿透露">不愿透露</van-radio>
      </van-radio-group>
    </van-cell-group>
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  name: 'ParticipantsInfo',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapMultiRowFields([
      'participantsInfos'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .gender-select-group {
    padding: 12px;
    .gender-select {
      display: inline;
      padding: 8px;
    }
  }
</style>
