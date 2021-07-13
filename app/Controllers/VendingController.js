import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/VendingService.js";

function _draw() {
  let cost = ProxyState.totalChange
  let item = ProxyState.mountain
  document.getElementById('price').innerText = item.price.toString()
  document.getElementById('name').innerHTML = `<h3>${item.name}</h3><hr/><img src="${item.image}" alt="">`
  document.getElementById('total').innerText = cost
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
}