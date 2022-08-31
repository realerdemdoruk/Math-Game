let topScore = document.getElementById("topScore");


process();

console.log(adds)

function Game() {
    // deneme();

    var user = document.getElementById("intext2").value;

    countdown(30);

    if (user == adds) {
        document.getElementById("ans").innerHTML = "Well Done! Your Answer is Correct";

        setLocalStorage();
    } else {
        document.getElementById("ans").innerHTML = `Correct Answer ${adds} . The game is restarting`;

        document.querySelector("button").style.display = "none"

        countdown(1);
    }

    var user = document.getElementById("intext2").value = "";

    process();

}

// Countdown
function countdown(time) {

    let timeleft = time;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";

            if (document.getElementById("countdown").innerHTML == "Finished") {

                // Reloads the page
                setInterval(function () {
                    window.location.reload(false);
                }, 2000);
            }
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}

// localStorage
function setLocalStorage() {

    // let scorePrint = document.getElementById("score");

    let scoreValue = score.value = Number(score.value) + 1
    // scorePrint.innerHTML = `Score: ${scoreValue}`


    document.getElementById("print").innerHTML = `Score:${scoreValue}`

    if (scoreValue > localStorage.getItem("highscore")) {

        localStorage.setItem("highscore", scoreValue)
        topScore.innerHTML = `Top Score:${scoreValue}`
    }
}


function process() {

    let n1 = Math.floor(Math.random() * 20 + 1);
    let n2 = Math.floor(Math.random() * 20 + 1);

    document.getElementById("intext").value = n1;
    document.getElementById("intext1").value = n2;
    return adds = n1 + n2;
}


topScore.innerHTML = `Top Score: ${localStorage.getItem("highscore")}`