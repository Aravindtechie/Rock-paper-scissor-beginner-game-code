function fun()
{
	file = document.getElementById("answer2");
	file.innerHTML = "_ROCK_";
 }

function status()
{
	computer= Math.random();
	Score = document.getElementById("Score").innerHTML;
	Score2 = document.getElementById("Score2").innerHTML;

   switch(true)
   {
   	case computer <= 0.33:
    document.getElementById("answer1").innerHTML = "_ROCK_";
    alert("Match Draw !");
   	break;

   	case computer >= 0.66:
   	document.getElementById("answer1").innerHTML = "_PAPER_";
   	alert("Opponent paper caught your rock So, You lose");
    var value0 = Score2;
   	document.getElementById("Score2").innerHTML = ++ value0;

   	break;

   	default:
   	document.getElementById("answer1").innerHTML = "SCISSOR";
   	alert("Your rock smashed the opponent's scissor, You won !");
   	var value = Score;
   	document.getElementById("Score").innerHTML = ++ value;
	
   }

   if (value === 10)
	{
		confirm("Congrats ! You won the match");
	}

	if (value0 === 10)
	{
		confirm("Sorry ! Computer won the match");
	}
}


function fun1()
{
	file = document.getElementById("answer2");
	file.innerHTML = "_PAPER_";	
}

function status1()
{
	computer= Math.random();
	Score = document.getElementById("Score").innerHTML;
	Score2 = document.getElementById("Score2").innerHTML;
   
   switch(true)
   {
   	case computer <= 0.33:
    document.getElementById("answer1").innerHTML = "SCISSOR";
    alert("Opponent scissor teared your paper So, You lose");
    var value1 = Score2;
   	document.getElementById("Score2").innerHTML = ++ value1;
   	break;

   	case computer >= 0.66:
   	document.getElementById("answer1").innerHTML = "_ROCK_";
   	alert("Your paper caught the opponent's rock, You won !");
   	var values = Score;
   	document.getElementById("Score").innerHTML = ++ values;
   	break;

   	default:
   	document.getElementById("answer1").innerHTML = " _PAPER_";
   	alert("Match Draw !");
   }

   if (values === 10)
	{
		confirm("Congrats ! You won the match");
	}

	if (value1 === 10)
	{
		confirm("Sorry ! Computer won the match");
	}

}

function fun2()
{
	file = document.getElementById("answer2");
	file.innerHTML = "SCISSOR";	
}


function status2()
{
	computer= Math.random();
	Score = document.getElementById("Score").innerHTML;
	Score2 = document.getElementById("Score2").innerHTML;
   
   switch(true)
   {
   	case computer <= 0.33:
    document.getElementById("answer1").innerHTML = "_PAPER_";
    alert("Your scissor teared opponent paper, You won !");
    var valuess = Score;
   	document.getElementById("Score").innerHTML = ++ valuess;
   	break;

   	case computer >= 0.66:
   	document.getElementById("answer1").innerHTML = "SCISSOR";
   	alert("Match Draw !");
   	break;

   	default:
   	document.getElementById("answer1").innerHTML = "_ROCK_";
   	alert("Opponent rock broke your scissor So, You lose");
   	var value2 = Score2;
   	document.getElementById("Score2").innerHTML = ++ value2;
   }

   if (valuess === 10)
	{
		confirm("Congrats ! You won the match");
	}

	if (value2 === 10)
	{
		confirm("Sorry ! Computer won the match");
	}
}




	
	






   