function sortAnimal(animal) {
    let newArr = [...animal].sort((obj1, obj2) => {
    
        if(obj1.numberOfLegs === obj2.numberOfLegs){
          return obj1.name < obj2.name ? -1 : 1;
        }else{
          return obj1.numberOfLegs - obj2.numberOfLegs
        }
      });
        return newArr;
    }

module.exports = { sortAnimal }
