/* 

@Function expression and declaration 

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations

*/

// function declaration
function percentageOfWorld (population, value){ 
    return ((value/population) *100);
}

//function expression

const percentageOfWorld2= function (population, value){ 
    return ((value/population)*100);

}


// call the function
const perIndia = percentageOfWorld(80000, 20000);
const perchina= percentageOfWorld2(80000, 20000 );


console.log(perIndia+ '%');
console.log(perIndia);