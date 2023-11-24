//! UNFINISHED - MIGHT NEED A COMPLETE RE-WRITE AS THE ALPHA ARRAY DOESNT WORK WITH THE FINAL TEST
    //?these are tests that compare a Upper & lower case os the same character - With & was

const sortMe = (names) => {

    if (names.length <= 1) return names;

    let output = [];

    let dict = {};

    let alpha = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g',
        'H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o',
        'P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']
   
    names.forEach((element, index) => {
        let charIndex = alpha.indexOf(element.charAt(0))
        if(charIndex in dict) { // loop - compare the new and old key values until difference is found
                            //when found - see if higher or lower & assign a decimal .1 accordingly
            for(let i = 0; i < element.length; i++) {
                //let checking = dict[charIndex]

                if(element.charAt(i) !== dict[charIndex].charAt(i)) {
                    let current = element.charAt(i).charCodeAt(0)
                    let checking = dict[charIndex].charAt(i).charCodeAt(0)
                    if(current < checking) {
                        console.log("current is lower")
                        console.log("current", alpha.indexOf(element.charAt(i)))
                        dict[charIndex -= 0.1] = element
                        break;
                    } else {
                        dict[charIndex += 0.1] = element
                        console.log("current is higher")
                        
                    }
                    
                }
            }
        } else {
            dict[charIndex] = element
            output.splice(0, 1, dict)
        }
    })


    let outputObj = output[0]

    let objectKeys = Object.keys(outputObj)
    let returnArr = []
    let sort = []

    objectKeys.forEach((element) => {
        sort.push(Number(element))
    })

    sort = objectKeys.sort((a, b) => {
        return a - b;
    })
    
    for(let j = 0; j < sort.length; j++) {
        for(key in outputObj) {
            if(sort[j] === key) {
                returnArr.push(outputObj[key])
            }
        }
    }

    console.log("return", returnArr)
   
    return Object.values(returnArr)
}

module.exports = { sortMe }

//    https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/javascript
