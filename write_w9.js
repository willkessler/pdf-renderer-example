var pdfFillForm = require('pdf-fill-form');
var fs = require('fs');

console.log('Generating the W9...');

pdfFillForm.write("fw9.pdf",
                  {
                    "topmostSubform[0].Page1[0]﻿.f1_1[0]" : "William A Kessler",
                    "topmostSubform[0].Page1[0]﻿.f1_2[0]" : "Dewey, Cheatem, and Howe",
                    "topmostSubform[0].Page1[0].Address[0]﻿.f1_7[0]" : "1944 Eddy St",
                    "topmostSubform[0].Page1[0].Address[0]﻿.f1_8[0]" : "San Francisco, CA, 94115",
                    "topmostSubform[0].Page1[0]﻿.f1_9[0]" : "Sydecar, Inc.",
                    "topmostSubform[0].Page1[0].SSN[0]﻿.f1_11[0]" : "543",
                    "topmostSubform[0].Page1[0].SSN[0]﻿.f1_12[0]" : "95",
                    "topmostSubform[0].Page1[0].SSN[0]﻿.f1_13[0]" : "2123",
                    "topmostSubform[0].Page1[0].FederalClassification[0]﻿.c1_1[0]" : "true",
                    "topmostSubform[0].Page1[0].EmployerID[0]﻿.f1_14[0]" : "83",
                    "topmostSubform[0].Page1[0].EmployerID[0]﻿.f1_15[0]" : "2344223"
                  },
                  { "save": "pdf", 'cores': 4, 'scale': 0.2, 'antialias': false }
                 )
  .then(function(result) {
    fs.writeFile("/tmp/filledOutW9.pdf", result, function(err) {
      if(err) {
	return console.log(err);
      }
      console.log("The file was saved!");
    }); 
  }, function(err) {
    console.log(err);
  });

