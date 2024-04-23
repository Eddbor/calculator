let btn = document.querySelectorAll('#btn')
let btnsim = document.querySelectorAll('#btnsim')
let screen = document.querySelector('.screen')
let del = document.querySelector('.del')
let equal = document.querySelector('#equal')
let clear = document.querySelector('#clear')
let dot = document.querySelector('#dot')

document.addEventListener('keydown' , (e) => {
  if(e.key == '.'){
    dotfunc()
  }else if(e.key == 'Backspace'){
    delfunc()
  }else if(e.key == 'Enter'){
    equalfunc()
  }else if(e.key >= 0 && e.key <= 9){
    screen.textContent += e.key
  }else if(e.key == '/' || e.key == '-' || e.key == '+'){
    screen.textContent += ` ${e.key} `
  }else if(e.key == '*'){
    screen.textContent += ` x `
  }
})

btn.forEach(function(scrtext){
  scrtext.addEventListener("click", () => {
    if(screen.textContent.length >= 20){
      return
    }else{
      screen.textContent += `${scrtext.textContent.toLowerCase()}`;
    }
  })
})

btnsim.forEach(function(scrtext){
  scrtext.addEventListener("click", () => {
    if(screen.textContent.length >= 20){
      screen.textContent += ''
    }else{
      screen.textContent += ` ${scrtext.textContent.toLowerCase()} `;
    }
  })
})

dot.addEventListener('click', () => {
  dotfunc()
})

del.addEventListener("click", () => {
  delfunc()
})

equal.addEventListener("click", () => {
  equalfunc()
})

clear.addEventListener('click', () => {
  screen.textContent = ''
})

//FUNCTIONS

function dotfunc(){
  let arrScreen = screen.textContent.split(' ')
  if(arrScreen[arrScreen.length-1].includes('.')){
    return
  }else{
    screen.textContent += `${dot.textContent.toLowerCase()}`
  }
}

function delfunc(){
  let arrScreen = [...screen.textContent]
  if (screen.textContent == 'ruo sseddog sah nekasrof su lla'){
    return
  }
  if(arrScreen[arrScreen.length-1] == ' '){
    let remLast = arrScreen.splice(arrScreen.length-3 , 3)
  }else{
    let remLast = arrScreen.splice(arrScreen.length-1 , 1)
  }
  let joinArrScreen = arrScreen.join('')
  screen.textContent = joinArrScreen
}

function equalfunc(){
  let arrScreen = screen.textContent.split(' ')
  let numb1 = arrScreen[0]
  let numb2 = arrScreen[2]
  if(arrScreen[1] === '+'){
    let answer = (Math.floor((+numb1 + +numb2) * 1000)) / 1000
    arrScreen.splice(0 , 3 , answer)
    let joinArrScreen = arrScreen.join(' ')
    screen.textContent = joinArrScreen
  }else if(arrScreen[1] === '-'){
    let answer = (Math.floor((+numb1 - +numb2) * 1000)) / 1000
    arrScreen.splice(0 , 3 , answer)
    let joinArrScreen = arrScreen.join(' ')
    screen.textContent = joinArrScreen
  }else if(arrScreen[1] === 'x'){
    let answer = (Math.floor((+numb1 * +numb2) * 1000)) / 1000
    arrScreen.splice(0 , 3 , answer)
    let joinArrScreen = arrScreen.join(' ')
    screen.textContent = joinArrScreen
  }else if(arrScreen[1] === '/' && arrScreen[2] === '0'){
    screen.textContent = 'ruo sseddog sah nekasrof su lla'
  }else if(arrScreen[1] === '/'){
    let answer = (Math.floor((+numb1 / +numb2) * 1000)) / 1000
    arrScreen.splice(0 , 3 , answer)
    let joinArrScreen = arrScreen.join(' ')
    screen.textContent = joinArrScreen
  }
}