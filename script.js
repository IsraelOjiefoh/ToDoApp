
({ todo:'My first todo list item',checked:false})
//This codes adds our HTMl to the Dom
let addBox=document.getElementById('New-todo')    ;
let datePicker=document.getElementById('date-picker');
let addButton=document.getElementById('add-todo');
let todoList=document.getElementById('todoList');
let doneList=document.getElementById('doneList');


 
 
let todos=[{todo:'Buy Bread',
            checked:false,
            due_date:"12-03-2023"
         }
,{         todo:'Buy Milk',
            checked:false,
            due_date:13-03-2023
}       

];

            function addTodo(label) {
            if(label !==""){
                
            todos.push({ todo:label,checked:false} );
         updateTodos()
         }   
         }

        addButton.addEventListener("click", function (e) {
            e.preventDefault();
            addTodo(addBox.value,);
            addBox.value='';
            console.log(todos);
         })
         
         function updateTodos() {
            todoList.innerHTML='';
            doneList.innerHTML=''
         
            todos.forEach(function (el) {
               
               let todo=document.createElement('li')
               todo.className='todo';
               todo.innerText=el.todo

               todo.addEventListener('click',function(e) {
                  todos.forEach(function(el,i){
                    date_Picker=datePicker.value
                     if(todos[i].todo ===e.target.innerText){
                        todos[i].checked= !todos[i].checked;
                        updateTodos()
                     }
                  });
                  
               })
              
         

         if(el.checked) {
            doneList.appendChild(todo);
         }else{
            todoList.appendChild(todo)
         }
      });
} 