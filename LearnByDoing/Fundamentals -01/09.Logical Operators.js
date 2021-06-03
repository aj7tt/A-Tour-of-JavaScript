/*****************************************************************************

@Program :  
 Logical Operators
 
@problem_satement : 

1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)

********************************************************************************/
let country = 'India';
let language = 'english';
let population =10;
let isIsland = false;

if(language === "english" && population < 50 && !isIsland){
    console.log(`you should live in ${country} :)`);
}
else {
    console.log (`${country} does not meet your criteria :(`)
}

console.log(`Hello, sarah welcome! to ${country}`)

// contributed by @_aj7t