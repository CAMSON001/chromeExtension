
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 

let ulEl = document.getElementById("ul-El")

inputBtn.addEventListener("click", function(){
    let val = document.getElementById("input-el").value;
    if(val != ""){
        myLeads.push(val);
        console.log("the link is saved");
    }
    else{    
        alert("there is nothing");
    }
    console.log(myLeads.length);  
})

for(let i = 0; i< myLeads.length; i++){
    ulEl.innerHTML += "<li> "+ myLeads[i] + "</li>"
}




