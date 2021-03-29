function check(){
	var c=0;
	var q1= document.historyQuiz.question1.value;
	var q2= document.historyQuiz.question2.value;
	var q3= document.historyQuiz.question3.value;
	var q4= document.historyQuiz.question4.value;
	var q5= document.historyQuiz.question5.value;
	var q6= document.historyQuiz.question6.value;
	var q7= document.historyQuiz.question7.value;
	var q8= document.historyQuiz.question8.value;
	var q9= document.historyQuiz.question9.value;
	var q10= document.historyQuiz.question10.value;
	var result= document.getElementById('result');
	var historyQuiz= document.getElementById('historyQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../index.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

			
	if (q1 == "Thomas Jefferson"){c++}
	if (q2 == "A peace maker"){c++}
	if (q3 == "195"){c++}
	if (q4 == "Australia"){c++}
	if (q5 == "Stephen Hawking"){c++}
	if (q6 == "Canada"){c++}
	if (q7 == "Montana"){c++}
	if (q8 == "Africa"){c++}
	if (q9 == "Egypt"){c++}
	if (q10 == "50"){c++}
	
	
	historyQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
