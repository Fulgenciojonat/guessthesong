let stage = 1;

let questions = [
{ q: 'Guess the First song',
song: ['<audio controls><source src="./assets/song/song1.mp3" type="audio/mpeg"></audio>'],
a: "oops i did it again"
},
{ q: 'Guess the Second song',
song: ['<audio controls><source src="./assets/song/song2.mp3" type="audio/mpeg"></audio>'],
a: "how far i go"
},
{ q: 'Guess the Third song',
song: ['<audio controls><source src="./assets/song/song3.mp3" type="audio/mpeg"></audio>'],
a: "a million dreams"
},
{ q: 'Guess the Fourth song',
song: ['<audio controls><source src="./assets/song/song4.mp3" type="audio/mpeg"></audio>'],
a: "wonderwall"
},
{ q: 'Game Over!',
song: ['You win'],
a: "Game by Jonathan | 2018"
}
];


$(document).ready(function(){

	$("#begin").click(function() {
		$("#main").hide();


		renderQuestions(stage);

	});
});



const renderQuestions = (stage) => {
	// $("#questions").append('hi');
	
	
	for (i = 0; i < stage; i++) {

		if (i < 4){

			let formHtml =

			'<form id="formko">' +
			'<hr class="row">' +
			'<h3 class="question">' + questions[i]['q'] + "<br>"+
			'<h3 class="question">' + questions[i]['song'] + "<br>"+
			'<div class="form-group"><label>Answer </label><input type="textbox" name="choices" value="" id ="answer"></div>' +
			'<hr class="row">' +
			'<button type="button" id="submit" value="submit" class ="btn">submit</button>' +
			'<button type="#"  id="next" class="btn">exit</button>' +
			'</form>';

			$("#questions").html(formHtml);
		}else{
			let formHtml =

			'<form id="formko">' +
			'<hr class="row">' +
			'<h3 class="question">' + questions[i]['q'] + "<br>"+
			'<h3 class="question">' + questions[i]['song'] + "<br>"+
			'<h4 class="question">' + questions[i]['a'] + "<br>"+
			'<hr class="row">' +
			'<button type="#"  id="next">exit</button>' +
			'</form>';

			$("#questions").html(formHtml);
		}







	}
	let attempt = 0;

	$("#submit").on('click', function() {

		// let response =  document.getElementById("answer").value.toLowerCase();
		let response = $("#answer").val().toLowerCase();
		
		if (checkAns(response)){
			$("#correctAns").modal();
			stage++;
			renderQuestions(stage);	
			attempt = 0;
			$(".hint").html("");
		}else{
			$("#incorrectAns").modal();
			$("#answer").val("");
			attempt += 1;
			if (attempt == 3 && stage == 1) {
				$(".hint").html("Hint: Never do it again");	
			}else if (attempt == 3 && stage == 2) {	
				$(".hint").html("Hint: Queen of the jungle");

			}else if (attempt == 3 && stage == 3) {
				$(".hint").html("Hint: Everyone wants");

			}else if (attempt == 3 && stage == 4) {
				$(".hint").html("Hint: The Great Wall");

			}

		}


	});

	

}


const checkAns = (response) => {

	if (response == questions[i-1]['a']){	   
		return true;
	}else{
		return false;
	};


}




