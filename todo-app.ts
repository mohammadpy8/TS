const todoValue = document.querySelector(".") as HTMLInputElement;
const addTodo = document.querySelector(".") as HTMLButtonElement;
const clearTodo = document.querySelector(".") as HTMLButtonElement;
const todoList = document.querySelector(".") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isComplte: boolean;
}

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: todoValue.value,
    isComplte: false,
    };
    
    addTodoToDom(newTodo);

    todoValue.value = ""
    todoValue.focus();

};

const addTodoToDom = (todo: Todo) => {
  todoList.insertAdjacentHTML(
    "beforeend",
    `
    <li>
        ${todo.title} <span></span>
    </li>
    `
  );
};

addTodo.addEventListener("click", (event) => handleSubmit(event));
