

console.log("IM here");
/* prompt the user to enter rock papaer, or scissors
   randomly get computers selection
   display winner or tie
*/


var rpsPrompt =  prompt('Enter rock, paper or scissors', 'rock');
 var rpsValues = ["rock", "paper", "scissors"];
 console.log (rpsValues);
console.log("rpsPrompt:  : " + rpsPrompt);

 var randomSelection = Math.round(Math.random()*3);
  console.log(randomSelection);
  
  var rpsCompare = "";
  var found=false;
 for (i =0; i<=2; i++){
	 console.log('In for loop:  rps:  ' + i+1 );
	 rpsCompare=rpsValues[i];
	 console.log("randomValue: "  + rpsCompare);
	 
	 if (rpsCompare===(rpsValues[i]) ) {
		 found=true;
		 
		 if ((i+1)===randomSelection){
			 console.log("TIE");
		 } // end if 
		 else if ((i+1) === 1 && randomSelection ===2 ){
			      console.log ('You Lose! Computer had paper'); 
		      }
	          
			 
		
	 }
	 
	 
 } // end forloop on rpsPrompp array
  

function domPrompt(msg) {
	//crfeate a dive elementFromPoint
	// set content of div element to the msg   
	// append the divew to the body
	// document.body.appendchild(newElement)
	
	var div=document.createElement('div');
	div.innerHTML=msg;
	div.onclick= function(evt){
	};
	
	document.body.appendChild(div);
	}



function domAlert(msg) {
	var div = document.createElement('div');
	div.innerHTML=msg;
	div.setAttribute('class', 'alert_clas');
	document.body.appendChild(div);
	
}

domPrompt("tdimp promptest dom prompt");