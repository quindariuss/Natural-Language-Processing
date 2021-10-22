var data = require('./data.json')

for (let index = 0; index < data.length; index++)
{
	console.log("https://foxnews.com"+data[index].url)
}
