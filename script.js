let n1 = Math.floor(Math.random()*20+1);
      let n2 = Math.floor(Math.random()*20+1);

      document.getElementById("intext").value = n1;
      document.getElementById("intext1").value = n2;
      let topScore = document.getElementById("topScore");

      let adds= n1 + n2;

      console.log(adds)

      function Game(){
         var user = document.getElementById("intext2").value;


         countdown(30);

         if( user == adds){
            document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";

            var scorePrint = document.getElementById("score");


            
        //     let scoreValue = score.value = Number(score.value) + 1;
        // scorePrint.innerHTML = `Score: ${scoreValue}`;




        // if (scoreValue > localStorage.getItem("highscore")) {

        //     localStorage.setItem("highscore", scoreValue)
        //     scorePrint.innerHTML = `Top Score: ${scoreValue}`
        // }



        let scoreValue = score.value = Number(score.value) + 1
        scorePrint.innerHTML = `Score: ${scoreValue}`


        if (scoreValue > localStorage.getItem("highscore")) {

            localStorage.setItem("highscore", scoreValue)
            topScore.innerHTML = `Top Score: ${scoreValue}`
        }

        
            

            


         }else{
             document.getElementById("ans").innerHTML = "Correct Answer " + adds + " . Try Again";
             countdown(3);
         }

           var user= document.getElementById("intext2").value = "";


      n1 = Math.floor(Math.random()*20+1);
      n2 = Math.floor(Math.random()*20+1);

      document.getElementById("intext").value = n1;	
      document.getElementById("intext1").value = n2;

      adds = n1 + n2;


      }







    // Countdown
      function countdown(e){

          let timeleft = e;
          let downloadTimer = setInterval(function () {
              if (timeleft <= 0) {
                  clearInterval(downloadTimer);
                  document.getElementById("countdown").innerHTML = "Finished";
                  
                  if (document.getElementById("countdown").innerHTML == "Finished") {
                      //   random.style.display = "none";
                      
                      // Reloads the page
                      setInterval(function () {
                          window.location.reload(false);
                        }, 2000);
                    }
                } 
                else {
                    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
                }
                timeleft -= 1;
            }, 1000);
            

        }



      
        topScore.innerHTML = `Top Score: ${localStorage.getItem("highscore")}`