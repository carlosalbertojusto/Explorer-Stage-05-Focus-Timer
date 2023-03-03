const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let play = document.querySelector(".play")
let stop = document.querySelector(".stop")
const addMoreTime = document.querySelector(".addTime")
const decreaseTime = document.querySelector(".decreaseTime")
const buttonSoundRain = document.querySelector(".rain")
const buttonSoundTree = document.querySelector(".tree")
const buttonSoundFireplace = document.querySelector(".fireplace")
const buttonSoundCoffeeShop = document.querySelector(".coffeeShop")
const switchButtonLightMode = document.querySelector("#light")
const switchButtonDarkMode = document.querySelector("#dark")
const containerSwitch = document.querySelector(".mode")
let volumeValue = document.querySelector(".volume")

let timerTimeOut
let newMinutes
let newSeconds
let isFocused

let rain = new Audio("./sounds/Chuva.wav")
let tree = new Audio("./sounds/Floresta.wav")
let fireplace = new Audio("./sounds/Lareira.wav")
let coffeeShop = new Audio("./sounds/Cafeteria.wav")

function playTimer() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(--minutes).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    playTimer()
  }, 1000)
}

function stopTimer() {
  clearTimeout(timerTimeOut)
  newMinutes = 25
  newSeconds = 0
  minutesDisplay.textContent = String(newMinutes)
  secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
}

function addMoreMinutes() {
  minutes = Number(minutesDisplay.textContent)
  newMinutes = 5 + minutes
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
}

function decreaseTimer() {
  minutes = Number(minutesDisplay.textContent)
  newMinutes = minutes - 5
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  if (newMinutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, "0")
  }
}

function playSoundRain() {
  rain.play()
}

function stopSoundRain() {
  rain.pause()
}

function playSoundTree() {
  tree.play()
}

function stopSoundTree() {
  tree.pause()
}

function playSoundFireplace() {
  fireplace.play()
}

function stopSoundFireplace() {
  fireplace.pause()
}

function playSoundCoffeeShop() {
  coffeeShop.play()
}

function stopSoundCoffeeShop() {
  coffeeShop.pause()
}

function switchMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  if (html.classList.contains("dark")) {
    switchButtonDarkMode.classList.remove("hide")
    switchButtonLightMode.classList.add("hide")
  } else {
    switchButtonLightMode.classList.remove("hide")
    switchButtonDarkMode.classList.add("hide")
  }
}

play.addEventListener("click", playTimer)
stop.addEventListener("click", stopTimer)
addMoreTime.addEventListener("click", addMoreMinutes)
decreaseTime.addEventListener("click", decreaseTimer)

buttonSoundRain.addEventListener("focus", playSoundRain)
buttonSoundTree.addEventListener("focus", playSoundTree)
buttonSoundFireplace.addEventListener("focus", playSoundFireplace)
buttonSoundCoffeeShop.addEventListener("focus", playSoundCoffeeShop)

buttonSoundRain.addEventListener("blur", stopSoundRain)
buttonSoundTree.addEventListener("blur", stopSoundTree)
buttonSoundFireplace.addEventListener("blur", stopSoundFireplace)
buttonSoundCoffeeShop.addEventListener("blur", stopSoundCoffeeShop)

containerSwitch.addEventListener("click", switchMode)
volumeValue.addEventListener("input", () => {
  rain.volume = volumeValue.value / 100
  tree.volume = volumeValue.value / 100
  fireplace.volume = volumeValue.value / 100
  coffeeShop.volume = volumeValue.value / 100
})
