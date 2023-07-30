
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let body = document.getElementById("bodyEl")
let ulEl = document.getElementById("ul-El")

inputBtn.addEventListener("click", function(){
    let val = document.getElementById("input-el").value;
    if(val != ""){
        myLeads.push(val);
        console.log("the link is saved");
        //mettre a jour le contenu
        const li = document.createElement("li");
        li.textContent = val;
        ulEl.append(li);

    }
    else{    
        const par = document.createElement("p");
        par.textContent = "There is nothing...";
        body.append(par)

    }
    console.log(myLeads.length);  

})









