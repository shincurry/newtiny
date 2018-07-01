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
        @blur="validatePhoneNumber"
        :error="formError.includes('applicant-phone-empty')"
        :error-message="formError.includes('applicant-phone') ? '请输入正确的手机号' : ''"
      />
      <van-field
        v-model="email"
        required
        clearable
        label="电子邮箱"
        type="email"
        icon="question"
        placeholder="请输入您的电子邮箱"
        @click-icon="$toast('您输入的电子邮箱，将用于接收出票邮件')"
        @blur="validateEmailNumber"
        :error="formError.includes('applicant-email-empty')"
        :error-message="formError.includes('applicant-email') ? '请输入正确的电子邮箱地址' : ''"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ApplicantInfo',
  computed: {
    ...mapFields([
      'applicantInfo.phone',
      'applicantInfo.email',
      'formError'
    ])
  },
  methods: {
    validatePhoneNumber () {
      let flag = /^1[0-9]{10}$/.test(this.phone)
      this.$store.dispatch('removeError', 'applicant-phone')
      this.$store.dispatch('removeError', 'applicant-phone-empty')
      if (!flag) {
        if (this.phone.length === 0) {
          this.$store.dispatch('addError', 'applicant-phone-empty')
        } else {
          this.$store.dispatch('addError', 'applicant-phone')
        }
      }
    },
    validateEmailNumber () {
      let flag = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.email)
      this.$store.dispatch('removeError', 'applicant-email')
      this.$store.dispatch('removeError', 'applicant-email-empty')
      if (!flag) {
        if (this.email.length === 0) {
          this.$store.dispatch('addError', 'applicant-email-empty')
        } else {
          this.$store.dispatch('addError', 'applicant-email')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
