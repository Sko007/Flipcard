let question_answer =   [
                        {question:"Why am I that good in developing stuff?",
                        answer: "Because I am working Hard!"},

                        {question: "I am very very ultra super great in doing stuff?",
                        answer:"Sometimes if I do stuff correctly"}
                        ];






let question = document.getElementById("1");
let answer = document.getElementById("2");




//creating random question find answers and push into new Array

function changeQuestion(){

    let randomNumber = Math.floor(Math.random()*question_answer.length );

        // random question

    let randomQuestion = question_answer[randomNumber].question;
    question.innerHTML = randomQuestion;

        // random answer
    let randomAnswer = question_answer[randomNumber].answer;
    answer.innerHTMl = randomNumber

    

}
//See the answers and remove existing elements

function showAnswer(){
    
p1.innerHTML ="Q:" + questionStore +"\n\n"+ "A:" + answerStore;  
answerStore =[];
questionStore =[];

}










  