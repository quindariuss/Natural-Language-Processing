import spacy
nlp = spacy.load("en_core_web_sm")

doc = nlp("Hello, World")

for token in doc:
    print(token.text)
