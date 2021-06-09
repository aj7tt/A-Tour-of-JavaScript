/***************************************************************************

@Program : coding challenge#

@problem_Statement : coding challenge#
 
BMI(kg/m) = mass/height**2 = mass/(height*height)

**************************************************************/
// coding challeneg #01

var massOfMark = 78;
var massOfJohn = 92;

var heightOfMark= 1.69;
var heightOfJohn = 1.95;

let markBMI =  massOfMark/heightOfMark**2;

let johnBMI = massOfJohn/heightOfJohn**2;

let markHighrBMI = markBMI>johnBMI;

console.log(markHighrBMI);

// coding challenge #02

if(markHighrBMI== 1) {
    console.log( `Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
}
else {
    console.log( `John's BMI ${johnkBMI} is higher than Mark's ${MarkBMI}!`);

}


