
$(document).ready(function(){
	let stage = 1;


	$("#begin").click(function() {
    	$("#main").hide();

  		

    	renderQuestions(stage);
  	});
});
  

const renderQuestions = (stage) => {
	// $("#questions").append('hi');

	let questions = [
	  { q: 'Guess the First song',
	  	choices: ["song2", "song1", "song3"],
	    a: "song2"
	  },
	  { q: 'Guess the Second song',
	  	choices: ["song1", "song2", "song3"],
	    a: "song3"
	  },
	  { q: 'Guess the Third song',
	  	choices: ["song3", "song1", "song2"],
	    a: "song1"
	  }
	];

	// let choices = [
	// 	{ 
	// 		a: 'song2',
	// 	  	b: 'song1',
	// 	  	c: 'song3'
	// 	},
	// 	{ 
	// 		a: 'song1',
	// 	  	b: 'song2',
	// 	  	c: 'song3'
	// 	},
	// 	{ 
	// 		a: 'song1',
	// 	  	b: 'song2',
	// 	  	c: 'song3'
	// 	}

	// ];
	let currentquestion = 0;
	let correctAnswers = 0;
	// let response ="";

	
	
	for (i = 0; i < stage; i++) {
		// $("#questions").append(questions[i]['q'] + "<br>");
		// let response = $("input[name=choices]:checked").val();
		// let x = questions[i]['choices'][0];
		// let y = questions[i]['choices'][1];
		// let z = questions[i]['choices'][2];
		// let input1 = questions[i]['choices'][i]
  		let formHtml =
	   
	      '<form id="formko">' +
	      '<hr class="row">' +
	      '<h3 class="question">' + questions[i]['q'] + "<br>"+
	      '<input type="radio" name="choices" value="'+ questions[i]["choices"][0]+'">'+ questions[i]["choices"][0]+
	      '<input type="radio" name="choices" value="'+ questions[i]["choices"][1]+'">' + questions[i]["choices"][1]+
	      '<input type="radio" name="choices" value="'+ questions[i]["choices"][2]+'">' + questions[i]["choices"][2]+
	      '<hr class="row">' +
	      '<span id="result"></span>' +
	      '<span class="nav">' +
	      '<button type="button" id="submit" value="submit">submit</button>' +
	      '<button type="#"  id="next">next</button>' +
	      '</span></form>';
	
	       $("#questions").append(formHtml);

	     
	     
	}

	$("#submit").on('click', function() {
   
	 let response = $("input[name=choices]:checked").val();
    	if (response == questions[i-1]['a']){	   

	  alert("correct");
	  
	
	 stage++;
	 renderQuestions(stage);
	  	
		}else{
		// $("#nav").append("Incorrect answer");
		 alert("incorrect!");


	};
    });


}


