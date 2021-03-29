function check(){
	var c=0;
	var q1= document.solarSystemQuiz.question1.value;
	var q2= document.solarSystemQuiz.question2.value;
	var q3= document.solarSystemQuiz.question3.value;
	var q4= document.solarSystemQuiz.question4.value;
	var q5= document.solarSystemQuiz.question5.value;
	var q6= document.solarSystemQuiz.question6.value;
	var q7= document.solarSystemQuiz.question7.value;
	var q8= document.solarSystemQuiz.question8.value;
	var q9= document.solarSystemQuiz.question9.value;
	var q10= document.solarSystemQuiz.question10.value;
	var result= document.getElementById('result');
	var solarSystemQuiz= document.getElementById('solarSystemQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../quiz.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

		
	if (q1 == "Suns gravitational pull"){c++}
	if (q2 == "The Blue planet"){c++}
	if (q3 == "Rocks"){c++}
	if (q4 == "Saturn"){c++}
	if (q5 == "8"){c++}
	if (q6 == "Jupiter"){c++}
	if (q7 == "Saturn"){c++}
	if (q8 == "The Sun"){c++}
	if (q9 == "79"){c++}
	if (q10 == "A Black hole"){c++}
	
	solarSystemQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
