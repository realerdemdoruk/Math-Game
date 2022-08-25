const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["+", "-", "*", "/"]



let score = document.getElementById("score");








document.querySelector("button").addEventListener("click",function(){


    let number1 = numbers[Math.floor(Math.random() * numbers.length)];
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    let number2 = numbers[Math.floor(Math.random() * numbers.length)];
    // console.log("3131")



    document.getElementById("number1").innerHTML = number1
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = number2
    
    // number31 = Math.floor(Math.random() *9)
    // console.log(number31)

deneme()    

})






function deneme(){

    
    if (input.value == (number1 + number2) && symbol == "+") {
        console.log("Doğru bildiniz 1")
        
    } else if (input.value == (number1 - number2) && symbol == "-") {
        console.log("Doğru bildiniz 2")
        
    } else if (input.value == (number1 * number2) && symbol == "*") {
        console.log("Doğru bildiniz 3")
        
    } else if (input.value == (number1 / number2) && symbol == "/") {
        console.log("Doğru bildiniz 4")
        
    } else {
        console.log("Yanlış")
    }
    
    input.value = ""
}

// document.getElementById("number1").innerHTML 
// document.getElementById("symbols").innerHTML 
// document.getElementById("number2").innerHTML 