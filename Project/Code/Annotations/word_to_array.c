#include <stdio.h> 
#include <stdlib.h>

 int main(int argc, char *argv[])
 {
 	int index;
 	int word_count = 5;
 	char words[word_count][45];

 	for (index = 0; index < word_count; index++)
 	{
 		scanf("%s", words[index]);
 	}

 	for (index = 0; index < word_count; index++)
 	{
 		printf("%s\n", words[index]);
 	}
 }
