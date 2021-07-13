import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/VendingService.js";

function _draw() {
  let cost = ProxyState.totalChange
  let item = ProxyState.mountain
  document.getElementById('price').innerText = item.price.toString()
  document.getElementById('name').innerHTML = `<h3>${item.name} Stock:${item.stock}</h3><hr/><img src="${item.image}" alt="">`
  document.getElementById('total').innerText = cost.toFixed(2)
  document.getElementById('wallet').innerHTML = `<h3>Your Money: $${ProxyState.wallet.toFixed(2)}</h3>`
}

export default class VendingsController {
  constructor() {
    _draw()
  }

  Buy(cost) {
    snackService.Buy(cost)
    _draw()
  }
  addChange() {
    snackService.addChange()
    _draw()
  }
  refill() {
    snackService.refill()
    _draw()
  }
  returnChange() {
    snackService.returnChange()
    _draw()
  }
  work() {
    snackService.work()
    _draw()
  }
}