document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    const themeToggleBtn = document.querySelector(".theme-toggler");
    const calculator = document.querySelector(".calculator");
  
    if (!display || !themeToggleBtn || !calculator) {
      console.error("Required elements are missing.");
      return;
    }
  
    buttons.forEach((button) => {
      button.onclick = () => {
        const buttonId = button.id;
  
        if (buttonId === "clear") {
          display.innerText = "";
        } else if (buttonId === "backspace") {
          let currentText = display.innerText;
          display.innerText = currentText.slice(0, -1);
        } else if (buttonId === "equal") {
          try {
            // Replace any invalid characters before evaluating
            const sanitizedText = display.innerText.replace(/[^0-9+\-*/.]/g, '');
            const result = eval(sanitizedText);
            
            // Check if result is a number and within the valid range
            if (!isNaN(result) && result <= 999999999999) {
              display.innerText = result;
            } else {
              display.innerText = "Error!";
            }
          } catch (error) {
            display.innerText = "Error!";
          }
        } else {
          if (buttonId === ".") {
            const currentText = display.innerText;
            const lastPart = currentText.split(/[\+\-\*\/]/).pop();
            
            // Ensure only one decimal per number
            if (!/[\d]*\.[\d]*$/.test(lastPart)) {
              display.innerText += ".";
            }
          } else {
            // Append only numbers and operators to avoid invalid input
            if (/[\d+\-*/]/.test(buttonId)) {
              display.innerText += buttonId;
            }
          }
        }
  
        // Prevent display overflow
        if (display.innerText.length > 12) {
          display.innerText = display.innerText.slice(0, 12);
        }
      };
    });
  
    themeToggleBtn.onclick = () => {
      calculator.classList.toggle("dark");
      themeToggleBtn.classList.toggle("active");
    };
  });
  