/*

1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is

*/

// function ercentageOfWorld
function percentageOfWorld (population){ 
    return ((800/population)*100);
}

// populations array
const populations = [120, 120, 132, 83];


// create new array 
const percentages2 = [];

//cal %population and store it into NEW  array with
for( var i = 0; i <populations.length; i++){ 
 
    const perc1 = percentageOfWorld(populations[i]);
    //push into new array 
    percentages2.push(perc1);
}


// create new array 
const percentages3 = [];

// cal %population and store it into NEW array 
let j=0; //initialization
while( j<populations.length)        //condition 
{ 
    const perc2= percentageOfWorld(populations[j]);
    percentages3.push(perc2);
    j++; //increment

}


console.log(populations);
console.log(percentages2);
console.log(percentages3);