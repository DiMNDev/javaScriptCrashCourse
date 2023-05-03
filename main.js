const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

const errorThrow = (bool) => {
  if (bool === true) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
  } else {
    msg.classList.remove("error");
    msg.innerHTML = "";
  }
};

function onsubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    errorThrow(true);
    setTimeout(() => errorThrow(false), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
  }
}
