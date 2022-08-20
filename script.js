function getPassword() {

    // We set a random password
    // const numbers = "0123456789";
    // let passwordLength = 16;
    // let password = ' ';




    const numbers = [0,1,2,3,4,5,6,7,8,9]




    // numbers.forEach(number => {

        // });
        
        
        var number1 = numbers[Math.floor(Math.random()*numbers.length)];
        var number2 = numbers[Math.floor(Math.random()*numbers.length)];
        
            // console.log(number)



    // for (let i = 0; i < 1; i++) {
    //     let randomNumber = Math.floor(Math.random() * numbers.length);
    //     password += numbers.substring(randomNumber, randomNumber + 1)
    // }

    document.getElementById("number1").innerHTML = number1

    // document.getElementById("number1").innerHTML = password
    document.getElementById("number2").innerHTML = number2
}


getPassword();