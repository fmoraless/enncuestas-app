let elQuestionScreen = document.getElementById("questionscreen")
let elUserName = document.getElementById("user_name")


function verEncuesta() {
    let username =  elUserName.value;
    console.log(username)

    if (!username) {
        alert("Por favor ingrese su nombre")
    } else {
        let elWelcomeScr = document.getElementById("welcomescreen")
        console.log(elWelcomeScr)
        elWelcomeScr.style.display = "none"

        elQuestionScreen.style.display = "block"
    }

}

let elComenzarBtn = document.getElementById('btn_comenzar');
elComenzarBtn.addEventListener('click', verEncuesta);
console.log(elComenzarBtn);
