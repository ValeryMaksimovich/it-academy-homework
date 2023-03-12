const lint = require('mocha-eslint');
const expect = require('chai');
const Calculator = require('.//Calculator.js');
const assert = require('assert');
const calculator = new Calculator();

it ('Correctly finds the sum of 1 and 3', () => {
    assert.equal(calculator.add(1, 3), 4);
});

it('Correctly finds the sum of -1 and -1', () => {
    assert.equal(calculator.add(-1, -1), -2);
});

it('Correctly finds the sum of 10 and 15', () => {
    assert.equal(calculator.add(10, 15), 25);
});

it('Correctly finds the sum of 2.5 and 3.3', () => {
    assert.equal(calculator.add(2.5, 3.3), 6);
});

it('Correctly finds the multiply of 12 and 12', () => {
    assert.equal(calculator.multiply(12, 12), 144);
});

it('Correctly finds the multiply of 15 and 0', () => {
    assert.equal(calculator.multiply(15, 0), 0);
});

it('Correctly finds the subtraction of 0 and 15', () => {
    assert.equal(calculator.subtraction(0, 15), -15);
});

it('Correctly finds the quotient 10 and 2', () => {
    assert.equal(calculator.divide(10, 2), 5);
});

it('Correctly finds the quotient 10 and 0', () => {
    assert.equal(calculator.divide(10, 0), 0);
});

it('When raising 2 to the 3rd power, the result is 8', () => {
    assert.equal(calculator.exponentiation(2, 3), 8);
});

