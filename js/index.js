var memory;
var calculationString = []; // Holds the calculation to be performed


// updates html screen
function updateScreen(input) {
    if ($(".result").html() === "ERROR") {
        console.log(input);
    }
    $(".result").html(input);
}

// updates the window each time a button is pressed
function updateResults(val) {
    // If operation is to be resolved
    if (val === "=") {
        if (memory && /\*|\-|\+|\/|\+/.test(calculationString[0])) {
            calculationString.reverse();
            calculationString.push(memory);
            calculationString.reverse();
        }
        var newstring = "";
        for (var i = 0; i < calculationString.length; i++) {
            newstring += calculationString[i];
        }

        // Does the math and updates the screen
        var result = eval(newstring);
        updateScreen(result);
        calculationString = [];
        memory = result;
        return;
    } else if (val === "X") {
        if (checkForDoubleArithmetics(1, val)) {
            console.log(calculationString);
            return;
        }
        calculationString.push("*");
    } else if (val === "%") {
        if (checkForDoubleArithmetics(1, val)) {
            return;
        }
        calculationString.push("/");
    } else if (val === "AC") {
        calculationString = [];
        updateScreen("0");
        memory = "";
        return;
    } else if (val === "CE") {
        calculationString = [];
        updateScreen("0");
        return;
    } else {
        if (checkForDoubleArithmetics(1, val) && /\-|\+/.test(val)) {
            return;
        }
        calculationString.push(val);
    }
    updateScreen(calculationString);
} // End updateResults()


// Checks if previous (or double previous) character is the same
function checkForDoubleArithmetics(number, value) {
    return (calculationString[calculationString.length - number] === value);
}

// Event listener
$(".button").click(function () {
    updateResults(this.innerHTML)
});

// Event listener for keypress
$(window).keypress(function (e) {
    console.log(e);
    switch (e.keyCode) {
        case 49: //1
            updateResults("1");
            break;
        case 50: //2
            updateResults("2");
            break;
        case 51: //3
            updateResults("3");
            break;
        case 52: //4
            updateResults("4");
            break;
        case 53: //5
            updateResults("5");
            break;
        case 54: //6
            updateResults("6");
            break;
        case 55: //7
            updateResults("7");
            break;
        case 56: //8
            updateResults("8");
            break;
        case 57: //9
            updateResults("9");
            break;
        case 48: //0
            updateResults("0");
            break;
        case 42: //2
            updateResults("*");
            break;
        case 47: //2
            updateResults("/");
            break;
        case 13: //=
            updateResults("=");
            break;
        case 45: //2
            updateResults("-");
            break;
        case 43: //2
            updateResults("+");
            break;
        case 190: //.
            updateResults(".");
            break;
        case 8: //delete
            updateResults("AC");
            break;
    }

});