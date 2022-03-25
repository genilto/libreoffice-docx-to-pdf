'use strict';

const path = require('path');
const express = require('express');
const fs = require('fs').promises;
const app = express();

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

async function main() {
    const ext = '.pdf'
    const inputPath = path.join(__dirname, '/resources/doc.docx');
    //const outputPath = path.join(__dirname, `/output/doc${ext}`);

    // Read file
    const docxBuf = await fs.readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    
    // Here in done you have pdf file which you can save or transfer in another stream
    return pdfBuf;
    
    // await fsPromisses.writeFile(outputPath, pdfBuf);
    // return outputPath;
}

app.get('/', function (req, res) {

    main()
    .then(function (pdfBuf) {
        console.log("OK");
        
        res.contentType("application/pdf");
        res.send(pdfBuf);

        /*fs.readFile(outputPath, function (err,data){
            res.contentType("application/pdf");
            res.send(data);
        });*/
    })
    .catch(function (err) {
        console.log(`Error converting file: ${err}`);
        res.status(500).send(`Error converting file: ${err}`);
    });
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});