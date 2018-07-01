import Vue from 'vue'
import Vuex from 'vuex'

import { getField, updateField } from 'vuex-map-fields'
import {
  PUSH_NEW_PARTICIPANTS_INFOS,
  POP_PARTICIPANT_INFOS,
  ADD_ERROR,
  REMOVE_ERROR
} from './mutation-types'
import API from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /*
    * 页面初始化加载状态
    * 'init' | 'loading' | 'error' | 'complete'
    * */
    status: 'init',
    /*
    * 页面是否处于初始加载状态中
    * */
    loading: false,
    /*
    * 可选票种类和相关信息
    * Array [{
    *   type: '标准票' | '站票' | '远程支持票' | '赞助商' | ... String
    *   note: 当前票种的备注 String
    *   price: 价格 Number
    *   rest: 剩余票数 Number
    * }]
    * */
    availableTickets: [],
    /*
    * 用户选择的票种类
    * '标准票' | '站票' | '远程支持票' | '赞助商' | ... String
    * */
    selectedTicket: '',
    /*
    * 用户选择购买的票数量
    * */
    ticketsCount: 1,
    /*
    * 报名者信息
    * {
    *   phone: 手机号码 String
    *   email: 电子邮箱 String
    * }
    * */
    applicantInfo: {
      phone: '',
      email: ''
    },
    /*
    * 参与者信息
    * Array [{
    *   name: 姓名 String
    *   idCard: 身份证号 String
    *   gender: '男性' | '女性' | '其他' | '不愿透露'
    * }]
    * */
    participantsInfos: [{
      name: '',
      idCard: '',
      gender: '不愿透露'
    }],
    /*
    * 表单验证
    * */
    formError: []
  },
  getters: {
    getField,
    /*
    * 总金额
    * */
    totalAmount: function (state, getters) {
      /*
      * 如果可选票种为空，则总金额为 0
      * */
      if (state.availableTickets.length === 0) {
        return 0
      }

      let count = state.ticketsCount
      let selected = state.selectedTicket
      let filtered = state.availableTickets.filter((t) => t.type === selected)
      if (filtered.length === 0) {
        return 0
      }
      let price = filtered[0].price
      return price * count
    }
  },
  mutations: {
    updateField,
    [PUSH_NEW_PARTICIPANTS_INFOS] (state) {
      state.participantsInfos.push({
        name: '',
        idCard: '',
        gender: '不愿透露'
      })
    },
    [POP_PARTICIPANT_INFOS] (state) {
      state.participantsInfos.pop()
    },
    [ADD_ERROR] (state, err) {
      console.log(typeof err)
      state.formError.push(err)
    },
    [REMOVE_ERROR] (state, err) {
      let index = state.formError.indexOf(err)
      if (index !== -1) state.formError.splice(index, 1)
    }
  },
  actions: {
    fetchAvailableTickets (context) {
      context.state.status = 'loading'
      API.getAvailableTickets()
        .then((response) => {
          context.state.status = 'complete'
          let tickets = response.data.data
          context.state.availableTickets = tickets
          let filtered = tickets.filter((t) => t.rest > 0)
          if (filtered.length > 0) {
            context.state.selectedTicket = filtered[0].type
          }
        })
        .catch(() => {
          context.state.status = 'error'
        })
    },
    submitTicketsPurchaseInfo (context) {
      let {
        selectedTicket,
        ticketsCount,
        applicantInfo,
        participantsInfos
      } = context.state
      API.postTicketsPurchaseInfo({
        selectedTicket,
        ticketsCount,
        applicantInfo,
        participantsInfos,
        totalAmount: context.getters.totalAmount
      })
    },
    pushParticipantsInfos (context) {
      context.commit(PUSH_NEW_PARTICIPANTS_INFOS)
    },
    popParticipantsInfos (context) {
      context.commit(POP_PARTICIPANT_INFOS)
    },
    addError (context, err) {
      context.commit(ADD_ERROR, err)
    },
    removeError (context, err) {
      context.commit(REMOVE_ERROR, err)
    }
  }
})
