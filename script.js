const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["+", "-", "*", "/"]


let number1 = numbers[Math.floor(Math.random() * numbers.length)];
let symbol = symbols[Math.floor(Math.random() * symbols.length)];
let number2 = numbers[Math.floor(Math.random() * numbers.length)];


document.getElementById("number1").innerHTML = number1
document.getElementById("symbols").innerHTML = symbol
document.getElementById("number2").innerHTML = number2



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





function bakalim() {
    document.getElementById("number1").innerHTML = number1
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = number2
}




document.querySelector("button").addEventListener("click",function(){



    let randomY = Math.floor(Math.random() * 500);
    let randomX = Math.floor(Math.random() * 1100);

    document.getElementById("number1").innerHTML = randomX
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = randomY

    // console.log("3131")


    if (input.value == (number1 + number2) && symbol == "+") {
        console.log("Doğru bildiniz")
        bakalim()
        // wasd()
        localStorage.setItem("Score", score + 1)

        // document.getElementById("number1").innerHTML = wasd()
        // document.getElementById("symbols").innerHTML = wasd()
        // document.getElementById("number2").innerHTML = wasd()



        // document.querySelector("").addEventListener("click",function(){

        // })
        document.getElementById("number1").innerHTML = number1
        document.getElementById("symbols").innerHTML = symbol
        document.getElementById("number2").innerHTML = number2


    } else if (input.value == (number1 - number2) && symbol == "-") {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else if (input.value == (number1 * number2) && symbol == "*") {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else if (input.value == (number1 / number2) && symbol == "/") {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score", score + 1)
        // bakalim()
        // wasd()
    } else {
        console.log("Yanlış")
    }

    input.value = ""

})