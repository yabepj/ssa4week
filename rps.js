

console.log("IM here");
/* prompt the user to enter rock papaer, or scissors
   randomly get computers selection
   display winner or tie
*/


var rpsPrompt =  prompt('Enter rock, paper or scissors', 'rock');
 var rpsValues = ["rock", "paper", "scissors"];
 console.log (rpsValues);
console.log(rpsPrompt);

 var randomSelection = Math.round(Math.random()*3);
  console.log(randomSelection);
  
  var rpsCompare = '';
  var found=false;
 for (i =0; i<=2; i++){
	 console.log('In for loop:  i:  ' + i );
	 if (rpsCompare.equals(rpsValues[i]) ) {
		 found=true;
		 
		 if ((i+1)===randomSelection){
			 console.log(TIE);
		 } // end if 
		 else if ((i+1) === 1 && randomSelection ===2 ){
			      console.log ('You Lose! Computer had paper'); 
		      }
	          
			 
		
	 }
	 
	 
 } // end forloop on rpsPrompp array
  




