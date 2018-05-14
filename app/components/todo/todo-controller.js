function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	//getTodos()

	/*<div class="card bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Header</div>
				<div class="card-body">
				  <h5 class="card-title">Light card title</h5>
				  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			  </div>
			  
	<button onclick="app.controllers.todoController.removeTodo('${todo._id}')">DELETE</button> */

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = `
		<ul>
		<form class="form-inline formStyle todo-font" onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<h4>${todos.length} To Do</h4></ul>
		`

		//DONT FORGET TO LOOP

		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i]
			template += `
			<div class="todo-font todo-format">
		<li><input name="${todo._id}" type="checkbox" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
		<label for="${todo._id}">${todo.description}   <span onclick="app.controllers.todoController.removeTodo('${todo._id}')"></span></label></li>
		</div>
		`
		}

		document.getElementById("todoList").innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.todo.value
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS

		todoService.addTodo(todo, getTodos)

		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT

		form.reset()
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	getTodos();
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
}