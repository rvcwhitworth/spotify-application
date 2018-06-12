/**
 * Question 3 -- changePossibilities(amount,denominations): 
 * Your quirky boss collects rare, old coins. They found out you're a programmer 
 * and asked you to solve something they've been wondering for a long time. 
 *
 * Write a function that, given an amount of money and an array of coin denominations, 
 * computes the number of ways to make the amount of money with coins of the available 
 * denominations. 
 * 
 * Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
 * your program would output 4—the number of ways to make 4¢ with those 
 * denominations: 

 * 1¢, 1¢, 1¢, 1¢
 * 1¢, 1¢, 2¢
 * 1¢, 3¢
 * 2¢, 2¢
 */

const changePossibilities = function(amount, denominations) {
  var possibilities = 0;

  const backTrack = function(runningTotal, currentIndex) {
    if (runningTotal === amount) {
      possibilities++;
      return;
    }

    for (let i = currentIndex; i < denominations.length; i++) {
      if (runningTotal + denominations[i] <= amount) {
        backTrack(runningTotal + denominations[i], i);
      }
    }
  };

  backTrack(0, 0);
  return possibilities;
};

const testCases = [
  {
    expected: 4,
    actual: changePossibilities(4, [1, 2, 3])
  },
  {
    expected: 1,
    actual: changePossibilities(1, [1, 2, 3])
  },
  {
    expected: 0,
    actual: changePossibilities(5, [6])
  }
];

function assert(expected, actual) {
  if (expected === actual) {
    console.log("PASSED");
  } else {
    console.log(`FAILED: Expected ${expected} but got ${actual}`);
  }
}

testCases.forEach(({ expected, actual }) => {
  assert(expected, actual);
});
