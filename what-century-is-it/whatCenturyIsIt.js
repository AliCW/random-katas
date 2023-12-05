const whatCentury = (year) => {

    let century = Math.floor(year / 100) + 1;
    const units = century % 10; 
    const tens = (century % 100 - units) / 10;
    let suffix = "th";

    if(year.toString().charAt(2) === "0" && year.toString().charAt(3) === "0") {
        century --;
        return century + suffix;
    };

    if (tens === 1) {
      return century + suffix;
    };

    switch (units) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        break;
    };
    
    return century + suffix;
};

module.exports = { whatCentury };
