for index in {0..1500}
do
	curl "https://www.foxnews.com/api/article-search?searchBy=categories&values=fox-news%2Fpolitics&size=${30}&from=$((index * 30 + 1))" > data.json
	node index.js
done
