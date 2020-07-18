var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  
  it('it can add numbers together', function(){
    calculator.previousTotal = 1;    
    calculator.add(4)    
    assert.equal(5, calculator.runningTotal)  
  })

  it('it can subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply two numbers together', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide one number from another', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('it can concatinate miltiple operations together', function(){
    calculator.numberClick(8);
    calculator.numberClick(9);
    assert.equal(89, calculator.runningTotal)
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(8);
    calculator.operatorClick("+");
    calculator.numberClick(9);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal)
  })

  it('It can clear the running total without affecting the calculation', function(){
    calculator.numberClick(8);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal)
  })

});
