const List = require('../list.js');
const newList = new List('Ben');

// TODO: REVIEW 9:30-10:00 on YOUTUBE (2018-10-17)
//* REQUIRED METHODS
describe('listHello() will...', () => {
  it('return a proper greeting.', () => {
    const input  = newList.listHello();
    const output = `Hi! I'm Ben from CodeFellows.`;
    expect(input).toMatch(output);
  });
});

describe('listLength() will...', () => {
  it('return the correct length of a string', () => {
    const testStr = 'I am Ten!!';
    const input   = newList.listLength(testStr);
    const output  = 10;
    expect(input).toEqual(output);
  });

  it('return the correct length of an array', () => {
    const testArr = [0,1,2,3,4,5,6,7,8,9];
    const input   = newList.listLength(testArr);
    const output  = 10;
    expect(input).toEqual(output);
  });
});

describe('listPush() will...', () => {
  it('add one or more elements to the END of an array and return the new length of the array', () => {
    const input  = List.listPush();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listPop() will...', () => {
  it('remove an element from the END of an array and return the removed element', () => {
    const input  = List.listPop();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listSlice() will...', () => {
  it('return a portion of an array as a new array object, but not include the end of the specified range', () => {
    const input  = List.listSlice();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listMap() will...', () => {
  it('listMap will create a new array with the results of calling a provided function on every element in the calling array.', () => {
    const input  = List.listMap();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listFilter() will...', () => {
  it('create a new array with all elements that pass the test implemented by the provided function.', () => {
    const input  = List.listFilter();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listReduce() will...', () => {
  it('execute a reducer function on each member of the array resulting in a single output value', () => {
    const input  = List.listReduce();
    const output = '';
    expect(input).toEqual(output);
  });
});

//* STRETGH GOALS
xdescribe('listForEach() will...', () => {
  it('execute a provided function once for each array element.', () => {
    const input  = List.listForEach();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listShift() will...', () => {
  it('do something', () => {
    const input  = List.listShift();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listUnshift() will...', () => {
  it('do something', () => {
    const input  = List.listUnshift();
    const output = '';
    expect(input).toEqual(output);
  });
});

xdescribe('listSlice() will...', () => {
  it('do something', () => {
    const input  = List.listSplice();
    const output = '';
    expect(input).toEqual(output);
  });
});