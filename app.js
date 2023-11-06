let random = Math.floor((Math.random() * 20) + 1)

console.log(random);

let body = document.querySelector("body")
let check = document.querySelector(".check")
let againButton = document.querySelector(".again")
let number = document.querySelector(".number")
let input = document.querySelector(".guess")
let mesaj = document.querySelector(".msg")
let scoreDOM = document.querySelector(".score")
let score = 10
let topScore = localStorage.getItem("top-score") || 0
document.querySelector(".top-score").textContent = topScore

check.addEventListener("click", () => {
    const tahmin = input.value

    if(!tahmin) {
        mesaj.textContent = "Please enter a number."
    } else if(tahmin < 1 || tahmin > 20 || isNaN(tahmin)) {
        mesaj.textContent = "You have entered an invalid number. Please enter a number between 1 and 20"
    } else if (tahmin == random) {
        body.style.backgroundColor = "green"
        mesaj.textContent = "Congratulations 👏"
        number.textContent = random

        //?top score bölümü

        if(score > topScore) {
            topScore = score
            document.querySelector(".top-score").textContent = topScore
            localStorage.setItem("top-score", topScore)
        }

    } else {
        if(score > 1) {
            score--
            scoreDOM.textContent = score
            tahmin > random ? mesaj.textContent = "Reduce 👇" : mesaj.textContent = "Increase 👆"
        } else {
            mesaj.textContent = "You Lost 😢"
            scoreDOM.textContent = 0
            body.style.backgroundColor = "red"
            number.textContent = random
        }
    }
})

againButton.addEventListener("click", () => {
    body.style.backgroundColor = "gray"
    random = Math.floor((Math.random() * 20) + 1)
    console.log(random);
    number.textContent = "?"
    input.value = ""
    score = 10
    scoreDOM.textContent = 10
    mesaj.textContent = "The New Game Begins..."
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        check.click()
    }
})