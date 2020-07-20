'use strict';

const expect = chai.expect;

describe('bracket notation', () => {
  it('types of tasty treats', () => {
    const key1 = 'dry'; // declaring a constant key1 with a value 'dry' which will be the property name in the obj {}
    const key2 = 'wet'; // declaring a constant key2 with a value 'wet' which will be the property name in the obj {}
    const obj = {};
    obj[key2] = 'soup'; // giving a value to property 'wet' with a value 'soup' using the constant variable 'key2'
    obj[key1] = 'bread'; // giving a value to property 'dry' with a value 'bread' using the constant variable 'key1'
    expect(obj.wet).to.eql('soup'); // using dot notation property name 'wet' has a value of 'soup'
    expect(obj[key1]).to.eql('bread'); // using bracket notation property name 'dry' has a value od 'bread' using the variable 'key1'
    //this is the same as the above
    expect(obj.dry).to.eql('bread');
  });
  it('a menagerie', () => {
    const motion = 'running'; // declaring a constant 'motion' and giving a value 'running' which will be used as property name
    const fastAnimal = 'cheetah'; // declaring a constant 'fastAnimal' and giving a value of 'cheetah'
    const water = 'swimming'; // declaring a constant 'water' and giving a value 'swimming' which will be used as property name
    const obj = {
      swimming: 'mackerel',
    };
    obj[motion] = fastAnimal; // using the constant 'motion' to get the property name 'running' and using the constant 'fastAnimal' to give a property value 'cheetah'
    obj['flying'] = 'crane'; // setting a property name 'flying' with a property value 'crane'
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql(fastAnimal);
    expect(obj[water]).to.eql('mackerel');
    //this is the same as above
    expect(obj.swimming).to.eql('mackerel');
  });
});
