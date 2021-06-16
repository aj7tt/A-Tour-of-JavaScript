/*

@Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

*/


// declare function 1
function describePopulation (country, population){

    //calling  function 2
    const percentagePopulation = percentageOfWorld(population);

    const description = `${country} has ${population} million people, which is about ${percentagePopulation} % of the world`;
    console.log(description);
}

// declare function 2

function percentageOfWorld (population){ 
    return ((80000/population) *100);
}



// call the function 'describePopulation'
  describePopulation('china', 50000);
  describePopulation('Nepal', 24000);

 
