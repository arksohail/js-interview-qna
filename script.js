// *****************************************************************************************************************************************************************
// Coding Questions:
// *****************************************************************************************************************************************************************
// Q1. Flatten a given Array e.g: [1, [2,[3,4,[5,[6]]]]] ==> [1, 2, 3, 4, 5, 6];
// Solution (Using Recursion):
function flattenArr(arr) {
    let result = [];
    arr.forEach((ele) => {
        if (!Array.isArray(ele)) {
            result.push(ele); // if the element is not array then push ele in result
        } else {
            const flattened = flattenArr(ele); // if the element is an array then call and store the flattenArr recursively.
            flattened.forEach((flatElm) => {
                result.push(flatElm); // Push the recursively stored flattened elements in result
            });
        }
    });
    return result; // Return the result array
}
const arr = [1, [2, 3, [4, 5, 6, [7, 8, [9]]]]];
const result = flattenArr(arr);
console.log(result);

// Q2. Convert a camelCaseString to snakeCaseString e.g: "thisIsAString" ==> "This_Is_A_String";
// Solution:
function camelCaseToSnakeCase(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (i) {
            if (char === char.toUpperCase()) {
                res += "_" + char.toUpperCase(); // Prepend an underscore before a UpperCase Value
            } else {
                res += char.toLowerCase(); // Rest Character in LowerCase
            }
        } else {
            res += char.toUpperCase(); // First Character to UpperCase
        }
    }
    return res;
}

const camelCaseString = "thisIsAString";
const Snake_Case_String = camelCaseToSnakeCase(camelCaseString);
console.log(Snake_Case_String);

// Q3. Create a Countdown Timer that counts from 30 to 0 every second, two Disable/Hidden Buttons "Reset" and "Take Off".
// Enable/Show two Buttons, namely "Reset" & "Take Off", when the Countdown reaches to zero. 
// On Click "Reset" Button the countdown should reset back to 30, and both the "Reset" and "Hidden" Button should be Disabled/Hidden.
// On Click "Take Off" Button Disable/Hide the "Reset" Button completely.

// Solution (HTML/CSS/JS):
const countElm = document.getElementById("count"); // Create a Para Tag for #COUNTER: <p id="count">Count: </p> in HTML
const resetBtnElm = document.getElementById("reset"); // Create a #RESET BUTTON: <button class="d-no" id="reset">RESET</button>
const takeOffBtnElm = document.getElementById("takeOff"); // Create a #TAKEOFF BUTTON: <button class="d-no" id="takeOff">TAKE OFF</button>
// NOTE Add '.d-no { display: none; }' in CSS for HIDING the BUTTONS

function countDownTimer() {
    console.log("Count:", count);
    if (count) {
        countElm.innerText = "Count: " + count; // Will display from Initial Value to 1.
        count = count - 1; // Reduce the Count Down by 1
    } else {
        countElm.innerText = "Count: " + count; // To Display Zero 0.
        counter = clearInterval(counter);
        hideButton(false);
    }
}
function resetCounter() {
    count = 5; // Reset the Counter to 30.
    countElm.innerText = "Count: ";
    counter = setInterval(countDownTimer, 1000);
    hideButton(true);
}
function takeOff() {
    countElm.innerText = "TAKE OFF !!!!!!";
    hideButton(true);
}
function hideButton(isHidden) {
    // IF *isHidden:true  => add Class '-d-no' to HIDE the Button
    // ELSE remove the 'd-no' class to SHOW the Button
    resetBtnElm.classList = isHidden ? ["d-no"] : [];
    takeOffBtnElm.classList = isHidden ? ["d-no"] : [];
}
let count = 5;
var counter = setInterval(countDownTimer, 1000);
resetBtnElm.addEventListener("click", resetCounter);
takeOffBtnElm.addEventListener("click", takeOff);


// *****************************************************************************************************************************************************************
// Output Questions:
// *****************************************************************************************************************************************************************

// Q1. IIFE Function
// Guess the Output and Explain the Scope of 'a' and 'b':
(function ImmediateX(a) {
    return (function ImmediateY(b) {
        console.log(a);
    })(5);
})(10);

// Q2. SetTimeOut
// Guess the Output, How to achieve the desired output of 0 1 2
function counter() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i); // will output 3 3 3 and not 0 1 2; for desired output of 0 1 2 change the 'var i = 0;' to 'let i = 0;'
        }, 1000);
    }
}
counter();

// Q3. 'this' keyword, 
// Guess the output, Explain the Scope of 'this' in normal vs arow function
const helloObj = {
    who: "WORLD",
    greetInNormalFn() {
        console.log("HELLO " + this.who) // Here 'this' points to helloObj => helloObj.who => "WORLD"
    },
    greetInArrowFn: () => console.log("HELLO " + this.who) // Here 'this' points to Window => window.who => undefined
};

helloObj.greetInNormalFn(); // logs HELLO WORLD
helloObj.greetInArrowFn(); // logs HELLO undefined
