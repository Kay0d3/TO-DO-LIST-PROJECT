const InputTask = document.getElementById('input-task');
const EnterTask = document.getElementById('enter-task');
const myList = document.getElementById('my-list');

EnterTask.addEventListener('click', addTask);

function addTask() {
let Div = document.createElement('div')
Div.classList.add('new-task');

let Li = document.createElement('li')
  Li.innerText = `${InputTask.value}`
 Div.appendChild(Li);
 
let checkButton = document.createElement('button')
checkButton.innerHTML = '<i class= "fa-solid fa-check"></i>'
checkButton.classList.add('check-btn');
Div.appendChild(checkButton)

let deleteButton = document.createElement('button')
deleteButton.innerHTML = '<i class= "fa-solid fa-trash-can"></i>'
deleteButton.classList.add('delete-btn');
Div.appendChild(deleteButton)

if(InputTask.value === ''){
    alert('enter a task')
}else{
    myList.appendChild(Div)
}

InputTask.value = ''


checkButton.addEventListener('click', function() {
    Li.style.textDecoration = 'line-through'
    Li.style.textTransform = 'capitalize'
})


deleteButton.addEventListener('click',function(e) {
  if (confirm('Sure you did it?'))
  {
    if(confirm('Great, Well-Done')){
        e.target.parentElement.parentElement.style.display = 'none'
    }
  }
})
}


