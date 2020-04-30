const questionNumberSpan=document.querySelector(".question-num-value");
const answerTrackerContainer=document.querySelector(".answer-tracker");
const options=document.querySelector(".options").children;
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const op1=document.querySelector(".options1");
const op2=document.querySelector(".options2");
const op3=document.querySelector(".options3");
const op4=document.querySelector(".options4");
let questionIndex;
let index=0;
let myArray=[];
let myarr=[];
let score=0;
const questions=[
{
  q:'What is the return type of function id ?',
  options:['Float','Bool','Dict','int'],
  answer:3
},
{
  q:'Which function can be used on the file to display a dialog for saving a file?',
  options:['Filename=savefilename()','Filename=asksavefilename()','Filename=asksaveasfilename()','No such option in python'],
  answer:2
},
{
  q:'What is the output of print 0.1+0.2==0.3?',
  options:['True','False','Machine dependent','Error'],
  answer:1
},
{
  q:'Which operator is right-associative?',
  options:['*','=','+','%'],
  answer:1
},
{
  q:'Lambda is a function in python?',
  options:['True','False','Lambda is a function in python but cannot use it ','None of these'],
  answer:0
},

]
totalQuestionSpan.innerHTML=questions.length;
function load(){
  questionNumberSpan.innerHTML=index+1;
   question.innerHTML=questions[questionIndex].q;
   op1.innerHTML=questions[questionIndex].options[0];
   op2.innerHTML=questions[questionIndex].options[1];
   op3.innerHTML=questions[questionIndex].options[2];
   op4.innerHTML=questions[questionIndex].options[3];
   index++;
}

function check(element){
  if(element.id==questions[questionIndex].answer){
    element.classList.add("correct");
    updateAnswerTracker("correct");
    score++;
    console.log("score" +score)
  }else{
    element.classList.add("wrong");
    updateAnswerTracker("wrong");
  }
  disabledOptions();
}
function disabledOptions(){
  for(let i=0;i<options.length;i++){
    options[i].classList.add("disabled");
    if(options[i].id==questions[questionIndex].answer){
      options[i].classList.add("correct");
    }
}
}
function enableOptions(){
  for(let i=0;i<options.length;i++){
    options[i].classList.remove("disabled","correct","wrong");
 }
}
function next(){
  enableOptions();
  randomQuestion();
}
function randomQuestion(){
  let randomNumber=Math.floor(Math.random()*questions.length);
  let hitDuplicate=0;
  if(index==questions.length) {
    console.log("quiz over");
  }
  else{
    if(myArray.length>0){
      for (let i = 0; i< myArray.length; i++) {
          if(myArray[i]==randomNumber){
            hitDuplicate=1;
            break;

          }
      }
      if(hitDuplicate==1){
        randomQuestion();
      }
      else{
        questionIndex=randomNumber;
        load();
        myarr.push(questionIndex);
      }
    }
    if(myArray.length==0){
        questionIndex=randomNumber;
        load();
        myarr.push(questionIndex);
    }
    myArray.push(randomNumber);
  }
}
function answerTracker(){
  for(let i=0;i<questions.length;i++){
    const div=document.createElement("div")
    answerTrackerContainer.appendChild(div);
  }
}
function updateAnswerTracker(classNam){
  answerTrackerContainer.children[index-1].classList.add(classNam);
}
window.onload=function(){
  randomQuestion();
  answerTracker();
}
