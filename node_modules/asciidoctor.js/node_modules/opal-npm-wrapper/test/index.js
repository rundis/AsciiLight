var should = require('chai').should();
var opal = require('../index.js').Opal;

describe("Opal", function() {
   describe(".uid()", function() {
       it("should generate an uid", function(){
         opal.uid().should.be.a('number');
       });
   });
});
