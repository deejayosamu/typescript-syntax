//1
const bodyElement1 = document.querySelector('body') as HTMLBodyElement

bodyElement1.innerText = 'hello'

//2
const bodyElement2 = document.querySelector('body') 

if (bodyElement2) {
  bodyElement2.innerText = 'hello'
}

//3
const bodyElement3 = document.querySelector('body') 

bodyElement3!.innerText = 'hello'
