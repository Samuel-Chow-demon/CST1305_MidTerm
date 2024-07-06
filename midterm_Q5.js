
// Check String if Parentheis "{[]()}", "{[()]}"

// "([}])" fail

// The time complexity is O(n)
function checkIfValidParenthesis(str)
{
    let orderOfOpening = [];

    for (const c of str)
    {
        if ("({[".indexOf(c) >= 0)
        {
            orderOfOpening.push(c);
        }
        else
        {
            switch(c)
            {
                case ')':
                    if (orderOfOpening.pop() != '(')
                    {
                        return false;
                    }
                    break;
                
                case '}':
                    if (orderOfOpening.pop() != '{')
                    {
                        return false;
                    }
                    break;

                case ']':
                    if (orderOfOpening.pop() != '[')
                    {
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return true;
}

// Case 1A
const str1A = "()";
console.log("1A - " + checkIfValidParenthesis(str1A));

// Case 1B (include empty string)
const str1B = "(    )";
console.log("1B - " + checkIfValidParenthesis(str1B));

// Case 2A
const str2A = "(){}[]";
console.log("2A - " + checkIfValidParenthesis(str2A));

// Case 2B (include empty string)
const str2B = "( ){}[    ]";
console.log("2B - " + checkIfValidParenthesis(str2B));

// Case 3
const str3 = "([})";
console.log("3 - " + checkIfValidParenthesis(str3));

// Case 4
const str4 = "[({})]";
console.log("4 - " + checkIfValidParenthesis(str4));