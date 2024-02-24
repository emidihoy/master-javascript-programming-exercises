// Write your function here

function computeAverageLengthOfWords(word1, word2){
   let sum =  word1.length + word2.length
   let average = sum / 2 
   return average
}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);