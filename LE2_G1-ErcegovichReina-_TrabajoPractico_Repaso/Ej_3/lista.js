const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();//Debido a que nuestro botón se encuentra en un form usamos esta instrucción para evitar que la pagina se refresque

  const text = input.value;

  if (text !== "") { //Solo añade la tarea si se escribio algo
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = ""; //Para que el input se quede en blanco al tocar añadir
    empty.style.display = "none"; //Ya no va a figurar que no tenemos tareas pendientes
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Borrar";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement; //Usamos esta instrucción para borrar el li de la lista
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn; //Para agregar el botón al li
}