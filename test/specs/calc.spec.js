(function() {
    'use strict';

    let expect = window.chai.expect;


    describe('math module', function(){

      describe('sum function', function(){

        it('should give the sum when provided two numbers', function(){
          //run the function and get result
          let result = window.calc.sum([1, 1]);

          //assertions:
          expect(result).to.be.a('number');
          expect(result).to.equal(2);
        });

        it('should handle no arguments', function(){
          let result = window.calc.sum();

          expect(result).not.to.be.NaN;
        });

        it('should handle only 1 argument', function(){
          let result = window.calc.sum([10]);

          expect(result).to.be.a('number');
          expect(result).to.equal(10);
        });

        it('should convert strings to numbers for addition', function(){
          let result = window.calc.sum(['5','5']);

          expect(result).to.be.a('number').and.to.equal(10);
        });

        // describe('multiply function', function() {





      });


    });

})();
