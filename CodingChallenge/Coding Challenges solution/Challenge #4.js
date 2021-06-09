/***************************************************************************

@Program : coding challenge#4

@problem_Statement : coding challenge#4

**************************************************************/
let bill = 430;
let tip15 = bill* 15/100;
let tip20 = bill* 20/100;

let totalValue15 = bill + tip15;
let totalValue20 = bill + tip20;
 
let result = (bill=>50 && bill<=300)? 
`The bill was ${bill}, the tip was ${tip15}, and the toal value ${totalValue15}`
: `The bill was ${bill}, the tip was ${tip20}, and the toal value ${totalValue20}`;
console.log(result); 