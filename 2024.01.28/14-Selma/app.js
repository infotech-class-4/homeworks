
const inputFieldName=document.querySelector(".form-control");
const btnCreatedField=document.querySelector("#create-btn");
const myform=document.querySelector("#my-form");
const tBody = document.querySelector("tbody");

const btnAddField = document.createElement("button");

    
const createField =()=>{
if(inputFieldName.value ==""){
    alert("input icerisi bos birakilamaz.");
    return;

}
const newFieldInput = document.createElement("input");
newFieldInput.type="text";
newFieldInput.placeholder=inputFieldName.value.toUpperCase();
newFieldInput.name = inputFieldName.value;
newFieldInput.className="form-control my-field";

myform.appendChild(newFieldInput);


btnAddField.textContent="ADD";
btnAddField.className="btn btn-sm btn-primary";
btnAddField.type ="submit";

myform.appendChild(btnAddField);

const header =document.querySelector("thead tr");

const newTh = document.createElement("th");
newTh.textContent=inputFieldName.value.toUpperCase();

header.appendChild(newTh);

inputFieldName.value="";
}
btnCreatedField.addEventListener("click",createField);

myform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formChilds = document.querySelectorAll(".my-field");

    const myTr=document.createElement("tr");
    formChilds.forEach((childs) =>{
        const myTd = document.createElement("td");
        myTd.textContent=childs.value.toUpperCase();
        myTr.appendChild(myTd);

          tBody.appendChild(myTr);

    })
    const deleteBtnTd = document.createElement("td");
    const deleteBtn = document.createElement("button");


deleteBtn.textContent="Delete";
deleteBtn.className="btn btn-sm btn-danger";
deleteBtn.addEventListener("click",(e)=>{
    deleteToDo(e.target.parentElement.parentElement);
});

deleteBtnTd.appendChild(deleteBtn);
myTr.appendChild(deleteBtnTd);

tBody.appendChild(myTr);

myform.reset();

});

const deleteToDo =(todo)=>{
todo.remove();
}

