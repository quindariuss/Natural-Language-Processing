#include <stdio.h> 

int main() 
{
	int state;
	double word_count; 
	char character;
	while ((character = getchar()) != EOF)
	{
		if (character == ' ' || character == '\n' || character == '\t')
		{
			state = 1;
		}
		else if (state == 1)	
		{
			state = 0; 
			word_count++;
		}
	}
	printf("The word count is: %f",word_count);
}	
