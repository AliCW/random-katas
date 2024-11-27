const encrypt = (string,number) => {
    let num = "";

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
            if(encryptIndex > cypher1.length - 1){
                encryptIndex = encryptIndex - cypher1.length;
            }
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher1[encryptIndex].toUpperCase();
            } else {
                return cypher1[encryptIndex];
            }
        }

        else if(cypher2.includes(element.toLowerCase())){
            encryptIndex = cypher2.indexOf(element.toLowerCase()) + Number(num[1]);
            console.log(element, encryptIndex);
            if(encryptIndex > cypher2.length - 1){
                encryptIndex = encryptIndex - cypher2.length;
            }
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher2[encryptIndex].toUpperCase();
            } else {
                return cypher2[encryptIndex];
            }
        }

        else if(cypher3.includes(element.toLowerCase())){
            encryptIndex = cypher3.indexOf(element.toLowerCase()) + Number(num[2]);
            if(encryptIndex > cypher3.length - 1){
                encryptIndex = encryptIndex - cypher3.length;
            }
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                if(cypher3[encryptIndex] === ",") return "<";
                if(cypher3[encryptIndex] === ".") return ">";
                return cypher3[encryptIndex].toUpperCase();
            } else {
                return cypher3[encryptIndex];
            }
        }

        return element;
    }).join('');

};

const decrypt = (string,number) => {
    let num = "";

    if(number.toString().length === 2){
        num += "0" + number.toString();
    } else if (number.toString().length === 1){
        num += "00" + number.toString();
    } else {
        num = number.toString();
    }
    const cypher1 = "poiuytrewq";
    const cypher2 = "lkjhgfdsa";
    const cypher3 = ".,mnbvcxz";

     return string.split('').map((element) => {

        if(cypher1.includes(element.toLowerCase())){
            encryptIndex = cypher1.indexOf(element.toLowerCase()) + Number(num[0]);
            if(encryptIndex > cypher1.length - 1){
                encryptIndex = encryptIndex - cypher1.length;
            }
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher1[encryptIndex].toUpperCase();
            } else {
                return cypher1[encryptIndex];
            };
        }

        else if(cypher2.includes(element.toLowerCase())){
            encryptIndex = cypher2.indexOf(element.toLowerCase()) + Number(num[1]);
            console.log(element, encryptIndex);
            if(encryptIndex > cypher2.length - 1){
                encryptIndex = encryptIndex - cypher2.length;
            }
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                return cypher2[encryptIndex].toUpperCase();
            } else {
                return cypher2[encryptIndex];
            };
        }

        else if(cypher3.includes(element.toLowerCase())){
            encryptIndex = cypher3.indexOf(element.toLowerCase()) + Number(num[2]);
            if(encryptIndex > cypher3.length - 1){
                encryptIndex = encryptIndex - cypher3.length;
            };
            if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90){
                if(cypher3[encryptIndex] === ",") return "<";
                if(cypher3[encryptIndex] === ".") return ">";
                return cypher3[encryptIndex].toUpperCase();
            } else {
                return cypher3[encryptIndex];
            };
        }

        else if(element === ">"){
            encryptIndex = Number(num[2]);
            return cypher3[encryptIndex].toUpperCase();
        }
        else if(element === "<"){
            encryptIndex = Number(num[2]);
            return cypher3[encryptIndex].toUpperCase();
        };

        return element;
    }).join('');

};

module.exports = { encrypt, decrypt };

//https://www.codewars.com/kata/57f14afa5f2f226d7d0000f4/train/javascript
