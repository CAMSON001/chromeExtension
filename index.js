
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let body = document.getElementById("bodyEl");
let ulEl = document.getElementById("ul-El");
let inputCase = document.getElementById("input-el");
let clearBtn = document.getElementById("clearBtn");
let btnLeads = document.getElementById("leadsBtn");





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



btnLeads.addEventListener("click", function(){
    let leads = localStorage.getItem("myLeads");
    leads = JSON.parse(leads)
    for(let i= 0 ; i<leads.length; i++){
        console.log(leads[i]);
        let elmt= `<li><a  href= '#'> ${leads[i]} </a></li>`
        ulEl.innerHTML +=  elmt ; 
    }
    
   
})











