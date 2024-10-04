const display = document.getElementById("display");
const hello = ["Hello", "Konnichiwa", "Hola", "Bonjour", "Anyeong haseyo", "Shalom", "Guten Tag", "Selamat siang", "Merhaba"];

let isHelloDisplayed = false; 

document.querySelector('.delete_all_butt').addEventListener('click', onButt); // Corrected function name here
document.querySelector('.good_bye').addEventListener('click', offButt); // Corrected function name here

//This function gives a random hello from different languages when you click the hello button
function displayRandomGreeting() {
    const randHello = hello[Math.floor(Math.random() * hello.length)];
    display.value = randHello;
    isHelloDisplayed = true; 
}

//This function displays the inputs of the user, limiting the input length to 12 characters and allowing only one decimal point
function appendToDisplay(input) {
    if (!isHelloDisplayed && display.value.length < 12) {
        if (input === "." && display.value.includes(".")) {
            return; 
        }
        display.value += input;
    }
}

//This deletes all the input
function clear_all_Display() {
    display.value = "";
    isHelloDisplayed = false; 
}

//This function deletes the latest input
function deleteLastInput() {
    if (display.value == "Syntax Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

//This is the function for calculating the user input and it also catches error if the syntax is unreadable
function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value === Infinity || display.value === -Infinity || isNaN(display.value)) {
            display.value = "Syntax Error";
            return;
        }
    } catch (error) {
        display.value = "Syntax Error";
    }
}

//Function for turning off the calculator when you click Bye!
function offButt() { 
    const buttons = document.querySelectorAll('button');
    display.value = "Goodbye!";

    setTimeout(() => {

        buttons.forEach(button => {
            if (!button.classList.contains('delete_all_butt')) {
                button.disabled = true;
                display.value = " ";
            }
        });

    }, 800);
}

//Function for turning on the calculator when you click AC
function onButt() {
    const buttons = document.querySelectorAll('button');
    display.value = "";
    isHelloDisplayed = false; 

    setTimeout(() => {
        buttons.forEach(button => {
            button.disabled = false;
            display.value = " ";
        });
    }, 500);
}
