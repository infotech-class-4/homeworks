const inputFieldName = document.querySelector(".form-control");
const btnCreateField = document.querySelector("#create-btn");
const myForm = document.querySelector("#my-form");
const tBody = document.querySelector("tbody");

const btnAddField = document.createElement("button");

const createField = () => {
  if (inputFieldName.value == "") {
    alert("Input cannot be left empty.");
    return;
  }

  const newFieldInput = document.createElement("input");
  newFieldInput.type = "text";
  newFieldInput.placeholder = inputFieldName.value.toUpperCase();
  newFieldInput.name = inputFieldName.value;
  newFieldInput.className = "form-control my-field";

  myForm.appendChild(newFieldInput);

  btnAddField.textContent = "ADD";
  btnAddField.className = "btn btn-sm btn-primary";
  btnAddField.type = "submit";

  myForm.appendChild(btnAddField);

  const header = document.querySelector("thead tr");

  const newTh = document.createElement("th");
  newTh.textContent = inputFieldName.value.toUpperCase();

  header.appendChild(newTh);

  inputFieldName.value = "";
};

btnCreateField.addEventListener("click", createField);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formChildrens = document.querySelectorAll(".my-field");
  console.log(formChildrens);
  const myTr = document.createElement("tr");

  formChildrens.forEach((children) => {
    const myTd = document.createElement("td");
    myTd.textContent = children.value.toUpperCase();

    myTd.addEventListener("click", (e) => {
      const newValue = prompt("Yeni degeri giriniz");
      if (newValue) e.target.textContent = newValue.toUpperCase();
    });

    myTr.appendChild(myTd);
  });

  const deleteBtnTd = document.createElement("td");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-sm btn-danger";

  deleteBtn.addEventListener("click", (e) => {
    deleteTodo(e.target.parentElement.parentElement);
  });

  deleteBtnTd.appendChild(deleteBtn);
  myTr.appendChild(deleteBtnTd);

  tBody.appendChild(myTr);

  myForm.reset();
});

const deleteTodo = (todo) => {
  todo.remove();
};
