# Stop gninnipS My sdroW! - 6 kyu
def spin_words(sentence):
    words = sentence.split(' ')
    sentence = ''
    
    for x in range(len(words)):
        if len(words[x])>=5:
            words[x] = words[x][::-1]
        sentence += words[x] + " "
        
    return sentence.strip()