#include <stdio.h> 
#include <stdlib.h>
int main() 
{
	int index; 
	int word_count = 10000;
	char * word = (char*)malloc(sizeof(char) * 40);

	while((scanf("%s",word) != EOF))
	{
		word_count++; 
	}
	char words[word_count][50];
	for (index = 0; index < word_count; index++)
	{
		scanf("%s", words[index]);
	}

	for (index = 0; index < word_count; index++)
	{
		printf("%s\n", words[index]);
	}
}
