const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")  //error if not enter an input
    }
    else{
        let li = document.createElement("li") //create html elemet name li
        li.innerHTML = inputBox.value; //the text entered in the input field is added to li element
        listContainer.appendChild(li);   //li is displayed under list container element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";  //after clicking the add button the input field is cleared automatically
    saveData();   //save teh updated content in the browser
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){       //if clicked on the item
        e.target.classList.toggle("checked");   
        saveData();
    }
    else if(e.target.tagName === "SPAN"){  //if clicked on the cross button
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // the data entered throght listContainer is saved in the name of data in the local storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")  //will get and display all the data saved in the name od "data"
}
showTask();