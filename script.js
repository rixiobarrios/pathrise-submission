// Software Engineering (SWE) Track: Solve the following coding problems one and two. Record a video explaining your solutions and your thought process behind them.

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9)); //=> [0,1]
// console.log(twoSum([3, 2, 4], 6)); //=> [1,2]
// console.log(twoSum([3, 3], 6)); //=> [0,1]

// 2. Palindrome Number
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// function isPalindrome(num) {
//     // convert to string
//     numStr = num.toString();
//     console.log(numStr);
//     // create a character array
//     numSpt = numStr.split('');
//     console.log(numSpt);
//     // reverse it
//     numRev = numSpt.reverse();
//     console.log(numRev);
//     // join in back to a string
//     numJnt = numRev.join('');
//     console.log(numJnt);
//     // use conditional with 'loose equality' or two equal signs which performs type coercion before making any comparison
//     if (num == numJnt) {
//         // results of logic
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome(121)); //=> true
// console.log(isPalindrome(-121)); //=> false
// console.log(isPalindrome(10)); //=> false

// Another solution

// function isPalindrome(num) {
//     // method chaining with loose equality
//     return num == num.toString().split('').reverse().join('');
// }

// console.log(isPalindrome(121)); //=> true
// console.log(isPalindrome(-121)); //=> false
// console.log(isPalindrome(10)); //=> false
