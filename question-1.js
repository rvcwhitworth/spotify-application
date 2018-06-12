/**
 * Question 1 --
 * sortByStrings(s,t): Sort the letters in the string s by the order they occur
 * in the string t. You can assume t will not have repetitive characters.
 * For s = "weather" and t = "therapyw", the output should be
 * sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output
 * should be sortByString(s, t) = "oodg".
 */

const sortByString = function(s, t) {
  var characterPositions = {};

  for (let i = 0; i < t.length; i++) {
    characterPositions[t[i]] = i;
  }

  return s
    .split("")
    .sort((a, b) => characterPositions[a] - characterPositions[b])
    .join("");
};

const testCases = [
  {
    expected: "theeraw",
    actual: sortByString("weather", "therapyw")
  },
  {
    expected: "oodg",
    actual: sortByString("good", "odg")
  },
  {
    expected: "tac",
    actual: sortByString("cat", "tac")
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
