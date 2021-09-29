#include <stdio.h>
#include <stdlib.h>

int main(){
	FILE *fp;
	char ch, file_name[25];
	printf("File name:\t");
	gets(file_name);
	
	fp = fopen(file_name, "r");

	printf("Contents of %s:\n\n\n", file_name);

	while((ch = fgetc(fp)) != EOF)
		printf("%c",ch);
	fclose(fp);
	return 0;
}

const char* readfile(char file_name[25]){
	return "hello world";
}
