const wrapper = document.getElementById("wrapper");
const newBtn = document.getElementById("newBtn");
const scoreCount = document.getElementById("scoreCount");
let score = 0;
let totalAnswered = 0;


const questions = [
    {question: "What is the largest planet in our solar system?", correct_answer: "Jupiter", incorrect_Answer: ["Saturn", "Earth", "Mars"]},
    {question: "Which country is known as the Land of the Rising Sun?", correct_answer: "Japan", incorrect_Answer: ["China", "Thailand", "India"]},
    {question: "What is the chemical symbol for gold?", correct_answer: "Au", incorrect_Answer: ["Ag", "Fe", "Pb"]},
    {question: "Which ocean is the largest?", correct_answer: "Pacific Ocean", incorrect_Answer: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]},
    {question: "How many bones are in the average adult human body?", correct_answer: "206", incorrect_Answer: ["201", "210", "215"]},
    {question: "What is the fastest land animal?", correct_answer: "Cheetah", incorrect_Answer: ["Lion", "Tiger", "Leopard"]},
    {question: "What is the capital of Australia?", correct_answer: "Canberra", incorrect_Answer: ["Sydney", "Melbourne", "Brisbane"]},
    {question: "Which building is the tallest in the world?", correct_answer: "Burj Khalifa", incorrect_Answer: ["Shanghai Tower", "Abraj Al-Bait Clock Tower", "One World Trade Center"]}
]

function getRandomQuestion(){
    const random = Math.floor(Math.random() * questions.length);
    const pickedQuestion = questions[random];
    return pickedQuestion;
}

function renderQuestion(randomQuestion){
    const questionContainer = document.createElement("div");
    questionContainer.innerHTML = "";
    const questionText = document.createElement("h1");
    questionText.innerHTML = randomQuestion.question;
    const correctAnswer = document.createElement("button");
    correctAnswer.innerHTML = randomQuestion.correct_answer;
    const incorrectAnswer1 = document.createElement("button");
    incorrectAnswer1.innerHTML = randomQuestion.incorrect_Answer[0];
    const incorrectAnswer2 = document.createElement("button");
    incorrectAnswer2.innerHTML = randomQuestion.incorrect_Answer[1];
    const incorrectAnswer3 = document.createElement("button");
    incorrectAnswer3.innerHTML = randomQuestion.incorrect_Answer[2];
    const text = document.createElement("h2");

    const incorrectAnswers = [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3];
    

    correctAnswer.addEventListener("click", () => {
        text.innerHTML = "You got it right!";
        correctAnswer.disabled = true;
        incorrectAnswers.forEach((button) => {
            button.disabled = true;
        });
        score += 1;
        totalAnswered += 1;
        scoreCount.innerHTML = "Score: " + score + " of " + totalAnswered;
        
    })

    incorrectAnswers.forEach((button) => {
        button.addEventListener("click", () => {
            text.innerHTML = "You got it wrong!";
            correctAnswer.disabled = true;
            incorrectAnswers.forEach((button) => {
              button.disabled = true;
            });
            totalAnswered += 1;
            scoreCount.innerHTML = "Score: " + score + " of " + totalAnswered;
        })
    })
    
    
    
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(correctAnswer);
    questionContainer.appendChild(incorrectAnswer1);
    questionContainer.appendChild(incorrectAnswer2);
    questionContainer.appendChild(incorrectAnswer3);
    questionContainer.appendChild(text);
    wrapper.appendChild(questionContainer);
}

newBtn.addEventListener("click", () => {
    wrapper.innerHTML = "";
    renderQuestion(getRandomQuestion());
})
