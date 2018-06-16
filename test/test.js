const assert = require('assert');
const style = require('../src/style');


describe('Тестирование', () => {
  it('#1 - style.bold', () => assert.deepEqual(style.bold, [1, 21]));
  it('#2 - style.blue', () => assert.deepEqual(style.blue, [34, 39]));
  it('#3 - style.blueBright', () => assert.deepEqual(style.blueBright, [94, 39]));
  it('#4 - style.bgBlue', () => assert.deepEqual(style.bgBlue, [44, 49]));
  it('#5 - style.bgBlueBright', () => assert.deepEqual(style.bgBlueBright, [104, 49]));
  it('#6 - style.codeType(1)', () => assert.equal(style.codeType(1), 'open'));
  it('#7 - style.codeType(21)', () => assert.equal(style.codeType(21), 'close'));
  it('#8 - style.code2color(1)', () => assert.equal(style.code2color(1), 'bold'));
  it('#9 - style.code2style(1)', () => assert.equal(style.code2style(1), '\x1b[1m'));
  it('#10 - style.codeOpen2Close(1)', () => assert.equal(style.codeOpen2Close(1), 21));
});
