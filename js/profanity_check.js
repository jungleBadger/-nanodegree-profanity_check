/**
 * Created by danielabrao on 11/27/16.
 */
(function () {
    "use strict";

    var fs = require("fs"),
        http = require("http");

    var methods = {
        "checkFileForCurseWords": function (filePath) {
            fs.readFile(filePath, "utf-8", function (err, file) {
                if (err) {
                    console.log(err);
                    return "Error opening the file";
                }
                http.get(["http://www.wdylike.appspot.com/?q=", file].join(""), function (res) {
                    if (res.statusCode !== 200) {
                        return "Error processing text";
                    } else {
                        res.setEncoding("utf-8");
                        var data = "";

                        res.on('data', function (chunk) {
                            data += chunk;
                        });

                        res.on("end", function () {
                            console.log(data);
                        });
                    }
                });
            });
        }
    };

    methods.checkFileForCurseWords("../sample_text.txt");
    module.exports = methods;

}());