// Reference to the todo form and list
var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todo-list');

// Event listener for adding new tasks
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var todoInput = document.getElementById('todo-input').value;
  if (todoInput.trim() !== '') {
    // Push the task to Firebase
    todoRef.push().set({
      task: todoInput,
      completed: false
    });
    document.getElementById('todo-input').value = '';
  }
});

// Event listener for displaying tasks
todoRef.on('value', function(snapshot) {
  todoList.innerHTML = ''; // Clear the existing list
  snapshot.forEach(function(childSnapshot) {
    var todoItem = childSnapshot.val().task;
    var todoKey = childSnapshot.key;

    var listItem = document.createElement('li');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
      // Update the completion status in Firebase
      todoRef.child(todoKey).update({
        completed: checkBox.checked
      });
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Remove the todo item from Firebase
      todoRef.child(todoKey).remove();
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(document.createTextNode(todoItem));
    listItem.appendChild(deleteButton);

    if (childSnapshot.val().completed) {
      listItem.classList.add('completed');
      checkBox.checked = true;
    }

    todoList.appendChild(listItem);
  });
});
