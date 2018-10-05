
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
	    a: 'song2',
	  },
	  { q: 'Guess the Second song',
	    a: 'song3',
	  },
	  { q: 'Guess the Third song',
	    a: 'song1',
	  }
	];

	let choices = [
		{ 
			a: 'song2',
		  	b: 'song1',
		  	c: 'song3'
		},
		{ 
			a: 'song1',
		  	b: 'song2',
		  	c: 'song3'
		},
		{ 
			a: 'song1',
		  	b: 'song2',
		  	c: 'song3'
		}

	];


	for (i = 0; i < stage; i++) {
		// $("#questions").append(questions[i]['q'] + "<br>");


		
	    $("#questions").append(
	      '<form id="' + i + '">' +
	      '<hr class="row">' +
	      '<h3 class="question">' + questions[i]['q'] + "<br>"+
	      '<input type="radio" name="choices" value="">'+ choices[i]['a'] +
	      '<input type="radio" name="choices" value="">'+ choices[i]['b'] +
	      '<input type="radio" name="choices" value="">'+ choices[i]['c'] +
	      '<hr class="row">' +
	      '<span class="nav">' +
	      '<button type="button" class="reset" value="reset">start over</button>' +
	      '<button type="submit" class="next">next</button>' +
	      '</span></form>');

	    // stage++;
	}

}