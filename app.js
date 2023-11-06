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
        mesaj.textContent = "Lütfen bir sayı giriniz."
    } else if (tahmin == random) {
        body.style.backgroundColor = "green"
        mesaj.textContent = "Tebrikler Bildiniz👏"
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
            tahmin > random ? mesaj.textContent = "Azalt 👇" : mesaj.textContent = "Arttır 👆"
        } else {
            mesaj.textContent = "Oyunu kaybettiniz 😢"
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
    mesaj.textContent = "Yeni Oyun Başlıyor..."
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        check.click()
    }
})

check.addEventListener("click", () => {
    let tahminSayi = input.value
    if(tahminSayi < 1 || tahminSayi > 20) {
        mesaj.textContent = "Geçersiz bir sayı girdiniz. Lütfen 1 ile 20 arasında bir sayı giriniz"
        score++
    }
})

