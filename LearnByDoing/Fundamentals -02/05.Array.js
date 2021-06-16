/*

@Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values

*/

// create an array 
const population = [2000,5000,8000,3000];

//check length of the array
console.log(population.length===4);

function percentageOfWorld (population){ 
    return ((80000/population) *100);
}

// create an array called 'percentages'
// and find the %popilation of all elements from arrays 
const percentage = [
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3])
];

console.log(percentage);