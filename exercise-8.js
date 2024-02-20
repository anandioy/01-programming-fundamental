// // 1. Create a function to convert Excel sheet column title to its corresponding column number.
// // ● Example :
// //           A -> 1
// //           B -> 2
// //           C -> 3
// //           ...
// //           Z -> 26
// //           AA -> 27
// //           AB -> 28
// //           ...
// // ● Example :
// // ○ Input : AB
// // ○ Output : 28

function convertExcel(col){
        
        let count = 0;
        
        for (let i = 0 ; i < col.length; i++) {
            count = count * 26 + (col.charCodeAt(i) - 64);
        }
        //iteration 1, count 0 * 26 + charcodeA 65 -64 (utk 1 char)
        //(0 * 26) + (65 - 64) = 1
        //iteration 2, count 1 * 26 + charcodeB 66-64 (utk dua char)
        //(1 * 26) + (66 - 64) = 28

        return count;
}
console.log(convertExcel("AB"));

console.log("AB".charCodeAt(0));

// 2. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1

function findOnce(nums = []){
    return nums.filter((item) => nums.indexOf(item) === nums.lastIndexOf(item));
}
console.log(findOnce([1,1,2,2,4,6]));

console.log(findOnce([2,2,5,5,7]));
console.log(findOnce([2,2,1]));

// 3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false
 
function isAnagram(str1, str2){
    let checkStr1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join();
    let checkStr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join();
    console.log(checkStr1);
    console.log(checkStr2);
    
    if (checkStr1 === checkStr2)
    return `${str1} and ${str2} are anagrams`;

}
console.log(isAnagram("anagram", "nagaram"));

// 4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps
// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step
// 4 steps; 1 + 1 + 1 + 1; 1 + 2 + 1; 2 + 2; 2 + 1 + 1; 1 + 1 + 2 = 5
// 5 steps: 11111, 122, 221, 212, 1112, 2111, 1121, 1211 = 8 steps
// 6 steps: 111111, 222, 1221, 1122, 1212, 11112, 21111, 2121, 2211, 2112, 11121, 11211, 12111 = 13 steps
// 1, 2, 3, 5, 8, 13

function climbStairs(steps){
    if (steps === 1){
        return 1;
    } else if (steps === 2){
        return 2;
    } else {
        return climbStairs(steps - 2) + climbStairs(steps - 1);
    }
}

console.log(climbStairs(6));



