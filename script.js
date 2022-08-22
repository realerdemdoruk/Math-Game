



//  const setQuery = (e) => {
//     if(e.keyCode == "13")
//     getResult(input.value)
// }



// function getRandom() {

    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const symbols = ["+", "-", "*", "/"]


    let number1 = numbers[Math.floor(Math.random()*numbers.length)];

    let symbol = symbols[Math.floor(Math.random()*symbols.length)];
        
    let number2 = numbers[Math.floor(Math.random()*numbers.length)];


    document.getElementById("number1").innerHTML = number1
document.getElementById("symbols").innerHTML = symbol
document.getElementById("number2").innerHTML = number2

   

    document.body.onkeydown = function(e){
        if(e.keyCode == 32){
// document.querySelector("button").addEventListener("click" ,function(){


    input = document.getElementById("input")

    console.log(input.value , "sadas")




    score = 0;

    console.log(numbers)

    if(input.value == (number1 + number2) && symbol == "+")
    {
        console.log("Doğru bildiniz")
        bakalim()
        // wasd()
        localStorage.setItem("Score",score + 1)

        document.getElementById("number1").innerHTML = number1
        document.getElementById("symbols").innerHTML = symbol
        document.getElementById("number2").innerHTML = number2



    }
    else if(input.value == (number1 - number2) && symbol == "-")
    {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score",score + 1)
        bakalim()
        // wasd()
    }
    else if(input.value == (number1 * number2) && symbol == "*")
    {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score",score + 1)
        bakalim()
        // wasd()
    }
    else if(input.value == (number1 / number2) && symbol == "/")
    {
        console.log("Doğru bildiniz")
        localStorage.setItem("Score",score + 1)
        bakalim()
        // wasd()
    }
    else
    {
        console.log("Yanlış")
    }

    input.value = ""

    

    console.log(localStorage.getItem("Score"))
// })

document.getElementById("number1").innerHTML = number1
document.getElementById("symbols").innerHTML = symbol
document.getElementById("number2").innerHTML = number2

}








        //your code
    }





    function bakalim(){
        document.getElementById("number1").innerHTML = number1
document.getElementById("symbols").innerHTML = symbol
document.getElementById("number2").innerHTML = number2
    }
// }
// getRandom();


// document.getElementById("input").addEventListener("keypress",setQuery)


// function deneme()
// {
//     return Math.floor(Math.random() * 10);
// }


// function deneme2()
// {
//     const symbols = ["+", "-", "*", "/"]
//     return symbols[Math.floor(Math.random()*symbols.length)];
//     console.log(symbols[Math.floor(Math.random()*symbols.length)])
// }



// document.getElementById("input").addEventListener("keypress",setQuery()) 
   // console.log("31")





//    function wasd(){
//     const numbers = [0,1,2,3,4,5,6,7,8,9]
//     const symbols = ["+", "-", "*", "/"]


//     let number1 = numbers[Math.floor(Math.random()*numbers.length)];

//     let symbol = symbols[Math.floor(Math.random()*symbols.length)];
        
//     let number2 = numbers[Math.floor(Math.random()*numbers.length)];
//    }



//    class erdem{

//  numbers = [0,1,2,3,4,5,6,7,8,9]
// symbols = ["+", "-", "*", "/"]


//     number1 = numbers[Math.floor(Math.random()*numbers.length)];

//   symbol = symbols[Math.floor(Math.random()*symbols.length)];
        
//  number2 = numbers[Math.floor(Math.random()*numbers.length)];

//    }




//    erdem.adim