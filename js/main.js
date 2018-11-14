// array of questions and answers
var questions = [
	{
		question: "What Cheese is never naturally orange?",
		answer: "cheddar"
	},
	{
		question: "What is the most stolen food in the world?",
		answer: "cheese"
	},
	{
		question: "What president had a block of cheddar cheese weighing 1400 pounds to the White House?",
		answer: "andrew jackson"
	},
	{
		question: "What type of cheese, cheese makers primarily thought it's holes were imperfections?",
		answer: "swiss"
	},
	{
		question: "What cheese  has it's electricity powered through in the region of Albertville, France ?",
		answer: "beaufort"
	},
	{
		question: "What kind of blue cheese is known to frequently cause odd vivid dreams?",
		answer: "stilton"
	},
	{
		question: "What cream cheese is named after a village in upstate New York, not the famous Pennsylvania city?",
		answer: "philadelphia"
	},
	{
		question: "What organ from the cow produces naturally occuring morphine that causes addiction in Cheese?",
		answer: "liver"
	},
	{
		question: "What cheese accounts for over half of the world's cheese consumption?",
		answer: "gouda"
	},
	{
		question: "What anatomical part of the human body can often smell like cheese?",
		answer: "feet"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
