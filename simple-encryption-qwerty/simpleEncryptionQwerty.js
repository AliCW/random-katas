const encrypt = (string,number) => {
    let num = ""

    if(number.toString().length === 2){
        num += "0" + number.toString();
    } else if (number.toString().length === 1){
        num += "00" + number.toString();
    } else {
        num = number.toString();
    }
    const cypher1 = "qwertyuiop";
    const cypher2 = "asdfghjkl";
    const cypher3 = "zxcvbnm,.";

     return string.split('').map((element) => {
        if(cypher1.includes(element.toLowerCase())){
            encryptIndex = cypher1.indexOf(element.toLowerCase()) + Number(num[0]);
            if(encryptIndex > cypher1.length){
                encryptIndex = encryptIndex - cypher1.length
            }

            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher1[encryptIndex].toUpperCase()
            } else {
                return cypher1[encryptIndex]
            }
        }
        else if(cypher2.includes(element.toLowerCase())){
            encryptIndex = cypher2.indexOf(element.toLowerCase()) + Number(num[1]);

            if(encryptIndex > cypher2.length){
                encryptIndex = encryptIndex - cypher2.length
            }


            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher2[encryptIndex].toUpperCase()
            } else {
                return cypher2[encryptIndex]
            }


        }
        else if(cypher3.includes(element.toLowerCase())){
            encryptIndex = cypher3.indexOf(element.toLowerCase()) + Number(num[2]);
            if(encryptIndex > cypher3.length){
                encryptIndex = encryptIndex - cypher3.length
            }

            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                if(cypher3[encryptIndex] === ",") return "<"
                if(cypher3[encryptIndex] === ".") return ">"
                return cypher3[encryptIndex].toUpperCase()
            } else {
                return cypher3[encryptIndex]
            }
        }
    }).join('')

};

const decrypt = (string,number) => {
    

};

module.exports = { encrypt, decrypt };

//https://www.codewars.com/kata/57f14afa5f2f226d7d0000f4/train/javascript




//check length of number & add zeroes if one or two digits long


//declare the cyphers as individual lines
// assign cyphers to number - 123, 1=cypher1, 2=cypher2 etc

// declare blank output
//split input string & loop / iterate

//check which cypher current element is in
//find index of current element 
//add assigned number to the index & add that element to output
//if adding the assigned number exceeds the index - do something maths - current number - cypher length = return index