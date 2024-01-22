const xml2js = require('xml2js');
const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version to use async/await
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function parseXMLFile(filePath) {
    try {
        const parser = new xml2js.Parser({ attrkey: "ATTR" });
        const xml_string = await readFile(filePath, "utf8");
        
        parser.parseString(xml_string, async function(error, result) {
            if (error) {
                console.error(`Error parsing XML: ${error}`);
            } else {
                const jsonString = JSON.stringify(result, null, 2);
                await writeFile('xml.json', jsonString);
                console.log('JSON file has been written');
            }
        });
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}

parseXMLFile("datos.xml");
