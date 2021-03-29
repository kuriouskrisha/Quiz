function check(){
	var c=0;
	var q1= document.dinosaursQuiz.question1.value;
	var q2= document.dinosaursQuiz.question2.value;
	var q3= document.dinosaursQuiz.question3.value;
	var q4= document.dinosaursQuiz.question4.value;
	var q5= document.dinosaursQuiz.question5.value;
	var q6= document.dinosaursQuiz.question6.value;
	var q7= document.dinosaursQuiz.question7.value;
	var q8= document.dinosaursQuiz.question8.value;
	var result= document.getElementById('result');
	var dinosaursQuiz= document.getElementById('dinosaursQuiz');
  
	var element = document.createElement("a");
	element.setAttribute("type", "button");
	element.setAttribute("name", "btnQuizHomeName");
	element.textContent = 'Click HERE to play again!';
	element.className = 'btnQuizHomeClass';
	element.setAttribute("href", "../index.html");
	var resultsSpan = document.getElementById("resultSpan");
	resultsSpan.appendChild(element);

	if (q1 == "Terrible lizard"){c++}
	if (q2 == "Three"){c++}
	if (q3 == "Velociraptor"){c++}
	if (q4 == "Herbivore"){c++}
	if (q5 == "Brachiosaurus"){c++}
	if (q6 == "Stegosaurus"){c++}
	if (q7 == "Diposaurus"){c++}
	if (q8 == "Velociraptor"){c++}
	
	dinosaursQuiz.style.display = "none"; 
		if(c<=5){
			result.textContent = `Your result is ${c}/8. Please try again!`;
		}else{
			result.textContent = `Your result is ${c}/8. Awesome. Keep it up!`;
		}

}
