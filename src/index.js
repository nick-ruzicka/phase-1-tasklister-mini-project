// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  // Variables

  const newTaskDescription = document.getElementById("new-task-description");
  const createNewTaskList = document.getElementById("tasks");

  console.log(newTaskDescription);

  // allows us to submit w/out refresh and input
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      handleList(newTaskDescription.value); // e.target.value = undefined. Instead of using e.target method. Just create a variable with new-task-description and put . value
    });
});

// create element p - that represents the newly added task description-  to add to the list

function handleList(listItem) {
  let p = document.createElement("p"); // creates element
  let btn = document.createElement("button"); // creates element

  btn.textContent = " x";
  p.appendChild(btn);
  console.log(p, btn);
  p.textContent = listItem; // allows textcontent to equaly whatever is invoked from the newtaskdescription event function
  document.querySelector("#tasks").appendChild(p); // appends this information to the list
}
