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
//1 Random Questions

let questions = ["Why am I that good in developing stuff?", "I am very very ultra super great in doing stuff?"]
let textbox = document.getElementById("textarea");
console.log(textbox);

function changeQuestion(){

let randomNumber = Math.floor(Math.random()*2);
console.log(randomNumber);
let randomQuestion= questions[randomNumber];


return textbox.innerHTML = randomQuestion; 
}











  