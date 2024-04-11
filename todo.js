const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const addTask=()=>{
if(inputBox.value===''){
    alert('you must write something')
} else{
    const li=document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);

    const span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputBox.value=""
saveData();
}
listContainer.addEventListener('click',(event)=>{
    event.preventDefault();
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();

    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }

},false)

const saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
    }

const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();

