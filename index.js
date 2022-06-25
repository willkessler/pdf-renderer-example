var pdfFillForm = require('pdf-fill-form');

var pdfFields = pdfFillForm.readSync('fw9.pdf');
console.log(pdfFields);
