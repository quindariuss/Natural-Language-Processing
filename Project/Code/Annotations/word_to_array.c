#include <stdio.h> 

int main() 
{
	int index; 
	int word_count = 0;

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
