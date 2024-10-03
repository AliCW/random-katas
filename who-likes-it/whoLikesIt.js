const likes = (array) => {
    if(array.length === 0) return 'no one likes this';
    if(array.length === 1) return `${array[0]} likes this`;
    if(array.length === 2) return `${array[0]} and ${array[1]} like this`;
    if(array.length === 3) return `${array[0]}, ${array[1]} and ${array[2]} like this`;
    if(array.length >= 4) {
        const others = array.length - 2;
        return `${array[0]}, ${array[1]} and ${others} others like this`;
    };
};

module.exports = { likes };

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript