

export default class Snacks {
  constructor(name, image, price) {
    this.name = name
    this.price = price
    this.image = image || 'https://thiscatdoesnotexist.com'
  }
}