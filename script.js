var inputBox = document.getElementsByTagName('input')[0];

var expression = "";

inputBox.addEventListener('keydown', function (event) {
    if (((event.keyCode >= 48 && event.keyCode <= 57) || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%' || event.key == ')' || event.key == '(' || event.keyCode === 13 || event.keyCode == 08 || event.keyCode == 32 || event.key == '.')) {
        if (event.keyCode === 13) {
            inputBox.value = eval(inputBox.value);
            expression = input.value;
            console.log("enter");
        }
    }
    else {
        event.preventDefault();

    }
    console.log("pallvi");
})



// ========================== KEYPAD HANDLLERS ------------------------------------------------------

document.getElementById('equal').addEventListener('click', function () {
    inputBox.value = eval(inputBox.value);
    expression = inputBox.value;
})

document.getElementById('AC').addEventListener('click', function () {
    inputBox.value = '';
    expression = '';
})

document.getElementById('one').addEventListener('click', function () {
    expression = expression + 1;
    inputBox.value = expression;
})

document.getElementById('two').addEventListener('click', function () {
    expression = expression + 2;
    inputBox.value = expression;
})

document.getElementById('three').addEventListener('click', function () {
    expression = expression + 3;
    inputBox.value = expression;
})

document.getElementById('four').addEventListener('click', function () {
    expression = expression + 4;
    inputBox.value = expression;
})

document.getElementById('five').addEventListener('click', function () {
    expression = expression + 5;
    inputBox.value = expression;
})

document.getElementById('six').addEventListener('click', function () {
    expression = expression + 6;
    inputBox.value = expression;
})

document.getElementById('seven').addEventListener('click', function () {
    expression = expression + 7;
    inputBox.value = expression;
})

document.getElementById('eight').addEventListener('click', function () {
    expression = expression + 8;
    inputBox.value = expression;
})

document.getElementById('nine').addEventListener('click', function () {
    expression = expression + 9;
    inputBox.value = expression;
})

document.getElementById('zero').addEventListener('click', function () {
    expression = expression + 0;
    inputBox.value = expression;
})

document.getElementById('plus').addEventListener('click', function () {
    expression = expression + '+';
    inputBox.value = expression;
})

document.getElementById('minus').addEventListener('click', function () {
    expression = expression + '-';
    inputBox.value = expression;
})

document.getElementById('multiply').addEventListener('click', function () {
    expression = expression + '*';
    inputBox.value = expression;
})

document.getElementById('divide').addEventListener('click', function () {
    expression = expression + '/';
    inputBox.value = expression;
})

document.getElementById('decimal').addEventListener('click', function () {
    expression = expression + '.';
    inputBox.value = expression;
})

document.getElementById('mod').addEventListener('click', function () {
    expression = expression + '%';
    inputBox.value = expression;
})

document.getElementById('back-space').addEventListener('click', function () {
    expression = inputBox.value;
    expression = expression.slice(0, -1);
    inputBox.value = expression;
})

document.getElementById('x-inverse').addEventListener('click', function () {
    expression = eval("1/" + '(' + expression + ')');
    inputBox.value = expression;
})

document.getElementById('x-square').addEventListener('click', function () {
    expression = String(eval('(' + expression + ')' + '**2'));
    inputBox.value = expression;
})

document.getElementById('root').addEventListener('click', function () {
    expression = eval('(' + expression + ')' + '**(1/2)');
    inputBox.value = expression;
})

document.getElementById('power').addEventListener('click', function () {
    expression = String(eval(expression)) + "**";
    inputBox.value = expression;
})

document.getElementById('open').addEventListener('click', function () {
    expression = expression + '(';
    inputBox.value = expression;
})

document.getElementById('close').addEventListener('click', function () {
    expression = expression + ')';
    inputBox.value = expression;
})

document.getElementById('plus-minus').addEventListener('click', function () {
    expression = String(eval(expression));
    if (expression.length) {
        if (expression[0] == '-') {
            expression = expression.substring(1);
        }
        else {
            expression = '-' + expression;
        }
    }
    inputBox.value = expression;
})

input.addEventListener('click', function (event) {
    event.preventDefault();
})

function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function () {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}
hideKeyboard();