for index in {1..16052}
do
sed -n "${index}p" links.txt | xargs curl | pup 'div.zn-body__paragraph text{}' | recode html..utf-8 > "article_${index}.txt"
done
