//variables:
const restart = document.querySelector("button.repeat")

//character ----
const character = document.querySelector(".character")
console.log(character)

//game container ----
const gameArea = document.querySelector(".gameArea")
console.log(gameArea)

//obstacle ------
const obstacle = document.querySelector(".obstacle")
console.log(obstacle)

//score
let score = 0
//scoreDisplay
const scoreDisplay = document.querySelector(".score")
// console.log()
const updateScore = () => {
  scoreDisplay.textContent = `Score: ${score}`
}
//playAgain
const playAgain = document.querySelector(".playAgain")
console.log(playAgain)
//functions
//function named jump(create a class inside the character named jump) ----- setTimeout(remove the class named jump)
const jump = () => {
  if (character.classList != "jump") {
    character.classList.add("jump")
    console.log(character)
    setTimeout(() => {
      character.classList.remove("jump")
    }, 800)
  }
}

end = document.querySelector(".endGame")
console.log(end)

const startGame = () => {
  gameArea.style.visibility = "visible"
  end.style.visibility = "hidden"
  let alive = setInterval(() => {
    const characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    )
    const obstacleLeft = parseInt(
      window.getComputedStyle(obstacle).getPropertyValue("left")
    )

    //630
    if (obstacleLeft < 180 && obstacleLeft > 0 && characterTop >= 100) {
      gameOver()
    }
  }, 10)
}

const gameOver = () => {
  end.style.visibility = "visible"
  gameArea.style.visibility = "hidden"

  clearInterval(alive)
}

//add eventlistener for click and call jump function ----- jump()
document.addEventListener("click", () => {
  jump()
  console.log("click")
})

if (playAgain) {
  playAgain.addEventListener("click", () => {
    startGame()
  })
}

startGame()
