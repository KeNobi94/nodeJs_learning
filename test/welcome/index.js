var morning = require("./morning"),
    evening = require("./evening");

module.exports = {
    getMorningMessage : function(){ console.log(morning);},
    getEveningMessage : function(){ console.log(evening);}
}