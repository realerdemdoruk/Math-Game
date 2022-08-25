input = document.getElementById("input");

getRandomSign = () => {
    const signs = ['+', '-', '*', '/'];
    const idx = Math.floor(Math.random() * signs.length);
    return signs[idx];
};

getRandomNumber = () => {
    const numbers =[0,1,2,3,4,5,6,7,8,9]
    const idx = Math.floor(Math.random() * numbers.length);
    return numbers[idx]
};

number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
symbols = document.getElementById("symbols");

document.querySelector("button").addEventListener("click",function(){


    number1.innerHTML = getRandomNumber()
    symbols.innerHTML = getRandomSign()
    number2.innerHTML = getRandomNumber()




deneme(getRandomNumber(),getRandomNumber(),getRandomSign());

console.log(typeof(getRandomNumber()))

})




function deneme(num1, num2, sym){
    
    if (input.value == (num1 + num2) && sym == "+") {
        console.log("Doğru bildiniz 1")
        
    } else if (input.value == (num1 - num2) && sym == "-") {
        console.log("Doğru bildiniz 2")

    } else if (input.value == (num1 * num2) && sym == "*") {
        console.log("Doğru bildiniz 3")

    } else if (input.value == (num1 / num2) && sym == "/") {
        console.log("Doğru bildiniz 4")
        
    } else {
        console.log("Yanlış")
    }
    
    input.value = ""
}