import { ProxyState } from "../AppState.js";


class SnacksService {
  Buy() {
    if (ProxyState.mountain.stock > 0) {
      if (ProxyState.totalChange >= ProxyState.mountain.price) {
        ProxyState.totalChange -= ProxyState.mountain.price
        ProxyState.mountain.stock--
      } else { alert('Add Change') }
    }
  }

  addChange() {
    if (ProxyState.wallet >= .25) {
      ProxyState.totalChange += ProxyState.addChange
      ProxyState.wallet -= ProxyState.addChange
    } else { alert('Work for It') }
  }
  returnChange() {
    if (ProxyState.totalChange > 0) {
      ProxyState.wallet += ProxyState.totalChange
      ProxyState.totalChange = 0
    }
    else { alert('Theft is Bad') }
  }

  work() {
    ProxyState.wallet += ProxyState.work
  }
  refill() {
    if (ProxyState.mountain.stock === 0) {
      ProxyState.mountain.stock += 30
    } else { alert('I\'m Full') }
  }
}


export const snackService = new SnacksService()