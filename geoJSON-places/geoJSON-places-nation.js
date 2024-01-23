const total = require("./data/all-total-eclipses");
const hybrid = require("./data/all-hybrid-eclipses");
const annular = require("./data/all-annular-eclipses");
const { lookUp } = require("geojson-places");
const lookup = require("country-code-lookup");
const iso3166 = require("iso-3166-2");

const findNations = (JSON, index) => {
  let output = [];
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

  output = countryCodes.map((countryCode) => {
    let nationObject = lookup.byIso(countryCode)
    
    return nationObject.country
});

for(let i = 0; i < output.length; i++) {

    let regionObject = iso3166.country(output[i]);
    
    if(regionObject === null) break;

    if(regionObject.sub[regionCodes[i]]) {
        let regionName = regionObject.sub[regionCodes[i]].name;
        regionInfo.push(regionName);
    };
};   

    output = output.map((element, jindex) => {
        if(regionInfo[jindex] === undefined) return;
        return element + "-" + regionInfo[jindex];
    });

    output = [...new Set(output)];
    output = output.filter(item => item !== undefined);

  return output;
};

module.exports = { findNations };
