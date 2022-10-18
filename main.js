const btnTry = document.querySelector(`#btnTry`)
const btnReset = document.querySelector(`#btnReset`)
const inputNumber = document.querySelector(`#inputNumber`)
const screen1 = document.querySelector(`.screen1`)
const screen2 = document.querySelector(`.screen2`)

let xAttempts = 1

let numberRandom = Number(Math.round(Math.random() * 10))




btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)
document.addEventListener(`keydown`, keyDownClick)


function keyDownClick(e) {
    if(e.key == `Enter` && screen1.classList.contains(`hide`)) {
        handleResetClick ()
    }
}

function toggleHide(){
    screen1.classList.toggle(`hide`)
    screen2.classList.toggle(`hide`)
}


function handleTryClick (event) {
event.preventDefault()

if(inputNumber.value == "") {
    alert(`Preecha o campo abaixo!`)

    return
}

if (inputNumber.value < 0) {
    alert(`Digite um número de 0 a 10 !`)
    nputNumber.value = ""

    return
}

if (inputNumber.value > 10) {
    alert(`Digite um número de 0 a 10 !`)
    inputNumber.value = ""

    return
}
if (inputNumber.value == numberRandom ) {
    toggleHide()
    screen2.querySelector(`h2`).innerText = `Você acertou em ${xAttempts} tentativa(s)!`


}

inputNumber.value = ""
xAttempts++

}

function handleResetClick () {
    toggleHide()

    numberRandom = Number(Math.round(Math.random() * 10))

    console.log(numberRandom)

}








































































































// //Variáveis
// const btnTry = document.querySelector("#btnTry")
// const btnReset = document.querySelector("#btnReset")
// const screen1 = document.querySelector(".screen1")
// const screen2 = document.querySelector(".screen2")
// let randomNumber = Math.round(Math.random() * 10)
// let xAttempts = 1

// //Eventos
// btnTry.addEventListener("click", handleTryClick)
// btnReset.addEventListener("click", handleResetClick)
// document.addEventListener("keydown", keyDownClick)

// //Funções
// function handleTryClick (event) {
//     event.preventDefault()

//     const inputNumber = document.querySelector(`#inputNumber`)

//     if(inputNumber.value == "") {
//         alert("Adicione um número!")
//         return
//     }
//     if(inputNumber.value < 0 ) {
//         alert("Somente números de 0 a 10")
//         return
//     }
//     if(inputNumber.value > 10) {
//         alert("Somente números de 0 a 10")
//         return
//     }

//     if (randomNumber == inputNumber.value) {
//         toggleScreen()

//         screen2.querySelector(`h2`).innerText = `Você acertou 
//         em ${xAttempts} tentativas!`
 
//     }
//     inputNumber.value = ""
//     xAttempts++

// }
// function keyDownClick(e) {
//     if(e.key == "Enter" && screen1.classList.contains("hide")) {
//         handleResetClick()
//     }
// }


// function toggleScreen() {
//     screen1.classList.toggle(`hide`)
//     screen2.classList.toggle(`hide`)
// }

// function handleResetClick() {
//     toggleScreen()
//     xAttempts = 1
//     randomNumber = Math.round(Math.random() * 10)

// }




