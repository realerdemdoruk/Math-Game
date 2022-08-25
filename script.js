const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["+", "-", "*", "/"]



let score = document.getElementById("score");

let number1 = numbers[Math.floor(Math.random() * numbers.length)];
let symbol = symbols[Math.floor(Math.random() * symbols.length)];
let number2 = numbers[Math.floor(Math.random() * numbers.length)];

function wasd(){

    document.getElementById("number1").innerHTML = number1
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = number2

}



document.querySelector("button").addEventListener("click", function(){
    
    
    
    // console.log("3131")
    

    
    // wasd();
    
    // document.getElementById("number1").innerHTML = number1
    // document.getElementById("symbols").innerHTML = symbol
    // document.getElementById("number2").innerHTML = number2
    wasd();



  
    
    // number31 = Math.floor(Math.random() *9)
    // console.log(number31)

deneme(number1,number2,symbol)    

})






// function deneme(){

    
//     if (input.value == (number1 + number2) && symbol == "+") {
//         console.log("Doğru bildiniz 1")
        
//     } else if (input.value == (number1 - number2) && symbol == "-") {
//         console.log("Doğru bildiniz 2")
        
//     } else if (input.value == (number1 * number2) && symbol == "*") {
//         console.log("Doğru bildiniz 3")
        
//     } else if (input.value == (number1 / number2) && symbol == "/") {
//         console.log("Doğru bildiniz 4")
        
//     } else {
//         console.log("Yanlış")
//     }
    
//     input.value = ""
// }

// document.getElementById("number1").innerHTML 
// document.getElementById("symbols").innerHTML 
// document.getElementById("number2").innerHTML 







function deneme(num1, num2, sym){

    
    if (input.value == (num1 + num2) && sym == "+") {
        console.log("Doğru bildiniz 1")
        
        wasd();
    } else if (input.value == (num1 - num2) && sym == "-") {
        console.log("Doğru bildiniz 2")
        wasd();
    } else if (input.value == (num1 * num2) && sym == "*") {
        console.log("Doğru bildiniz 3")
        wasd()
    } else if (input.value == (num1 / num2) && sym == "/") {
        console.log("Doğru bildiniz 4")
        
    } else {
        console.log("Yanlış")
    }
    
    input.value = ""
}