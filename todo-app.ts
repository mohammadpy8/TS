const todoValue = document.querySelector(".") as HTMLInputElement;
const addTodo = document.querySelector(".") as HTMLButtonElement;
const clearTodo = document.querySelector(".") as HTMLButtonElement;
const todoList = document.querySelector(".") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isComplte: boolean;
  //   todos: string | number | [];
}

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: todoValue.value,
    isComplte: false,
  };

  addTodoToDom(newTodo);
  todos.push(newTodo);
  saveTodosInLocalStorage();

  todoValue.value = "";
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

const saveTodosInLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return true;
};

window.addEventListener("DOMContentLoaded", () => {
    todoList.innerHTML = "";
  todos.forEach((todo) => addTodoToDom(todo));
});

addTodo.addEventListener("click", (event) => handleSubmit(event));
