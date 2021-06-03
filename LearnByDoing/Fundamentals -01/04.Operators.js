/***************************************************************************

@Program : Basic Operators

@problem_Statement : 
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'

******************************************************************************/

let population = 10;
// 1.split into half by Arithmetic  operators 
console.log(population / 2);

// 2.increase population by 1 using increment operator
population++;
console.log(population);

// 3. Comparing my country population with Finland
console.log(population>6)

// 4. comparing my country population with avg country population
console.log(population < 33);

// Describe 
let country = 'India';
let continent = 'Asia';
let language = 'Hindi';

const description = country + ' is in '+ continent +' and its '+ population +
  ' million people speaks '+language;
console.log(description);




// contributed by @_aj7t