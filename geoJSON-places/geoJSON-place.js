const total = require("./data/all-total-eclipses");
const hybrid = require("./data/all-hybrid-eclipses");
const annular = require("./data/all-annular-eclipses");
const { lookUp } = require("geojson-places");

//want a list of countries it passes through 

const findContinents = (JSON, index) => {

    const dict = {
        'NA': 'North America',
        'SA': 'South America',
        'EU': 'Europe',
        'AF': 'Africa',
        'AS': 'Asia',
        'OC': 'Oceania',
        'AN': 'Antarctica',
    };

    let output = [];
    const continentCodes = [];

    if(JSON === 'total') {
        total[index].coordinateData.forEach((element) => {
            let continent = lookUp(element.centerCoordinates.latitude, element.centerCoordinates.longitude);
            if(continent === null) {
                return;
            } else
            if(continentCodes.includes(continent.continent_code) === false) {
                continentCodes.push(continent.continent_code);
            };
        });
    } else
    if(JSON === 'annular') {
        annular[index].coordinateData.forEach((element) => {
            let continent = lookUp(element.centerCoordinates.latitude, element.centerCoordinates.longitude);
            if(continent === null) {
                return;
            } else
            if(continentCodes.includes(continent.continent_code) === false) {
                continentCodes.push(continent.continent_code);
            };
        });
    } else
    if (JSON === 'hybrid') {
        hybrid[index].coordinateData.forEach((element) => {
            let continent = lookUp(element.centerCoordinates.latitude, element.centerCoordinates.longitude);
            if(continent === null) {
                return;
            } else
            if(continentCodes.includes(continent.continent_code) === false) {
                continentCodes.push(continent.continent_code);
            };
        });
    };

    output = continentCodes.map((element) => {
        return dict[element];
    });

    return output;

};

module.exports = { findContinents };
