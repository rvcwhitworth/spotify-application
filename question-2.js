/**
 * Question 2 -- decodeString(s): Given an encoded string, return its corresponding
 * decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square
 * brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
 *
 * For s = "4[ab]", the output should be decodeString(s) = "abababab"
 * For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
 *
 */

const decodeString = function(s) {
  var decoded = "";
  var { count, encodedSubstring } = getCountAndSubstring(s);

  if (encodedSubstring.includes("[")) {
    let { leadingCharacters, startPosition } = getLeadingCharactersAndPosition(
      encodedSubstring
    );
    let { trailingCharacters, endPosition } = getTrailingCharactersAndPosition(
      encodedSubstring
    );

    decodedNestedString = decodeString(
      encodedSubstring.substring(startPosition, endPosition + 1)
    );

    encodedSubstring =
      leadingCharacters + decodedNestedString + trailingCharacters;
  }

  while (count-- > 0) {
    decoded += encodedSubstring;
  }

  return decoded;
};

const getCountAndSubstring = function(encodedString) {
  var count = "";
  var position = 0;
  while (encodedString[position] !== "[") {
    count += encodedString[position];
    position++;
  }

  return {
    count: parseInt(count),
    encodedSubstring: encodedString.substring(
      position + 1,
      encodedString.length - 1
    )
  };
};

const getLeadingCharactersAndPosition = function(encodedString) {
  let startPosition = 0;
  let leadingCharacters = "";
  while (isNaN(parseInt(encodedString[startPosition]))) {
    leadingCharacters += encodedString[startPosition];
    startPosition++;
  }

  return { startPosition, leadingCharacters };
};

const getTrailingCharactersAndPosition = function(encodedString) {
  let endPosition = encodedString.length - 1;
  let trailingCharacters = "";
  while (encodedString[endPosition] !== "]") {
    trailingCharacters = encodedString[endPosition] + trailingCharacters;
    endPosition--;
  }

  return { endPosition, trailingCharacters };
};

const testCases = [
  {
    expected: "abababab",
    actual: decodeString("4[ab]")
  },
  {
    expected: "baaabaaa",
    actual: decodeString("2[b3[a]]")
  },
  {
    expected: "",
    actual: decodeString("3[]")
  },
  {
    expected: "aaaaaa",
    actual: decodeString("2[3[a]]")
  },
  {
    expected: "aabaab",
    actual: decodeString("2[2[a]b]")
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
