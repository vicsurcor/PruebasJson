const requestHTTP = require('./petition');
const fs = require('fs');


const x = async () => {
    let data = await requestHTTP(
      "parkings.pamplona.es",
      "/parkings.xml",
      "GET",
      { accept: "text/xml" }
    );
    
    fs.writeFile('datos.xml', data, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
        } else {
            console.log('File has been written');
        }
    });
};

x();
