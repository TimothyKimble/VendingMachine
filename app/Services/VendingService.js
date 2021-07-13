import { ProxyState } from "../AppState.js";


class SnacksService {
  Buy() {
    if (ProxyState.totalChange >= ProxyState.mountain.price) {
      ProxyState.totalChange -= ProxyState.mountain.price
    }
  }

  addChange() {
    ProxyState.totalChange += ProxyState.addChange
  }
}


export const snackService = new SnacksService()