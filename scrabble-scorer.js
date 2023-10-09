// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	 word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = (input.question(`Let's play some scrabble!\n\n Enter a word to score: `));
   return word;
};

let simpleScorer = function (word)
{
   let score = 0;
   word.split(', ');
   for(let i = 0; i < word.length; i++)
   {
      score++;
   }
   return score;
};

//console.log(simpleScorer("hello"));

let vowelBonusScorer = function (word)
{
   word = word.toLowerCase();
   let score = 0;
   word.split('');
   let vowelCheck = false;
   if (word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u'))
   {
      vowelCheck = true;
   }

   for(let i = 0; i < word.length; i++)
   {
      if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u')
      {
         score += 3;
      }
      else if (word[i] === 'y' && !vowelCheck)
      {
         score += 3;
      }
      else
      {
         score++;
      }
   }
   return score;
};

//console.log(vowelBonusScorer("hello"));


let oldObject = 
{
   name : "Scrabbel ",
   description : "The traditional scoring algorithim. ",
   //scorerFunction : oldScrabbleScorer()
};

//console.log(oldObject.name);

let simpleObject = 
{
   name : "Simple score ",
   description : "Each letter is worth 1 point. ",
   //scorerFunction : simpleScorer()
};

let vowelObject = 
{
   name : "Bonus vowels ",
   description : "Vowels are worth 3 pts,\nconstants are worth 1 pt.",
   //scorerFunction : vowelBonusScorer()
};

oldObject.scorerFunction = oldScrabbleScorer;

simpleObject.scorerFunction = simpleScorer;

vowelObject.scorerFunction = vowelBonusScorer;

let scrabbleScorer;

const scoringAlgorithms = [simpleObject, vowelObject, oldObject];

function scorerPrompt(objectArr) 
{
   let object;
   let result = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses Scrabble point system\nEnter 0, 1, or 2: `);
   if(result === '0')
   {
      object = objectArr[0];
   }
   else if (result === '1')
   {
      object = objectArr[1];
   }
   else if (result === '2')
   {
      object = objectArr[2];
   }
   /*
   else
   {
      input.question("Please enter a valid input of: 0, 1, or 2 ");
      return scorerPrompt(objectArr);
   }
   */
   return object;
}

//console.log(scorerPrompt(scoringAlgorithms));




function transform() {};

let newPointStructure;

function runProgram() {
   let word = initialPrompt();
   let object = scorerPrompt(scoringAlgorithms);
   let score = object.scorerFunction(word);
   console.log(`Score for '${word}' is: ${score}. `);
   
}
runProgram();
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
