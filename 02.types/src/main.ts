//boolean
let boolean: boolean

//number
let number: number
let integer: number = 6
let float: number = 1.345

//string
let string: string
let firstName: string = 'Doe'

//array
//한가지 타입만 가지는 배열
let names1: string[] = ['John','Kim']
let names2: Array<string> = ['John','Kim']

//여러 가지 타입을 가지는 배열
let array1: (string | number)[] = ['John',1,2]
let array2: Array<string | number> = ['John',1,2]

//여러 타입을 단언 할 수 없는 경우
let any1: any[] = ['John',123,[],{}]

//readonly 배열 생성
let stringArray: readonly string[] = ['A','B']
let numberArray: ReadonlyArray<number> = [1,2]

//tuple
let tuple1: [string,number] = ['a',1] //순서 지켜야함
let tuple2: [string,number][] = [['a',1],['b',2]]

let tuple3: [string,number] = ['a',1]
tuple3.push(3)
console.log(tuple3)

//any
let any: any = 2
any = 'string'
any = []

//unknown
let unknown: unknown = false

//object(array, null 도 object 임)
let object: object = {}
let array: object = []

const obj1: {id: number, title: string, description: string} = {
  id: 1,
  title: 'a',
  description: 'abc'
}

//union
let uni: (string | number)
uni = 1
uni = 'love'

//function
let func1: (arg1: number, arg2: number) => number
func1 = function(x,y){
  return x*y
}

let func2: () => void
func2 = function(){
  console.log('hi')
}

//null,undefined

//void
function greeting(): void{
  console.log('hi')
}

//never
function throwError(): never{
  throw new Error('newerror')
}

