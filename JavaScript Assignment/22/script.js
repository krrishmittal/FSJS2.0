/*22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
const sorted = ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}

// Find the average age
const sum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sum / ages.length;

// Find the range of the ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const absMin = Math.abs(minAge - averageAge);
const absMax = Math.abs(maxAge - averageAge);

console.log("Sorted list: ", sorted)
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Range:", range);
console.log("Absolute difference between min and average:", absMin);
console.log("Absolute difference between max and average:", absMax);
