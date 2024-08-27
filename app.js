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
                  display.innerText = eval(display.innerText);
              } catch (error) {
                  display.innerText = "Error!";
              }
          } else {
              if (buttonId === ".") {
                  const currentText = display.innerText;
                  if (/[\d]*\.[\d]*$/.test(currentText.split(/[\+\-\*\/]/).pop())) {
                  } else {
                      display.innerText += ".";
                  }
              } else {
                  display.innerText += buttonId;
              }
          }
      };
  });

  themeToggleBtn.onclick = () => {
      calculator.classList.toggle("dark");
      themeToggleBtn.classList.toggle("active");
  };
});
