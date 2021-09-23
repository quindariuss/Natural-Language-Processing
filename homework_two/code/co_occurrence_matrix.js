const vocabulary = 
	[
		"is",
		"going",
		"to",
		"today",
		"I",
		"am",
		"NLP",
		"topic",
		"It",
		"rain",
		"not",
		"outside",
		"an",
		"interesting",
		"includes",
		"ML",
		"DL",
		"complete",
		"homework",
	]


/*const sentence = 
	[
		"NLP",
		"is",
		"an",
		"interesting",
		"topic",
	]*/

/*const sentence = 
	[
		"NLP",
		"includes",
		"ML",
		"DL",
		"topics",
		"too",
	]*/
/*const sentence = 
	[
		"I",
		"am",
		"going",
		"to",
		"complete",
		"NLP",
		"homework",
		"today",
	]*/
const sentence = 
	[
		"It",
		"is",
		"going",
		"to",
		"rain",
		"today",
	]
function context (word_one, word_two, context){
let count = 0
var array_occurences = new Array 	
	for(index = 0; index < sentence.length; index ++){
		if (sentence[index] == word_two)
		{
			array_occurences.push(index)
		}
	}
for(index = 0; index < array_occurences.length; index++){
	if (array_occurences[index] + context < sentence.length){
	if (sentence[array_occurences[index] + context] == word_one)
		count++
	}
	if (array_occurences[index] + context - 1 < sentence.length){
	if (sentence[array_occurences[index] + context - 1] == word_one)
		count++
	}
	if (array_occurences[index] + context - 2< sentence.length){
	if (sentence[array_occurences[index] + context - 2] == word_one)
		count++
	}
	if (array_occurences[index] - context > 0){
	if (sentence[array_occurences[index] - context] == word_one)
		count++
	}
	if (array_occurences[index] - context + 1 > 0){
	if (sentence[array_occurences[index] - context + 1] == word_one)
		count++
	}
	if (array_occurences[index] - context + 2> 0){
	if (sentence[array_occurences[index] - context + 2] == word_one)
		count++
	}
	}
return count
}
for (let index = 0; index < sentence.length; index++){
           process.stdout.write(sentence[index] + "&")
}
console.log("\nCo-occurrence matrix\n")
for (let index = 0; index < vocabulary.length; index++){
	process.stdout.write(vocabulary[index] + "&")
	for (let subindex = 0; subindex < sentence.length; subindex++){
process.stdout.write((context(vocabulary[index],sentence[subindex], 3).toString() + "&"))
	}
process.stdout.write("\n")
}
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
//console.log((context(vocabulary[index],sentence[index], 3).toString() + "&"))
