/*

@Arrow function
Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3

*/


// function declaration
function percentageOfWorld (population, value){ 
    return ((value/population) *100);
}

//function expression
function percentageOfWorld2 (population, value){ 
    return ((value/population)*100);
}


//arrow function
const percentageOfWorld3 = population => (population/80000)*100;


// call all the functions
const perNepal=percentageOfWorld3(20000);
const perIndia = percentageOfWorld(80000, 40000);
const perchina= percentageOfWorld2(80000, 20000 );

// print out
console.log(perNepal, perIndia, perchina);