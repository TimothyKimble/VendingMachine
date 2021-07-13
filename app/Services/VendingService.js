import { ProxyState } from "../AppState.js";


class SnacksService {
  Buy() {
    if (ProxyState.mountain.stock > 0) {
      if (ProxyState.totalChange >= ProxyState.mountain.price) {
        ProxyState.totalChange -= ProxyState.mountain.price
        ProxyState.mountain.stock--
      }
    }
  }

  addChange() {
    ProxyState.totalChange += ProxyState.addChange

  }
  refill() {
    if (ProxyState.mountain.stock === 0)
      ProxyState.mountain.stock += 30
  }
}


export const snackService = new SnacksService()