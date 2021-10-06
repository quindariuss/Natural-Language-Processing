import spacy
nlp = spacy.load("en_core_web_sm")


text = "It's official: Apple is the first U.S.\public company to reach a $1 trillion market value"

doc = nlp(text)

for token in doc.ents:
    print(token.text, token.label_)
