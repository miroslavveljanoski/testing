'use strict';

const expect = chai.expect;

describe('computed properties', () => {
  it('types of tasty treats', () => {
    const wet = 'soup'; // declaring a constant 'wet' with a value of 'soup' which will be used as property name in the obj{}
    const dry = 'bread'; // declaring a constant 'dry' with a value of 'bread' which will be used as property value in the obj{}
    const obj = {
      [wet]: 'wet', // using the constant 'wet' to set the property name 'soup' with a value 'wet'
      dry: dry, // setting a property with a name 'dry' and using the constant 'dry' to setting a property value of 'bread'
    };
    expect(obj.soup).to.eql('wet');
    //this is the same as above
    expect(obj[wet]).to.eql('wet');
    expect(obj.dry).to.eql('bread');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel'; // declaring a constant 'swimming' with a value 'mackerel' which will be used as property value in the obj
    const mackerel = 'swimming'; // declaring a constant 'mackerel' with a value 'swimming' which will be used as property name in the obj
    const inTheSky = 'flying'; // declaring a constant 'inTheSky' with a value 'flying' which will be used as property name in the obj
    const obj = {
      [inTheSky]: 'crane',
      [mackerel]: swimming,
      running: 'cheetah',
    };
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql('cheetah');
    expect(obj[mackerel]).to.eql(swimming);
    //other ways to check the above
    expect(obj.swimming).to.eql(swimming);
    expect(obj.swimming).to.eql('mackerel');
  });
});
