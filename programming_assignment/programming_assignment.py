import spacy
from sklearn.feature_extraction.text import TfidfVectorizer,CountVectorizer
import pandas as pd
import os 

spacy = spacy.load("en_core_web_md")
# Pipeline 
spacy.add_pipe("sentencizer")
nlp.add_pipe("lemmatizer", config=config)

# Creating Arrays of the data
os.chdir("data/cnn")

article = []
for file in os.listdir():
    new_file = open(file, "r",encoding='windows-1252')
    article.append(
            """
            %s
            """ % (new_file.read())
            )
    new_file.close()

# Example of Vocab 
doc = spacy(article[0])
doc2 = spacy(article[3])
print("Vocabulary in document 0: " , len(doc))

# Seeing similarities in documents 

print("The similarity of two documents:",doc.similarity(doc2))

# Showing Linguistic Annotations for key words of the document

for ent in doc.ents:
    print(ent.text,"\n\t", ent.label_)

# Vectors 

print(doc.vector)

# 
training_data = []
test_data = []

for index in range(30):
   trainingdata.append(article[index])

for index in range(30,10):
   test_data.append(article[index])
count_vec = CountVectorizer(analyzer= 'word', stop_words='english')
tfidfvectorizer = TfidfVectorizer(analyzer='word',stop_words= 'english')
count_wm = count_vec.fit_transform(train)
tfidf_wm = tfidfvectorizer.fit_transform(train)
count_tokens = count_vectorizer.get_feature_names()
tfidf_tokens = tfidfvectorizer.get_feature_names()
tf_countvect = pd.DataFrame(data = count_wm.toarray(),index = ['Document One','Document 2'],columns = count_tokens)
tf_tfidfvect = pd.DataFrame(data = tfidf_wm.toarray(),index = ['Document One','Document 2'],columns = tfidf_tokens)
print("\nTF\n")
print(tf_countvect)
print("\nTF-IDF\n")
print(tf_tfidfvect)
