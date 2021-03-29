function check(){
	var c=0;
	var q1= document.animalsQuiz.question1.value;
	var q2= document.animalsQuiz.question2.value;
	var q3= document.animalsQuiz.question3.value;
	var q4= document.animalsQuiz.question4.value;
	var q5= document.animalsQuiz.question5.value;
	var q6= document.animalsQuiz.question6.value;
	var q7= document.animalsQuiz.question7.value;
	var q8= document.animalsQuiz.question8.value;
	var q9= document.animalsQuiz.question9.value;
	var q10= document.animalsQuiz.question10.value;
	var result= document.getElementById('result');
	var animalsQuiz= document.getElementById('animalsQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../index.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

			
	if (q1 == "Sawfish"){c++}
	if (q2 == "All of the above"){c++}
	if (q3 == "All of the above"){c++}
	if (q4 == "3"){c++}
	if (q5 == "Animals that live in water and land"){c++}
	if (q6 == "10"){c++}
	if (q7 == "A Blue Whale"){c++}
	if (q8 == "Its own eggshell"){c++}
	if (q9 == "8"){c++}
	if (q10 == "Bamboo"){c++}
	
	animalsQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
