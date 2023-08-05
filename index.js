
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let body = document.getElementById("bodyEl");
let ulEl = document.getElementById("ul-El");
let inputCase = document.getElementById("input-el");
let clearBtn = document.getElementById("clearBtn");
let allLeads = document.getElementById("leadsBtn");





inputBtn.addEventListener("click", function(){

    let val = document.getElementById("input-el").value;
    if(val != ""){
        let items = `<li>
                            <a target='_blank' href= '#'> ${val} </a>
                     </li>`
        ulEl.innerHTML += items ; 
        inputCase.value = "";
        myLeads.push(val);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
    }
    else{    
        const par = document.createElement("p");
        par.textContent = "There is nothing...";
        body.append(par)

    }
    

})



clearBtn.addEventListener("click", function(){
    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
        myLeads.pop(ulEl.firstChild)
      }
    
})

allLeads.addEventListener("click", function(){
    let leads = JSON.parse(localStorage.getItem("myLeads"));
    for(let i = 0 ; i< leads.lenght; i++){ 
        ulEl.innerHTML += `<li> <a target='_blank' href= '#'> ${leads[i]} </a> </li>` ; 
        console.log(leads[i]);
    }
})











