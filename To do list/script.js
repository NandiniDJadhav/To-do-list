// Select DOM elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to "plus" button
addButton.addEventListener('click', () => {
    const task = inputField.value.trim(); // Get input value

    if (task) {
        addTodoItem(task); // Add task if it's not empty
        inputField.value = ''; // Clear input field
    }
});

// Function to add a task to the list
function addTodoItem(task) {
    // Create list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Create text span
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');

    // Add event listener to delete button
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem); // Remove the task from the list
    });

    // Append text and button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);

    // Add list item to the list
    todoList.appendChild(listItem);
}

// Optional: Add "Enter" key functionality for adding tasks
inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const task = inputField.value.trim();

        if (task) {
            addTodoItem(task);
            inputField.value = '';
        }
    }
});
