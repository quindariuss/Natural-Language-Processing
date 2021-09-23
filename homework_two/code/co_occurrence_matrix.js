const array_one = 
	[
		"I",
		"like",
		"enjoy",
		"deep",
		"learning",
		"NLP",
		"flying",
		".",
	]

const array_two = 
	[
		"I",
		"like",
		"enjoy",
		"deep",
		"learning",
		"NLP",
		"flying",
		".",
	]


const sentence = 
	[
		"I",
		"like",
		"deep",
		"learning",
		".",
		"I",
		"like",
		"NLP",
		"I",
		"enjoy",
		"flying",
		".",
	]

function context (word_one, word_two, context){
let count = 0
var array_occurences = new Array 	
	for(index = 0; index < sentence.length; index ++){
		if (sentence[index] == word_one)
		{
			array_occurences.push(index)
		}
	}
	console.log({array_occurences})
for(index = 0; index < array_occurences.length; index++){
	if (sentence[array_occurences[index] + 1] == word_two)
		count++
}
return count
}

console.log(context("I","like", 1))

