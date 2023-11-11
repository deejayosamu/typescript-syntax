interface Animal1 {
  name: string
}

interface Bear1 extends Animal1{
  honey: Boolean
}

type Animal2 = {
  name: string
}

type Bear2 = Animal2&{
  honey: boolean
}
