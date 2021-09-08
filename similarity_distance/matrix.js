sentence_one = "  Spokesman confirms"
sentence_two = "  Spokewoman said"
var Matrix = new Array(sentence_one.length)
for (var index = 0; index < sentence_one.length; index++)
{
	Matrix[index] = new Array(sentence_two.length)
	Matrix[index][0] = sentence_one[index]
}
for (var index = 0; index < sentence_two.length; index++)
{
	Matrix[0][index] = sentence_two[index]
}

for(var index = 1; index < sentence_one.length; index++)
{
	for(var subindex = 1; subindex < sentence_two.length; subindex++)
	{
	let sentence_one_partial, sentence_two_partial
		for(subsubindex = 0; subsubindex < index; subsubindex++)
		{
			sentence_one_partial += sentence_one[subsubindex + 1]
		}
		for(subsubsubindex = 0; subsubsubindex < subindex; subsubsubindex++)
		{
			sentence_two_partial += sentence_two[subsubsubindex + 1]
		}
		console.log({sentence_one_partial,sentence_two_partial})
		Matrix[index][subindex] =  edit_distance(sentence_one_partial, sentence_two_partial)
	}
}
for(var index = 0; index < sentence_one.length; index++)
{
	for(var subindex = 0; subindex < sentence_two.length; subindex++)
	{
		process.stdout.write("&  " + Matrix[index][subindex] + "  ")
	}
	process.stdout.write("\\")
	process.stdout.write("\\")
	process.stdout.write(" \n")
}

function edit_distance(array_one, array_two)
{
	count = 0; 
	for (var index = 0; index < array_one.length; index++) 
	{
		if(array_one[index] != array_two[index])
		{
			count++
		}
	}
	return count;
}

console.log(edit_distance(sentence_one,""))
