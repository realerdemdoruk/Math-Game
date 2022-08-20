function getPassword() {

    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const symbols = ["+", "-", "*", "/"]


    let number1 = numbers[Math.floor(Math.random()*numbers.length)];
    let number2 = numbers[Math.floor(Math.random()*numbers.length)];
    let symbol = symbols[Math.floor(Math.random()*symbols.length)];
        
            // console.log(number)



            document.querySelector("button").addEventListener("click" ,function(){

                input = document.getElementById("input")

                console.log(input.value , "sadas")
                // input = Number(input)


                // console.log(typeof(input))

                if(input.value == (number1 + number2))
                {
                    console.log("Doğru bildiniz")
                }
                else{
                    console.log("Yanlış")
                }
            })



    document.getElementById("number1").innerHTML = number1
    document.getElementById("symbols").innerHTML = symbol
    document.getElementById("number2").innerHTML = number2
}


function deneme()
{

}

getPassword();