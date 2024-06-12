def calc(string):
    cypher = "GADERYPOLUKI"
    answer = ""
    split = list(string)

    for i in range(len(split)):

        if split[i] == cypher[0]:
            answer += cypher[1]
        elif split[i].upper() == cypher[0]:
            answer += cypher[1].lower()
        elif split[i] == cypher[1]:
            answer += cypher[0]
        elif split[i].upper() == cypher[1]:
            answer += cypher[0].lower()

        elif split[i] == cypher[2]:
            answer += cypher[3]
        elif split[i].upper() == cypher[2]:
            answer += cypher[3].lower()
        elif split[i] == cypher[3]:
            answer += cypher[2]
        elif split[i].upper() == cypher[3]:
            answer += cypher[2].lower()      
        
        elif split[i] == cypher[5]:
            answer += cypher[4]
        elif split[i].upper() == cypher[5]:
            answer += cypher[4].lower()    
        elif split[i] == cypher[4]:
            answer += cypher[5]
        elif split[i].upper() == cypher[4]:
            answer += cypher[5].lower()   
        
        elif split[i] == cypher[7]:
            answer += cypher[6]
        elif split[i].upper() == cypher[7]:
            answer += cypher[6].lower()   
        elif split[i] == cypher[6]:
            answer += cypher[7]
        elif split[i].upper() == cypher[6]:
            answer += cypher[7].lower()   
        
        elif split[i] == cypher[9]:
            answer += cypher[8]
        elif split[i].upper() == cypher[9]:
            answer += cypher[8].lower()   
        elif split[i] == cypher[8]:
            answer += cypher[9]
        elif split[i].upper() == cypher[8]:
            answer += cypher[9].lower()   

        elif split[i] == cypher[11]:
            answer += cypher[10]
        elif split[i].upper() == cypher[11]:
            answer += cypher[10].lower()  
        elif split[i] == cypher[10]:
            answer += cypher[11]
        elif split[i].upper() == cypher[10]:
            answer += cypher[11].lower()   
        else:
            answer += split[i]

    return answer

def encode(string):
    return calc(string)

def decode(string):
    return calc(string)

#https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/python