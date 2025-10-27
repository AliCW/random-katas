const door = (string) => {
    let out = ''
    
    let position = 0
    let pauses = 0

    let on = false
    let increase = false
    let obstruct = false

    for(let i = 0; i < string.length; i++){

        if(string[i] === 'P') pauses++;

        if(string[i] === 'O' && on){
            if(out[i - 2] > position){
                position++;
                increase = true;
            } 
            else {
                position--;
                increase = false;
            };
            on = true;
            obstruct = !obstruct;
            out += position;
            continue;
        };
        if(string[i] === 'P' && !on){ 
            if(position === 0){
                increase = true;
                position++;
                on = true;
                out += position;
                continue;
            }
            if(position === 5){
                increase = false;
                position--;
                on = true;
                out += position;
                continue;

            }
        };
        if(string[i] === 'P' && !on && obstruct){
            if(pauses % 2){
                position--;
                
            } else {
                position++;
            };
            on = true;
            out += position;
            continue;
        };
        if(string[i] === 'P' && !on && !obstruct){ 
            if(pauses % 2){
                position++;
            } else {
                position--;
            }
            on = true;
            out += position;
            continue;
        };

        if(string[i] === 'P' && on){
            on = false;
            out += position;
            continue;
        };
        

        if(on && increase){
            if(position === 5){
                on = false;
            }
            else {
                position++;
            };
            out += position;
            continue;
        };
        if(on && !increase){
            if(position === 0){
                on = false;
            }
            else {
                position--
            };
            out += position;
            continue;
        };

        if(!on){
            out += position;
            continue;
        };
 
    };

    return out;
};

module.exports = { door };


//https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript