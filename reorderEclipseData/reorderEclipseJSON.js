//const fs = require('fs');

    const reorderEclipseJSON = (json, fileName) => {
    
        let output = [...json];
    
        output.sort((a, b) => {
            return new Date(a.date.slice(0, 7)) - new Date(b.date.slice(0, 7));
        });
    
        // output = JSON.stringify(output);
    
        // fs.writeFile(fileName, output, (error) => {
        //     if (error)
        //     console.error(error)
        // });
    
        return output;
    };

module.exports = { reorderEclipseJSON }

