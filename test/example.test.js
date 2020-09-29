// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
   const guess = 5
   const actual = 5
   
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
