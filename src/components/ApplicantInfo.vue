<template>
  <div class="applicant-info section">
    <div class="header">报名者信息</div>
    <van-cell-group>
      <van-field
        v-model="phone"
        required
        clearable
        label="手机号"
        type="tel"
        icon="question"
        placeholder="请输入您的手机号"
        @click-icon="$toast('您输入的手机号，将用于接收出票短信')"
      />
      <van-field
        v-model="email"
        required
        clearable
        label="电子邮箱"
        icon="question"
        placeholder="请输入您的电子邮箱"
        @click-icon="$toast('您输入的电子邮箱，将用于接收出票邮件')"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ApplicantInfo',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
