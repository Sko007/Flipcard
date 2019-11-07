/* Warm up exercise
let headline = document.getElementsByTagName("h1")[0]



function consoleWelt (){
console.log("Hallo Welt");
}


document.addEventListener("click", function(){
    {
        console.log(event);
       return headline.style.color = "blue";

    }
  });*/


//Userstories
//--------------------------------------------------------------------------------------------
//Random Questions
let question_answer =   [
                        {question:"Why am I that good in developing stuff?",
                        answer: "Because I am working Hard!"},

                        {question: "I am very very ultra super great in doing stuff?",
                        answer:"Sometimes if I do stuff correctly"}
                        ];


let answerStore =[];
let questionStore =[];



let textbox = document.getElementById("textarea");



function changeQuestion(){

//creating random question
let randomNumber = Math.floor(Math.random()*2);
let randomQuestion= question_answer[randomNumber].question;
questionStore = []
questionStore.push(randomQuestion);

textbox.innerHTML = randomQuestion;

//find answer to question and push to new Array
 let randomAnswer = question_answer[randomNumber].answer;
 answerStore = []
 answerStore.push(randomAnswer);

    

}

function showAnswer(){
    
//See the answers 
textbox.innerHTML ="Q:" + questionStore +"\n\n"+ "A:" + answerStore;  
answerStore =[];
questionStore =[];

}












  