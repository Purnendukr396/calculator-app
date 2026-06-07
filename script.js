
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((butt) => {
    butt.addEventListener("click", () => {

        let value = butt.innerText;

        if (value === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
        }

        else if (value === "AC") {
            display.innerText = "";
        }

        else {
            display.innerText += value;
        }

    });
});