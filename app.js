const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let result = 0

let hitPosition


function getMole(){
    squares.forEach(square => {
        square.classList.remove('mole')
    });
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    
    hitPosition = randomSquare.id
}
let timerID = null
timerID  = setInterval(getMole , 1000)

squares.forEach(square=>{square.addEventListener('mousedown' , () => {
    if(square.id == hitPosition){
        result++
        score.textContent = result
        hitPosition = null
    }
})})
let time
let ID
function timer(){
    time = 60
    let countid = setInterval(()=>{if(time>0){time--
    timeLeft.textContent = time}
    else if(time == 0){
        score.textContent = 'GAME OVER'
        clearInterval(countid)
        clearInterval(timerID)
        ID = setInterval(timer , 5000)
        result = 0}
    }, 800)
    clearInterval(ID)
}
timer()