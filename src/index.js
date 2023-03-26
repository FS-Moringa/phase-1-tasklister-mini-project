document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault();//this preventss the form from submitting and reloading the page..
    const input = document.getElementById('new-task-description');
    const description = input.value;
    const li = document.createElement('li');
    li.textContent = description;
    taskList.appendChild(li);
    input.value = '';
  })
});
