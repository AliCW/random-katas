const spot = (string1, string2) => {
    const out = [];
    string1.split('').forEach((element, index) => {
        if(element !== string2[index]) out.push(index);
    });

    return out;
};

module.exports = { spot };

//https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript