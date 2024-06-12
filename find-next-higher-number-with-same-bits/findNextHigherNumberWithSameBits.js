const nextHigher = (number) => {
    let check = 0;
    const initialZeroes = number.toString(2).replace(/0/g, "").length;
    console.log(number.toString(2), initialZeroes)
    const test = 1023
    console.log(test.toString(2))

    let i = number + 1
    do { 
        check = i.toString(2).replace(/0/g, "").length;
        console.log(i, Number(check), Number(initialZeroes))
        i++;

    //if(Number(check) === Number(initialZeroes)) return i;
    } while (Number(check) !== Number(initialZeroes))

    return i - 1;
 };



let check = 0;
//     let binary = number.toString(2);

//     const initialZeroes = binary.split('').reduce((acc, curr) => {
//         return Number(acc) + Number(curr);
//     })

//     for(let i = number + 1; i < 2147483647; i++){
//         check = i.toString(2).split('').reduce((acc, curr) => {
//             return Number(acc) + Number(curr);
//         });

//         if(Number(check) === Number(initialZeroes)) return i;
//     };
// };

module.exports = { nextHigher };