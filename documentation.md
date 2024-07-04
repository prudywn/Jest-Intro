To do unit testing:
  a)I first created a js file called calculator.js 
  b)Then I created two functions for add and subtract with two params each.
  c)Then I exported the two functions using module.exports and destructuring.
  d)Then I created a calculator.test.js file where I import the functions for testing.
  e)Then I used jest to test the functions. By using test('description of expected result', () => {
    expect(add(1, 4)).toBe(5) --the expected result
  })
  f)Then I repeated the above code for the subtract function
  g)Then I ran the test using npm test.
  h)Add function returns sum of two nos. while Subtract returns the difference.


> jest-intro@1.0.0 test
> jest


 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js

 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js
 PASS  ./reverseString.test.js

 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js

 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js
 PASS  ./shallowObjClone.test.js

 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js
 PASS  ./isPalindrome.test.js

 RUNS  ./calculator.test.js
 RUNS  ./sum.test.js
 RUNS  ./reverseString.test.js
 RUNS  ./shallowObjClone.test.js

 RUNS  ./calculator.test.js
 PASS  ./sum.test.js

 RUNS  ./calculator.test.js
 PASS  ./calculator.test.js

 RUNS  ./calculator.test.js

Snapshots:   0 total
Time:        1.915 s, estimated 2 s
Ran all test suites.