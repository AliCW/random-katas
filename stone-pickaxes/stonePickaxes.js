const stonePick = (array) => {

    if(array.length <= 3) return 0;

    let wood = 0;
    let sticks = 0;
    let cobble = 0;

    array.forEach((element) => {
        if(element === "Wood") wood++;
        if(element === "Sticks") sticks++;
        if(element === "Cobblestone") cobble++;
    });

    if(wood > 1) sticks += wood * 4;

    let output = 0;
    for(let i = 0; i < array.length; i++){
        if(sticks <= 1 || cobble <= 2) return output;
        output++
        sticks -= 2;
        cobble -= 3;
    };
};

module.exports = { stonePick };

//https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript


//OLD------------------------------------------------------------------
// const stonePick = (array) => {

//     if(array.length <= 3) return 0;

//     const dict = {};
//     array.forEach((element) => {
//         if (dict[element] !== undefined) dict[element] += 1;
//         else { dict[element] = 1 };
//     });

//     if(dict["Cobblestone"] <= 2) return 0;
//     if(dict["Sticks"] <= 1 || dict["Wood"] === 0) return 0;

//     if(dict["Wood"] > 0) {
//         if(dict["Sticks"] === undefined) dict["Sticks"] = dict["Wood"] * 4;
//         else { dict["Sticks"] += dict["Wood"] * 4 };
//     };

//     let output = 0;
//     for(let i = 0; i < array.length; i++){
//         if(dict["Sticks"] >= 2 && dict["Cobblestone"] >= 3) output++;
//         else { break };
//         dict["Sticks"] -= 2;
//         dict["Cobblestone"] -= 3;
//     };
//     return output;
// };
