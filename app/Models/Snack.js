

export default class Snacks {
  constructor(name, image, price, stock) {
    this.name = name
    this.price = price
    this.image = image || 'https://thiscatdoesnotexist.com'
    this.stock = stock
  }
}