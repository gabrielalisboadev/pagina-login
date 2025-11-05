let body = document.querySelector("body");
let sun = document.querySelector(".oculto");
let moon = document.querySelector("#moon");
let button = document.querySelector("button");
let login = document.querySelector("#login");

  function mode() {
  let classe = body.className;
  let inputs = document.querySelectorAll("input");

  if (classe === "whiteMode") {
    body.classList.add("darkMode");
    body.classList.remove("whiteMode");
    moon.classList.add("oculto");
    sun.classList.remove("oculto");
    button.classList.add("botaoDark");
    login.classList.add("loginDark");

    inputs.forEach(input => {
      input.classList.remove("inputWhite");
      input.classList.add("inputDark");
    });
  } else {
    body.classList.remove("darkMode");
    body.classList.add("whiteMode");
    moon.classList.remove("oculto");
    sun.classList.add("oculto");
    button.classList.remove("botaoDark");
    login.classList.remove("loginDark");

    inputs.forEach(input => {
      input.classList.remove("inputDark");
      input.classList.add("inputWhite");
    });
  }
}

moon.addEventListener("click", mode);
sun.addEventListener("click", mode);