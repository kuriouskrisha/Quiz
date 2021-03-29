function check(){
	var c=0;
	var q1= document.webdesignQuiz.question1.value;
	var q2= document.webdesignQuiz.question2.value;
	var q3= document.webdesignQuiz.question3.value;
	var q4= document.webdesignQuiz.question4.value;
	var q5= document.webdesignQuiz.question5.value;
	var q6= document.webdesignQuiz.question6.value;
	var q7= document.webdesignQuiz.question7.value;
	var q8= document.webdesignQuiz.question8.value;
	var q9= document.webdesignQuiz.question9.value;
	var result= document.getElementById('result');
	var webdesignQuiz= document.getElementById('webdesignQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../index.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

		
	if (q1 == "The program starts"){c++}
	if (q2 == "Backpack"){c++}
	if (q3 == "Blocks Palette"){c++}
	if (q4 == "MIT"){c++}
	if (q5 == "Write a program"){c++}
	if (q6 == "All of the above"){c++}	
	if (q7 == "Hyper Text Markup Language"){c++}
	if (q8 == "Cascading Style Sheets"){c++}
	if (q9 == "World Wide Web"){c++}
	
	webdesignQuiz.style.display = "none"; 
		if(c<=6){
			result.textContent = `Your result is ${c}/9. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/9. Awesome. Keep it up!`;
		}

}
