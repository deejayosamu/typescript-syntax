//partial
interface Address{
  email: string
  address: string
}

const me: Partial<Address> ={}
const you: Partial<Address> ={
  email: 'mlml@naver.com'
}

//pick
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreveiw1= Pick<Todo,'title'|'completed'>


const todo: TodoPreveiw1 = {
  title: 'love',
  completed: false
}

//omit
type TodoPreveiw2 = Omit<Todo, 'description'>

//exclude: union 타입에서 제거할 타입 선택

//required
type User = {
  firstName: string,
  lastName?: string 
}

let firstUser: User = {
  firstName: 'john'
}

let secondUser: Required<User> = {
  firstName: 'john',
  lastName: 'Doe'
} //optional 이더라도 required 에선 무조건 입력해야함

//record
interface catInfo {
  age: number
  breed: string
}

type catName = 'miffy' | 'boris' | 'modred'

const cats: Record<catName, catInfo> = {
  miffy: {age: 16, breed: 'persian'},
  boris: {age: 11, breed: 'korean short hair'},
  modred: {age:5, breed: 'egypt'}
} //key = catName, value = catInfo


//returntype
type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => string>

function fn(s: string) {
  return s
}

const a: ReturnType<typeof fn> = 'hello'
