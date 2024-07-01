const sortAnimal = (animal) => {
    return [...animal].sort((obj1, obj2) => {
        if(obj1.numberOfLegs === obj2.numberOfLegs){
            return obj1.name < obj2.name ? -1 : 1;
        } else {
            return obj1.numberOfLegs - obj2.numberOfLegs;
        };
    });
};

module.exports = { sortAnimal };

//https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
