#include <stdio.h> 

int main() 
{
	double word_count = 0; 
	char word[50];
	while (scanf("%s", word) != EOF)
	{
		word_count++;
	}
	printf("The word count is: %f",word_count);
}	
