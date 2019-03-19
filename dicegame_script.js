
var dice=0;
var turn=true;
var global_score1=0;
var global_score2=0;

function rolldice()
{
	if(global_score1<100&&global_score2<100)
	{
		{
            
            dice=Math.floor(Math.random()*6)+1;
			if(turn==true)
			{
		      document.getElementById('score1').innerHTML=dice;
		      global_score1+=dice;
		      document.getElementById('final_score1').innerHTML=global_score1;
		      turn=false;
			}
			else
			{
			   document.getElementById('score2').innerHTML=dice;
		      // alert	();
			   global_score2+=dice;
			   document.getElementById('final_score2').innerHTML=global_score2;
			   turn=true;
			}
		}
		
		// dice=Math.floor(Math.random()*6)+1;
		// console.log(dice);

	}
	else
	{
		if(global_score1>global_score2)
		{
			document.getElementById('winner').innerHTML="<h2 ><center>Player1 is winner</center></h2>"
		}
		else
		{
			document.getElementById('winner').innerHTML="<h2 ><center>Player2 is winner</center></h2>"
		}
	}
}