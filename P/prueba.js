const languageEncoding = require("detect-file-encoding-and-language");

const pathToFile = "datosPrueba.xml"

languageEncoding(pathToFile).then(fileInfo => console.log(fileInfo));