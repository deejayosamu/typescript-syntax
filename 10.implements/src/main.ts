class Car {
  mileage = 0
  price = 100
  color = 'white'

  drive() {
    return 'drive'
  }

  break() {
    return 'break'
  }
}

interface Part {
  seats: number
  tire: number
}

class Ford implements Car, Part {
  mileage: number = 1
  price: number = 2
  color: string = 'green'

  seats: number = 4
  tire: number = 4

  drive(): string {
    return 'drive'
  }

  break(): string {
    return 'break'
  }
}
// Ford 가 Car 의 형식을 똑같이 가지고 있어야 됨.

const myFordCar = new Ford()