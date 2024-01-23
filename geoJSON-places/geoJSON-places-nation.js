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

    if(regionObject.sub[regionCodes[i]]) {
        regionName = regionObject.sub[regionCodes[i]].name;
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


// {
//     continent_code: 'EU',
//     country_a2: 'FR',
//     country_a3: 'FRA',
//     region_code: 'FR-LRE',
//     state_code: 'FR-RE'
//   }



    // [
    //     'FR-19',  'FR-07',  'FR-06',   'IT-FI',  'IT-PU',
    //     'HR-17',  'BA-BIH', undefined, 'RS-16',  'RS-18',
    //     'RS-19',  'RS-20',  'BG-05',   'BG-12',  'BG-15',
    //     'BG-15',  'RO-TR',  'BG-18',   'BG-19',  'BG-19',
    //     'RO-CT',  'RO-CT',  'UA-43',   'UA-43',  'UA-43',
    //     'RU-KDA', 'RU-ROS', 'RU-ROS',  'RU-ROS', 'RU-ROS',
    //     'RU-ROS', 'RU-ROS', 'RU-VGG',  'RU-VGG', 'RU-VGG',
    //     'RU-VGG', 'RU-VGG', 'RU-VGG',  'RU-VGG', 'RU-VGG',
    //     'RU-VGG', 'RU-SAR', 'RU-SAR',  'RU-SAR', 'RU-SAR',
    //     'RU-SAR', 'RU-SAR', 'RU-SAM',  'RU-SAM', 'RU-ORE',
    //     'RU-ORE', 'RU-ORE', 'RU-BA',   'RU-BA',  'RU-BA',
    //     'RU-BA',  'RU-BA',  'RU-BA',   'RU-SVE', 'RU-SVE',
    //     'RU-SVE', 'RU-SVE', 'RU-SVE',  'RU-SVE', 'RU-SVE',
    //     'RU-KHM', 'RU-KHM', 'RU-KHM',  'RU-KHM', 'RU-KHM',
    //     'RU-KHM', 'RU-YAN', 'RU-YAN',  'RU-YAN', 'RU-YAN',
    //     'RU-KYA', 'RU-KYA'
    //   ]