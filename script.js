document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        function addtask()
        // Existing addTask code

        // Save tasks to local storage
        saveTasksToLocalStorage() {
            const tasks = [];
            const taskItems = tasklist.getElementBytagName('li');

            for (let i = 0; i < taskItems.length; i++)  {
                tasks.push(taskItems[i].textContent);
            }
            
                localStorage.setItem('tasks', JSON, stringify('tasks'))
        }

        function loadTasksFromLocalStorage() {
            const tasks = JSON, parse(localStorage.getItem('tasks'));
            if (tasks) {
                tasks.forEach(taskText => {
                    const li = document.createElement('li');
                    li.textContext = taskText;

        // Create new list item
        const listItem = document.createElement('li');
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click event to remove button
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Add elements to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeBtn);
        
        // Add list item to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
        
        // Focus back on the input field
        taskInput.focus();
    }

    // Event listener for add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
