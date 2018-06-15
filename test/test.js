const assert = require('assert');
const style = require('../lib/style');


describe('Тестирование', () => {
  it('#1', () => assert.deepEqual(style.bold, [1, 21]));
  it('#2', () => assert.deepEqual(style.blue, [34, 39]));
  it('#3', () => assert.deepEqual(style.blueBright, [94, 39]));
  it('#4', () => assert.deepEqual(style.bgBlue, [44, 49]));
  it('#5', () => assert.deepEqual(style.bgBlueBright, [104, 49]));
  it('#6', () => assert.equal(style.codeType(1), 'open'));
  it('#7', () => assert.equal(style.codeType(21), 'close'));
  it('#8', () => assert.equal(style.code2color(1), 'bold'));
  it('#9', () => assert.equal(style.code2style(1), '[1m'));
  it('#10', () => assert.equal(style.codeOpen2Close(1), 21));
});
