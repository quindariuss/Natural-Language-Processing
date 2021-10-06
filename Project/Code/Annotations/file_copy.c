#include <stdio.h>

int main() 
{
	FILE * file; 
	int term_count = 0;
	char word_one[50];
	file = fopen("hello.txt", "r");
	if (file == NULL)
	{
		perror("Error opening file");
	}
	char word[50];
	while((fscanf(file, "%s", word)) != EOF)
	{
	term_count++;
	}
	printf(" Document has %i words.\n",term_count);
	fclose(file);
	file = fopen("hello.txt", "r");
	char words[term_count][50];
	int index; 
	for (index = 0; index < term_count; index++)
	{
		fscanf(file, "%s",words[index]);
	}
	for (index = 0; index < term_count; index++)
	{
		printf("%s\n",words[index]);
	}
	char types[word_count][50];
	for (index = 0; index < word_count;index++)
	{
		while(index < word_count)
		{
			if(words[index] == words[subindex])
			{
				


}
