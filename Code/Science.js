function check(){
	var c=0;
	var q1= document.scienceQuiz.question1.value;
	var q2= document.scienceQuiz.question2.value;
	var q3= document.scienceQuiz.question3.value;
	var q4= document.scienceQuiz.question4.value;
	var q5= document.scienceQuiz.question5.value;
	var q6= document.scienceQuiz.question6.value;
	var q7= document.scienceQuiz.question7.value;
	var q8= document.scienceQuiz.question8.value;
	var q9= document.scienceQuiz.question9.value;
	var q10= document.scienceQuiz.question10.value;
	var result= document.getElementById('result');
	var scienceQuiz= document.getElementById('scienceQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../quiz.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

		
	if (q1 == "10-20 billion years ago"){c++}
	if (q2 == "Photosynthesis"){c++}
	if (q3 == "All of the above"){c++}
	if (q4 == "Gravity"){c++}
	if (q5 == "206"){c++}
	if (q6 == "Blue"){c++}
	if (q7 == "Christopher Columbus"){c++}
	if (q8 == "Edwin Aldrin"){c++}
	if (q9 == "Hemoglobin"){c++}
	if (q10 == "Lactobacillus"){c++}
	
	scienceQuiz.style.display = "none"; 
		if(c<=7){
			result.textContent = `Your result is ${c}/10. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/10. Awesome. Keep it up!`;
		}

}
