const form = document.getElementById("form"); // get element

form.addEventListener("submit", function (event) {
  event.preventDefault(); // this prevents the page from reloading when the submit button is clicked
  const data = new FormData(form); // compiles all the input names and values
  console.log(data);
  const userData = Object.fromEntries(data); // turn our FormData into a real object
  console.log(userData);
});
