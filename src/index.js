'use strict';

const path = require('path');
const fsPromisses = require('fs').promises;

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

const express = require('express'),
    fs = require('fs'),
    app = express();

const ext = '.pdf'
const inputPath = path.join(__dirname, '/resources/proposta.docx');
const outputPath = path.join(__dirname, `/output/proposta${ext}`);

async function main() {
    // Read file
    const docxBuf = await fsPromisses.readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    
    // Here in done you have pdf file which you can save or transfer in another stream
    await fsPromisses.writeFile(outputPath, pdfBuf);

    return outputPath;
}

app.get('/', function (req, res) {

    main()
    .then(function (pathToPdf) {
        console.log(`OK`, pathToPdf);
        
        fs.readFile(outputPath, function (err,data){
            res.contentType("application/pdf");
            res.send(data);
        });
    })
    .catch(function (err) {
        console.log(`Error converting file: ${err}`);
        res.status(500).send(`Error converting file: ${err}`);
    });
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});