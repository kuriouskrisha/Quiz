function check(){
	var c=0;
	var q1= document.funFactsQuiz.question1.value;
	var q2= document.funFactsQuiz.question2.value;
	var q3= document.funFactsQuiz.question3.value;
	var q4= document.funFactsQuiz.question4.value;
	var q5= document.funFactsQuiz.question5.value;
	var q6= document.funFactsQuiz.question6.value;
	var q7= document.funFactsQuiz.question7.value;
	var q8= document.funFactsQuiz.question8.value;
	var q9= document.funFactsQuiz.question9.value;
	var q10= document.funFactsQuiz.question10.value;
	var result= document.getElementById('result');
	var funFactsQuiz= document.getElementById('funFactsQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../quiz.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

				
	if (q1 == "Nile"){c++}
	if (q2 == "The Amazon"){c++}
	if (q3 == "Europe"){c++}
	if (q4 == "11"){c++}
	if (q5 == "28 days"){c++}
	if (q6 == "Internet"){c++}
	if (q7 == "Marie Curie "){c++}
	if (q8 == "Greenland"){c++}
	if (q9 == "France"){c++}
	if (q10 == "Antarctica"){c++}
	
	funFactsQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
