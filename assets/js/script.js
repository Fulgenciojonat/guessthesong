
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



	
	
	for (i = 0; i < stage; i++) {

		if (i < 4){
	
  		let formHtml =
	   
	      '<form id="formko">' +
	      '<hr class="row">' +
	      '<h3 class="question">' + questions[i]['q'] + "<br>"+
	      '<h3 class="question">' + questions[i]['song'] + "<br>"+
	      '<label>Answer </label><input type="textbox" name="choices" value="" id ="answer">' +
	      '<hr class="row">' +
	      '<span id="result"></span>' +
	      '<span class="nav">' +
	      '<button type="button" id="submit" value="submit">submit</button>' +
	      '<button type="#"  id="next">exit</button>' +
	      '</span></form>';
	
	      $("#questions").html(formHtml);
	   }else{
	   	let formHtml =
	   
	      '<form id="formko">' +
	      '<hr class="row">' +
	      '<h3 class="question">' + questions[i]['q'] + "<br>"+
	      '<h3 class="question">' + questions[i]['song'] + "<br>"+
	      '<h4 class="question">' + questions[i]['a'] + "<br>"+
	      '<hr class="row">' +
	      '<span id="result"></span>' +
	      '<span class="nav">' +
	      '<button type="#"  id="next">exit</button>' +
	      '</span></form>';
	
	       $("#questions").html(formHtml);
	   }



	     
	     
	}

	$("#submit").on('click', function() {
   
	 // let response = $("input[name=choices]:checked").val();
	 // let response =  $("input:textbox").val();
	 let response =  document.getElementById("answer").value.toLowerCase();

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


