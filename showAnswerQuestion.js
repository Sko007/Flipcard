let question_answer =   [
                        {question:"Why am I that good in developing stuff?",
                        answer: "Because I am working Hard!"},

                        {question: "I am very very ultra super great in doing stuff?",
                        answer:"Sometimes if I do stuff correctly"}
                        ];


let answerStore =[];
let questionStore =[];



let textbox = document.getElementById("textarea");


//creating random question find answers and push into new Array

function changeQuestion(){

    let randomNumber = Math.floor(Math.random()*2);
    let randomQuestion= question_answer[randomNumber].question;
    questionStore = []
    questionStore.push(randomQuestion);

    textbox.innerHTML = randomQuestion;

    let randomAnswer = question_answer[randomNumber].answer;
    answerStore = []
    answerStore.push(randomAnswer);

    

}
//See the answers and remove existing elements

function showAnswer(){
    
    textbox.innerHTML ="Q:" + questionStore +"\n\n"+ "A:" + answerStore;  
    answerStore =[];
    questionStore =[];

}












  