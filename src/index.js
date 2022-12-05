document.addEventListener("DOMContentLoaded", () => {
  // your code here




  document.getElementById("create-task-form").addeventListener("submit", (e)=>{
  e.preventDefault()
   submitBtn(e.target.input.value)
 })

})

function submitBtn(task) {
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    ul.appendChild(li)
    li,innerText = `${task}`
    let x = document.createElement('button')
    x.addEventListener("click", deleteElem)
    x.innerText= 'X'
    li.appendChild(x)
  }

  function deleteElem(e){
    e.target.parentNode.remove()
  }



