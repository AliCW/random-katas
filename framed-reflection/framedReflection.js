const mirror = (string) => {

    let output = ['* '];
    const split = string.split(' ')
    let longestIndex = 0

    split.forEach((element) => {
        if (element.length > longestIndex){
            longestIndex = element.length;
        }
    })

        for(let i = 0; i < split.length; i++){
            let reverse = split[i].split('').reverse().join('')
            if(reverse.length < longestIndex){
                let numberOfSpaces = longestIndex - reverse.length;
                let spaces = []
                for(let y = 0; y < numberOfSpaces; y++){
                    spaces.push(" ")
                }
                reverse = reverse.concat(spaces.join(''))
            }
            for(let j = 0; j < longestIndex; j++){

                if(j === reverse.length -1){
                    output.push(reverse[j])
                    output.push(' *\n* ')
                }
                else {
                    output.push(reverse[j])
                }
            }
        };
    output.pop()
    output.push(" *\n")
    
    let frame = ['*','*','*','*']
    for(let k = 0; k < longestIndex; k++){
        frame.push('*')
    }
    frame = frame.join('')
    output.unshift('\n')
    output.unshift(frame)
    output.push(frame)

    return output.join('')

};

module.exports = { mirror };




//create first loop & reverse first string
//copy reversed string to output

//frame length = largest length word + 2

//https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript