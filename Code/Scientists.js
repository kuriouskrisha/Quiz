function check(){
	var c=0;
	var q1= document.scientistsQuiz.question1.value;
	var q2= document.scientistsQuiz.question2.value;
	var q3= document.scientistsQuiz.question3.value;
	var q4= document.scientistsQuiz.question4.value;
	var q5= document.scientistsQuiz.question5.value;
	var q6= document.scientistsQuiz.question6.value;
	var q7= document.scientistsQuiz.question7.value;
	var q8= document.scientistsQuiz.question8.value;
	var q9= document.scientistsQuiz.question9.value;
	var q10= document.scientistsQuiz.question10.value;
	var result= document.getElementById('result');
	var scientistsQuiz= document.getElementById('scientistsQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../index.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

		
	if (q1 == "Nicolas Copernicus"){c++}
	if (q2 == "Edward Jenner"){c++}
	if (q3 == "Albert Einstein"){c++}
	if (q4 == "Georges Lemaitre"){c++}
	if (q5 == "Benjamin Franklin"){c++}
	if (q6 == "Joseph Priestly"){c++}
	if (q7 == "On Christmas Day"){c++}
	if (q8 == "Antoine Laurent Lavoisier"){c++}
	if (q9 == "Thomas Alva Edison"){c++}
	if (q10 == "Alexander Fleming"){c++}
	
	scientistsQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
