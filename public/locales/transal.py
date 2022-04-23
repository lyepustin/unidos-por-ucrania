from deep_translator import GoogleTranslator
to_translate = 'I want to translate this text'

# print (translated)
# outpout -> Ich möchte diesen Text übersetzen


import json, sys
 
# Opening JSON file
f = open('es/common.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)

languages = ['en', 'ru', 'uk']
languages_dict = {
    'en': {},
    'ru': {},
    'uk': {}
}

for key in data:
    print (data[key])
    for language in languages:
        translated = GoogleTranslator(source='es', target=language).translate(data[key])
        temp = languages_dict[language]
        temp.update({key: translated})
        languages_dict[language] = temp
    # print (languages_dict)


for language in languages:
    # Serializing json 
    json_object = json.dumps(languages_dict[language], indent = 4, ensure_ascii=False)
    
    # Writing to sample.json
    with open(f"{language}/common.json", "w", encoding='utf-8') as outfile:
        outfile.write(json_object)