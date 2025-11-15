const pascalCase = (string) => {

    if(string.length === 0) return '';

    return string.split(' ').map((element) => {
        return element[0].toUpperCase() + element.slice(1, element.length);
    }).join('');

};

module.exports = { pascalCase };

//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript