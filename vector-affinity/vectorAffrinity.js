const vectorAffinity = (xs, ys) => {
    let differences = 0;
    let length = 0;
    if(xs.length < ys.length){
        length = ys.length;
    } else {
        length = xs.length;
    };

    for(let i = 0; i < length; i++){
        if(xs[i] !== ys[i]){
            differences++;
        };
    };

    return 1 - differences / length;
};

module.exports = { vectorAffinity };


//https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/javascript