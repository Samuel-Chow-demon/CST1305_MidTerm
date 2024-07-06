
// Array of Integers return combination index

// The Total Time Complexity is O(n^2)
function returnIndexOfCombination(arr, target)
{
    // [1, 5, 2, 7], target 8
    // O(n)
    for (let i = 0; i < arr.length; i++)
    {
        // Skip if the value already larger than target
        if (arr[i] > target)
        {
            continue;
        }
        else
        {
            // O(n)
            const pairIdx = arr.indexOf(target - arr[i]);
            if (pairIdx >= 0 && pairIdx != i)
            {
                return [i, pairIdx];
            }
        }
    }
    return [];
}

let array = [1, 5, 2, 7];
console.log("[1, 5, 2, 7], target = 8 -- " + returnIndexOfCombination(array, 8));

let array2 = [20, 1, 5, 2, 11];
console.log("[20, 1, 5, 2, 11], target = 3 -- " + returnIndexOfCombination(array2, 3));

let array3 = [3, 2, 4];
console.log("[3, 2, 4], target = 6 -- " + returnIndexOfCombination(array3, 6));
