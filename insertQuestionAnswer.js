questionBox = document.getElementById("input");
answerBox = document.getElementById("input1");
buttonInsert = document.getElementById("button");

//check or insert

function checkFields (){
    if (questionBox.value == "" || answerBox.value == ""){

        alert("Please fill text in Questionfield or Answerfield")
    }
    else{
        const newQuestion = { 
            question: questionBox.value,
            answer: answerBox.value
        };

        console.log(newQuestion)
        question_answer.push(newQuestion);
        console.log(question_answer)
    
       

    }

}