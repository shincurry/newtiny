import Vue from 'vue'
import Vuex from 'vuex'

import { getField, updateField } from 'vuex-map-fields'
import { PUSH_NEW_PARTICIPANTS_INFOS, POP_PARTICIPANT_INFOS } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /*
    * 页面是否处于初始加载状态中
    * */
    loading: true,
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
    }]
  },
  getters: {
    getField
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
    }
  },
  actions: {
    updateAvailableTickets (context) {
      // network fetch balabala...
      let tickets = [{
        type: '标准票',
        note: '',
        price: 199.00,
        rest: 3
      },
      {
        type: '站票',
        note: '无座位，可自备小板凳',
        price: 99.00,
        rest: 99
      },
      {
        type: '远程支持票',
        note: '可获得活动 PPT 等资料',
        price: 9.99,
        rest: 99
      },
      {
        type: '赞助商',
        note: '获得品牌露出机会，详情联系...',
        price: 999.99,
        rest: 99
      }]
      context.state.availableTickets = tickets
      let filtered = tickets.filter((t) => t.rest > 0)
      if (filtered.length > 0) {
        context.state.selectedTicket = filtered[0].type
      }
    },
    pushParticipantsInfos (context) {
      context.commit(PUSH_NEW_PARTICIPANTS_INFOS)
    },
    popParticipantsInfos (context) {
      context.commit(POP_PARTICIPANT_INFOS)
    }
  }
})
