
// Find the Missing Number value is upto n

// Method 1, use sorting and normal neighbour compare --------------------------- The total Time complexity is O(n^2) + O(n) ~= O(n^2)
function findMissingNumber(arr, n)
{
    // O(n^2)
    //  [9, 5, 3, 2, 6, 1, 7, 8, 10], n = 10
    arr.sort((a, b)=>a - b);

    // O(n)
    let lastValue = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] - lastValue > 1)
        {
            return arr[i] - 1;
        }
        lastValue = arr[i];
    }
    return n;
}

// Method 2 - Use the Arthematic Sequence Equation -------------------------------- The Time complexity is O(n), no need to do the sorting
// a squence of sum should be (n + 1) * n / 2
// So the missing number would be the difference between the ((n + 1) ^ n / 2)  - sum of input array
function findMissingNumberEx(arr, n)
{
    const sumOfArr = arr.reduce((accummulate, current) => accummulate + current, 0);
    return ((1 + n) * n / 2) - sumOfArr;
} 


let array = [5, 4, 1, 2];
console.log("[5, 4, 1, 2], missing " + findMissingNumber(array, 5));

let array2 =  [9, 5, 3, 2, 6, 1, 7, 8, 10];
console.log("[9, 5, 3, 2, 6, 1, 7, 8, 10], missing " + findMissingNumber(array2, 10));

let array3 = [2, 3, 1, 5];
console.log("[2, 3, 1, 5], missing " + findMissingNumber(array3, 5));

let array4 = [1, 2, 3, 4, 5];
console.log("[1, 2, 3, 4, 5], missing " + findMissingNumber(array4, 6));

console.log();
console.log("--------------------------Method 2 ----------------------------");
console.log("[5, 4, 1, 2], missing " + findMissingNumberEx(array, 5));
console.log("[9, 5, 3, 2, 6, 1, 7, 8, 10], missing " + findMissingNumberEx(array2, 10));
console.log("[2, 3, 1, 5], missing " + findMissingNumberEx(array3, 5));
console.log("[1, 2, 3, 4, 5], missing " + findMissingNumberEx(array4, 6));