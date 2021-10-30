import spacy
nlp = spacy.load("en_core_web_sm")


text = "I parsed this sentence correctly"
doc = nlp(text)

for token in doc:
    print(token.text, token.pos_, token.dep_,
            token.shape_, token.is_alpha, token.is_stop)

