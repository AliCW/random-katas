const total = require("./data/all-total-eclipses");
const hybrid = require("./data/all-hybrid-eclipses");
const annular = require("./data/all-annular-eclipses");
const { lookUp } = require("geojson-places");
const lookup = require("country-code-lookup");
const iso3166 = require("iso-3166-2");

const findNations = (JSON, index) => {
  let nations = [];
  let countryCodes = [];
  let regionCodes = [];
  let regionInfo = [];

  if (JSON === "total") {
    total[index].coordinateData.forEach((element) => {
      let continent = lookUp(
        element.centerCoordinates.latitude,
        element.centerCoordinates.longitude
      );
      if (continent === null) {
        return;
      } else if (countryCodes.includes(continent.country_a3) === false || countryCodes.includes(continent.region_code) === false) {
        countryCodes.push(continent.country_a3);
        regionCodes.push(continent.state_code);
      }
    });
  } else if (JSON === "annular") {
    annular[index].coordinateData.forEach((element) => {
      let continent = lookUp(
        element.centerCoordinates.latitude,
        element.centerCoordinates.longitude
      );
      if (continent === null) {
        return;
      } else if (countryCodes.includes(continent.country_a3) === false || countryCodes.includes(continent.region_code) === false) {
        countryCodes.push(continent.country_a3);
        regionCodes.push(continent.state_code);
      }
    });
  } else if (JSON === "hybrid") {
    hybrid[index].coordinateData.forEach((element) => {
      let continent = lookUp(
        element.centerCoordinates.latitude,
        element.centerCoordinates.longitude
      );
      if (continent === null) {
        return;
      } else if (countryCodes.includes(continent.country_a3) === false || countryCodes.includes(continent.region_code) === false) {
        countryCodes.push(continent.country_a3);
        regionCodes.push(continent.state_code);
      }
    });
  }

  nations = countryCodes.map((countryCode) => {
    let nationObject = lookup.byIso(countryCode)
    
    return nationObject.country
});

  for(let i = 0; i < nations.length; i++) {

    let regionObject = iso3166.country(nations[i]); //find all regions by country
    
    if(regionObject === null) break;
    else 
    if(regionObject.sub[regionCodes[i]]) {
        let regionName = regionObject.sub[regionCodes[i]].name; //cross reference check - region codes to name
        regionInfo.push(regionObject.name + " - " + regionName);
    }
};   
  
  return [...new Set(regionInfo)];

};

module.exports = { findNations };
