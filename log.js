const { Console } = require("console")

var log = {
    information: function (information) {
        console.log("İnformation : " + information);
    },
    fault: function (fault) {
        console.log("Fault : " + fault);
    },
};

module.exports = log
