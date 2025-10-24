const door = (string) => {
    let out = ''
    let position = 0

    let on = false
    let increase = false
    let obstruct = false
    let pauses = 0
    let reverse = false;


    for(let i = 0; i < string.length; i++){

        if(string[i] === 'P') pauses++
        console.log(on, position, increase, obstruct, string[i])
        if(string[i] === 'O' && on){
            if(out[i - 2] > position){
                increase = true
                on = true
                
                obstruct = !obstruct
                position++
                out += position
                continue
            } 
            else {
                increase = false;
                on = true
                
                obstruct = !obstruct
                position--
                out += position
                continue

            }
        }
        if(string[i] === 'P' && !on && position === 0){ //< set increase
            on = true
            increase = true
            position++
            out += position
            continue;
        }
        if(string[i] === 'P' && !on && position === 5) {
            
            on = true;
            increase = false
            position--
            out += position
            continue
            
        }
        if(string[i] === 'P' && !on && obstruct === true && pauses % 2){ //last test going in here for error
            on = true
            position--;
            out += position
            continue
        }
        if(string[i] === 'P' && !on && obstruct === true && pauses % 2 === 0){ //last test going in here for error
            on = true
            position++;
            out += position
            continue
        }
        if(string[i] === 'P' && !on && obstruct === false && pauses % 2){ //
            on = true
            position++;
            out += position
            continue
        }
        if(string[i] === 'P' && !on && obstruct === false && pauses % 2 === 0){ //
            on = true
            position--;
            out += position
            continue
        }
        if(string[i] === 'P' && on){ //<maintain
            on = false;
            out += position;
            continue
        }
        

        if(on && increase){
            if(position === 5){
                out += position
                on = false;
                continue;
            }
            else {
                position++
                out += position
                continue;

            }
        }
        if(on && !increase){
            if(position === 0){
                out += position
                on = false;
                continue;
            }
            else {
                position--
                out += position
                continue
            }
        }

        if(!on){
            out += position;
            continue;
        }
 
    }

    return out


};

module.exports = { door };


//https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript