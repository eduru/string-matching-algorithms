// Define a function that takes 2 strings. The large one and the patern we're looking for
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, breack out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match,
// increment the count of matches.
// Return the count

function stringSearch(string, pattern) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (pattern[j] !== string[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("akgjfjhuyutomatokajkhgsvkjrtomato", "tomato"));
// Outputs 2
