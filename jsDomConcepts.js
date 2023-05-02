//Single elements selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));
//Multiple element selectors
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
//ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  //Using our parameter e in our function we can use the dot operator to access properties from our parameter.
  //prevent default allows the log to keep the log in console after submit?
  e.preventDefault();
  console.log("click");
  console.log(e.target);
  console.log(e.type);
  //This line grabs the form using the id we have set in our HTML form element and changes the background when the event is triggered i.e. clicking submit.
  document.querySelector("#my-form").style.background = "#ccc";
  //This adds a class we specify to the target element we have selected.
  document.querySelector("body").classList.add("bg-dark");
  //ul is defined above as the items in the unordered list. Here we are changing the last element in the list to reflect the value that we specify.
  ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
});
