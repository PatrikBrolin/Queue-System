const inputValue = document.querySelector("#inputValue");
const queueBtn = document.querySelector("#queueBtn");
const list = document.querySelector("#list");
const checkedIn = document.querySelector("#checkedIn")
const fastBtn = document.querySelector("#fastBtn")
const listHolder = document.querySelector(".listHolder")

// button to add a person to the back of queue
queueBtn.addEventListener("click", () => {
  if (inputValue.value !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1)
    inputValue.value = ""
    list.appendChild(listItem);
    checkList()
  } 
})
// button to add a person to the front of queue
fastBtn.addEventListener("click", () => {
  if(inputValue.value !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1)
    inputValue.value = ""
    list.prepend(listItem);
    checkList()
  } 
})

// button to remove det first person in queue
checkedIn.addEventListener("click", () => {
  if (list.childElementCount > 0){
    list.removeChild(list.firstElementChild)
    checkList()
  }
})
// function to check if there is any queue
let checkList = () =>{
  if (list.childElementCount > 0){
    listHolder.innerHTML = ""
  } else {
    listHolder.innerHTML = "There’s currently no people standing in line"
  }
}
