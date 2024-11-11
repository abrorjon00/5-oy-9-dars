        
        window.onload = function() {
            renderTodos();
        }

    
        function addTodo() {
            const todoInput = document.getElementById("todoInput");
            const todoText = todoInput.value.trim();
            if (todoText) {
                const todos = getTodos();
                todos.push(todoText);
                saveTodos(todos);
                renderTodos();
                todoInput.value = '';
            }
        }

        
        function deleteTodo(index) {
            const todos = getTodos();
            todos.splice(index, 1);
            saveTodos(todos);
            renderTodos();
        }

        
        function saveTodos(todos) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }


        function getTodos() {
            const todos = localStorage.getItem("todos");
            return todos ? JSON.parse(todos) : [];
        }

        
        function renderTodos() {
            const todoList = document.getElementById("todoList");
            todoList.innerHTML = "";
            const todos = getTodos();
            todos.forEach((todo, index) => {
                const li = document.createElement("li");
                li.textContent = todo;
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "O'chirish";
                deleteButton.onclick = function() {
                    deleteTodo(index);
                };
                li.appendChild(deleteButton);
                todoList.appendChild(li);
            });
        }

        
        function clearTodos() {
            localStorage.removeItem("todos");
            renderTodos();
        }