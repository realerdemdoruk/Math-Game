const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["+", "-", "*", "/"]


let number1 = numbers[Math.floor(Math.random() * numbers.length)];
let symbol = symbols[Math.floor(Math.random() * symbols.length)];
let number2 = numbers[Math.floor(Math.random() * numbers.length)];


// document.getElementById("number1").innerHTML = number1
// document.getElementById("symbols").innerHTML = symbol
// document.getElementById("number2").innerHTML = number2



// document.body.onkeydown = function (e) {
//     if (e.keyCode == 32) {

//         input = document.getElementById("input")

//         console.log(input.value, "sadas")


//         score = 0;

//         console.log(numbers)

//         if (input.value == (number1 + number2) && symbol == "+") {
//             console.log("Doğru bildiniz")
//             bakalim()
//             // wasd()
//             localStorage.setItem("Score", score + 1)

      
//             document.getElementById("number1").innerHTML = number1
//             document.getElementById("symbols").innerHTML = symbol
//             document.getElementById("number2").innerHTML = number2


//         } else if (input.value == (number1 - number2) && symbol == "-") {
//             console.log("Doğru bildiniz")
//             localStorage.setItem("Score", score + 1)

//         } else if (input.value == (number1 * number2) && symbol == "*") {
//             console.log("Doğru bildiniz")
//             localStorage.setItem("Score", score + 1)

//         } else if (input.value == (number1 / number2) && symbol == "/") {
//             console.log("Doğru bildiniz")
//             localStorage.setItem("Score", score + 1)

//         } else {
//             console.log("Yanlış")
//         }

//         input.value = ""



//         console.log(localStorage.getItem("Score"))
//         // })

//         document.getElementById("number1").innerHTML = number1
//         document.getElementById("symbols").innerHTML = symbol
//         document.getElementById("number2").innerHTML = number2

//     }


//     //your code
// }






document.querySelector("button").addEventListener("click",function(){


    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);

    document.getElementById("number1").innerHTML = randomX
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = randomY

    // console.log("3131")

console.log(randomX, symbol)

// console.log(input.value)
    if (input.value == (randomX + randomY) && symbol == "+") {
        console.log("Doğru bildiniz 1")
        
        // bakalim()
        // wasd()
        localStorage.setItem("Score", score + 1)




    } else if (input.value == (randomX - randomY) && symbol == "-") {
        console.log("Doğru bildiniz 2")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else if (input.value == (randomX * randomY) && symbol == "*") {
        console.log("Doğru bildiniz 3")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else if (input.value == (randomX / randomY) && symbol == "/") {
        console.log("Doğru bildiniz 4")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else {
        console.log("Yanlış")
    }

    input.value = ""

})