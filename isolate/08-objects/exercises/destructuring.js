'use strict';

const expect = chai.expect;

describe('destructuring', () => {
  it('types of tasty treats', () => {
    const { dry, wet } = {
      wet: 'soup',
      dry: 'bread',
    };
    expect(dry).to.eql('bread');
    expect(wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const hairiest = 'cheetah'; //declaring a constant 'hairiest' with a value 'cheetah' which will be used as property value of 'running' in the obj
    const oceanic = 'swimming'; //declaring a constant 'oceanic' with a value 'swimming' which will be used as property name in the obj with a value 'mackerel'
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest,
    };
    const birdy = 'flying'; // declaring a constant 'birdy' with a value 'flying' which will be used as property name
    obj[birdy] = 'something'; //setting a value 'something' to property name 'flying' using the constant 'birdy' with bracket notation
    const { swimming, flying, running } = obj;
    expect(flying).to.eql('something');
    expect(running).to.eql('cheetah');
    expect(swimming).to.eql('mackerel');
  });
});
