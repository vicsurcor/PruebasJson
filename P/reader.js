const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("data.xml", "utf8");

parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        let jsonString = JSON.stringify(result, null, 2);
        fs.writeFileSync('xml.json', jsonString);
    
    }
    else {
        console.log(error);
    }
});
