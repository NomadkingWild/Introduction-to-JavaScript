/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 9;
if (votingAge > 18){
    console.log("true")
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let nz = 3;
let ep = 5;
if(nz >= ep){
    let nz = 2;
}
console.log(nz);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number(1991));



//Task d: Write a function to multiply a*b 
function multiply(a, b) {
    return a*b;
}
console.log(multiply(4, 6));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const num2 =7;
function times(num1, num2){
    return  num1*num2+" is my age in dog years";
}
console.log(times(1,7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
function percentOf(percent, whole){
    return percent/100*whole;
}
function yearsToMonths(years){
    let month = 1/12;
    return years/month;
}
function feedDog(age,weight){
 if(age >= 1){
     if(weight <= 5){
      //dogs up to 5 lbs
      return percentOf(5, weight);
     }
     if(weight>= 6 && weight <= 10){
        // new block 6 to 10
        return percentOf(4, weight);
     }
     if(weight>= 11 && weight <= 15){
         //  new block 11 to 15
         return percentOf(3, weight);
     }
     if(weight > 15){
         // new block greater than 15
         return percentOf(2, weight);
     }
 }
 if(yearsToMonths(age) >=2 && yearsToMonths(age) <= 4){
     return percentOf(10,age);
 }
 if(yearsToMonths(age) >= 4 && yearsToMonths(age) <= 7){
    return percentOf(5,age);
 }
if(yearsToMonths(age) <= 12){
    return percentOf(4,age);
}
}
console.log(feedDog(15,1));

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let userChoice = prompt("Do you choose Jan, Ken or Pon?");
let computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "jan";
}else if(computerChoice <= 0.67 ){
    computerChoice = "ken";
}
else{
    computerChoice = "pon";
}
let compare = function(choice1,choice2){
    if(choice1 === choice2){
        return "Tie Match!";
    }
    if(choice1==="jan"){
        if(choice2==="pon"){
            return "jan wins";
        }
        else{
            return "ken wins";
        }
    }
    if(choice1==="ken"){
        if(choice2==="jan"){
            return "ken wins";
        }
        else{
            return "pon wins";
        }
    }
    if(choice1==="pon"){
        if(choice2==="jan"){
            return "jan wins";
        }
        else{
            return "pon wins";
        }
    }
}
console.log((userChoice,computerChoice));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kilometers = parseInt(prompt(" input kilometers:"));
const miles = kilometers/ 1.6;
console.log(miles + "Miles");




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feet = parseInt(prompt("How many Feet"));
const cm = feet*30.84;
console.log(cm +"cm");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
 function annoyingSong(){
     let bottles;
     let bottlesLeft;
     for (i=99; i>=1; i--){
        if (i == 1) {
        bottles =  "bottle";
        bottlesLeft = "No bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall!";
    } 
    console.log(i+ " " + bottles + " of beer on the wall,");
    console.log(i+ " " + bottles + " of beer,");
    console.log("Take one down, pass it around,");
    console.log(bottlesLeft);
    } 
}

console.log(annoyingSong());




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function getGrade(percent) {
    if (percent >= 90) {
        return 'A';
    }
    if (percent >= 80) {
        return 'B';
    }
    if (percent >= 70) {
        return 'C';
    }
    if (percent >= 60) {
        return 'D';
    }
    return 'F';
}

console.log(getGrade(90)); // A
console.log(getGrade(81)); // B
console.log(getGrade(72)); // C
console.log(getGrade(63)); // D
console.log(getGrade(54)); // F
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

