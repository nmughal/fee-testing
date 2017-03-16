(function() {
    'use strict';

    let expect = window.chai.expect;


    describe('math module', function(){

      describe('sum function', function(){

        it('should be a function', function(){
          expect(window.calc.sum).to.be.a('function');
        });

        it('should give the sum when provided two numbers', function(){
          let result = window.calc.sum([1, 1]);
          expect(result).to.be.a('number').and.to.equal(2);
        });

        it('should handle no arguments', function(){
          let result = window.calc.sum();
          expect(result).not.to.be.NaN;
        });

        it('should handle only 1 argument', function(){
          let result = window.calc.sum([10]);
          expect(result).to.be.a('number').and.to.equal(10);
        });

        it('should convert strings to numbers for addition', function(){
          let result = window.calc.sum(['5','5']);
          expect(result).to.be.a('number').and.to.equal(10);
        });

        it('should let user know input is not a number', function(){
          let result = window.calc.sum('hello');
          expect(result).to.be.undefined;

        });

      describe ('factorial function', function(){

        it('should be a function', function(){
          expect(window.calc.factorial).to.be.a('function');
        });

        it('should give back a factorial', function(){
          let total = window.calc.factorial(5);
          expect(total).to.be.a('number').and.to.equal(120);
        });

        it('should indicate that input is not a number', function(){
          let total = window.calc.factorial('hello');
          expect(total).to.be.NaN;
        });

        it('should handle a input of 0', function(){
          let total = window.calc.factorial(0);
          expect(total).to.be.a('number').and.to.equal(1);
        });

        it('should convert strings to numbers for factorial equation', function() {
          let total = window.calc.factorial('5');
          expect(total).to.be.a('number').and.to.equal(120);
        });


      });


      });

    });

})();
