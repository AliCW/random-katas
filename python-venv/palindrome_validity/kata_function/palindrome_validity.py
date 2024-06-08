import re

def palindrome_validity(string):

    if len(string) <= 1:
        return True
      
    if string[::-1].lower() == string.lower():
        return True
    
    filtered = re.sub("[^A-Za-z0-9]", "", string)

    if(filtered[::-1].lower() == filtered.lower()):
        return True 
    
    return False
