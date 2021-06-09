/***************************************************************************

@Program : coding challenge#3

@problem_Statement : coding challenge#3
  

**************************************************************/
let dolphinsScore1 = 97; 
let dolphinsScore2 = 112;
let dolphinsScore3 =  101;

let koalasScore1 = 10;
let koalasScore2 = 95;
let koalasScore3 =123;

let dolphinAvgScore = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3;
let koalasAvgScore  = (koalasScore1+koalasScore2+koalasScore3)/3;
//console.log(dolphinAvgScore);
//console.log(koalasAvgScore);

//var dolphinWinsTrophy = dolphinAvgScore>koalasAvgScore;
//console.log(dolphinWinsTrophy);

 if(dolphinAvgScore>=100 || koalasAvgScore>=100) 
 {
     if(dolphinAvgScore == koalasAvgScore) 
     {
        console.log('no team wins the trophy'); 
     }
     else if (dolphinAvgScore<koalasAvgScore)  {
         console.log('Winner of comptition is KOalas');
         

     }
     else (dolphinAvgScore> koalasAvgScore)
     {
        console.log('winner of competition is Dolphin');

     }
         
     

 }