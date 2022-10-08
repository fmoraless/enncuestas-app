let elQuestionScreen = document.getElementById("questionscreen")
let elUserName = document.getElementById("user_name")
let elWelcomeScr = document.getElementById("welcomescreen")
let elScreenResult = document.getElementById("resultscreen")


function getUser() {
    let username = elUserName.value
    console.log({'username': username})

    if (!username || username === '') {
        alert("Por favor ingrese su nombre")
    } else {
        console.log({'desde ELSE getUser': username})
        elWelcomeScr.style.display = "none"

        seeFirstQuestion()
    }
}

function Encuesta() {
    /*let username =  elUserName.value;*/
    console.log({'desde encuesta': 'estoy en encuesta'})
    this.questions = []
    console.log(this.questions)
    this.counter = 0
    this.indexCurrentQuestion = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }

    this.showCurrentQuestion = function() {
        /*let questionTitle = document.createElement("h2")
        questionTitle.textContent = "pregunta test"
        console.log(questionTitle)
        elQuestionScreen.append(questionTitle)*/


        console.log({'cant preguntas': this.questions.length})
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement()
        }else {
            //elQuestionScreen.classList.add("hidden")
             let elSelectedAnswer = document.querySelector(".answer")
            console.log(elSelectedAnswer)
            elSelectedAnswer.innerHTML = encuesta.counter
            elScreenResult.style.display = "block"
        }

    }


}

function Question(title, answers) {
    this.title = title
    this.answers = answers
    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
            body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        this.answers.push(answer)
    }
    this.getElement = function() {
        let questionNumber = document.createElement("h2")
        questionNumber.textContent = "Responda la siguiente pregunta"
        elQuestionScreen.append(questionNumber)
        let questionTitle = document.createElement("h3")
        questionTitle.textContent = this.title
        elQuestionScreen.append(questionTitle)

        let questionAnswers = document.createElement("ul")
        questionAnswers.classList.add("question__answers")

        this.answers.forEach((answer, index) => {
            let elAnswer = document.createElement("li")
            elAnswer.classList.add("answer")
            elAnswer.textContent = answer
            elAnswer.id = index+1
            elAnswer.addEventListener("click", this.checkAnswer)
            questionAnswers.append(elAnswer)
        })

        elQuestionScreen.append(questionAnswers)
    }
    setTimeout(function() {
        //elQuestionScreen.textContent = ''
        encuesta.indexCurrentQuestion++
        encuesta.showCurrentQuestion()
    }, 1000)
}

let question1 = new Question(
    "En una escala de 1 a 4, evalúe la calidad del servicio",
    ["Pepito", "Pepita", "Pepin", "Pepina"],
)
let question2 = new Question(
    "Lenguaje programación favorito",
    ["Javascript", "Python", "Java", "C++"],
)

let encuesta = new Encuesta()
encuesta.addQuestion(question1)
encuesta.addQuestion(question2)

function seeFirstQuestion() {
    let elWelcomeScr = document.getElementById("welcomescreen")
    elWelcomeScr.style.display = 'none'

    elQuestionScreen.style.display = "block"

    console.log({'desde seeFirstQuestion': 'estoy en seeFirstQuestion'})
    encuesta.showCurrentQuestion()

}

let elComenzarBtn = document.getElementById('btn_comenzar');
elComenzarBtn.addEventListener('click', getUser);
console.log(elComenzarBtn);
