function getArrayLength<T>(arr: T[]) {
  return arr.length
}

const arr1 = [1,2,3,4]
const arr2 = ['a','b','c','d']
const arr3 = [true, false, false]

getArrayLength<number>(arr1)
getArrayLength<string>(arr2)
getArrayLength<boolean>(arr3)

interface Vehicle<T> {
  name: string
  color: string
  option: T
}

const car: Vehicle<{price: 1000}> = {
  name: 'sonata',
  color: 'red',
  option: {
    price: 1000
  }
}

const bike: Vehicle<boolean> = {
  name: 'Bike',
  color: 'green',
  option: true
}

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

makeFullName({firstName: 'John', lastName: 'Doe', location: 'Seoul'})