import axios from 'axios'

export default class API {
  static baseUrl = 'http://192.168.1.3:10086'

  static getAvailableTickets () {
    let url = `${this.baseUrl}/availableTickets`
    return axios.get(url)
  }

  static postTicketsPurchaseInfo (data) {
    let url = `${this.baseUrl}/submitTicketsPurchaseInfo`
    return axios.post(url, data)
  }
}
