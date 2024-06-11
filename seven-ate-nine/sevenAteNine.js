const hungrySeven = (array) => {

    let check = [...array];

    for(let i = 0; i < array.length; i++) {
        let sevens = 0
        if(array[i] === 7){
            if(array[i + 1] === 7) {
                for(let j = i; j < array.length; j++){
                    sevens++
                    i++
                    if(array[i + 1] !== 7) break;
                }
            }
            if(array[i + 1] === 8 && array[i + 2] === 9){
                if(sevens >= 1){
                    // console.log(sevens)
                    check.splice(i - sevens, sevens + 1)

                    for(let k = 0; k < sevens + 1; k++){ 
                        check.splice(check.length, 0, 7) 
                    }
                    

                    //check.splice(check.length, 0, '7'.repeat(sevens))
                }
                else {
                    check.splice(i, 1);
                    for(let m = i; m < array.length; m++){
                        console.log(m, check[m + 2], check[m + 3], "<==M")
                        if(check[m + 2] === 8 && check[m + 3] === 9) {
                            console.log(check[m], "before")
                            m += 2
                            console.log(check[m], "after")
                            } else {
                            check.splice(m + 2, 0, 7);
                            break;

                        }
                    }

                    console.log(i)
                }
            }

        }
    }
    console.log(check)
    return check;
};

module.exports = { hungrySeven };

//https://www.codewars.com/kata/59e61c577905df540000016b/train/javascript