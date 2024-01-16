document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('sumbit', (e) => {
    e.preventDefault()
    buildToDo(e.target ['new-task-description'].value)
    form.reset()
  })

  function buildToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleRemove)
    btn.textContent='x'
    p.textContent = `${todo}`
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)
  }

  function handleRemove(e){
    e.target.parentNode.remove()
  }
  
});
