

// Generate All Permutations

// Use a map to preStore the result if the string already found its combination
// it can save the time from getting into further depth of recurssion
let mapOfPermutResult = {};

// The time complexity is O(branch^depth) ~ O( (str.length)^(str.length - 2) ), where branch size is the str length, and depth is down to left str with size 2
// Original is O(n^n)
// But after using the map aid, it would be faster than O(n^n)
function generatePermutation(str)
{
    if (str.length <= 1)
    {
        return [str];
    }
    else if (str.length == 2)
    {
        return [str, str.split("").reverse().join("")];
    }
    else if (str in mapOfPermutResult)
    {
        return mapOfPermutResult[str];
    }

    // "ABC" : "A" + "BC" result, "C" + "AB" result, "B" + "AC" result
    // "DABC" --> equal "D" + "ABC" result,   "A" + "DBC" result,     "B" + "DAC" result,...........

    let resultList = []
    for (const c of str)
    {
        const resetStr = str.split(c).join("");

        permutStrList = [...generatePermutation(resetStr)];
        permutStrList = permutStrList.map(str=> c + str); // Add back the major selected char to the front for all permutStr return

        resultList.push(...permutStrList);
    }
    mapOfPermutResult[str] = resultList;
    return resultList;
}

// Case 1 - "AB"
const str1 = "AB"
console.log(generatePermutation(str1));

// Case 2 - "A"
const str2 = "A"
console.log(generatePermutation(str2));

// Case 3 - "ABC"
const str3 = "ABC"
console.log(generatePermutation(str3));

// Case 4 - "ABCD"
const str4 = "ABCD"
console.log(generatePermutation(str4));

