const hybrid = require('./data/all-hybrid-eclipses.json');
const annular = require('./data/annular-eclipses.json');
const total = require('./data/total-eclipses.json');
const fs = require('fs');

    const reorderEclipseJSON = (json, fileName) => {
    
        let output = [...json];
    
        output.sort((a, b) => {
            return new Date(a.date.slice(0, 7)) - new Date(b.date.slice(0, 7));
        });
    
        output = JSON.stringify(output);
    
        fs.writeFile(fileName, output, (error) => {
            if (error)
            console.error(error)
        });
    
        return output;
    };

const hybridFileName = 'all-hybrid-eclipses.json';
const annularFileName = 'all-annular-eclipses.json';
const totalFileName = 'all-total-eclipses.json';

recorderEclipseJSON()

module.exports = { reorderEclipseJSON }

