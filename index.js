
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let body = document.getElementById("bodyEl")
let ulEl = document.getElementById("ul-El")
let inputCase = document.getElementById("input-el")
let clearBtn = document.getElementById("clearBtn")

inputBtn.addEventListener("click", function(){
    let val = document.getElementById("input-el").value;
    if(val != ""){
        myLeads.push(val);
        //mettre a jour le contenu
        let items = `<li>
                            <a target='_blank' href= '#'> ${val} </a>
                     </li>`
        ulEl.innerHTML += items ; 
        inputCase.value = "";

    }
    else{    
        const par = document.createElement("p");
        par.textContent = "There is nothing...";
        body.append(par)

    }
    console.log(myLeads.length);  

})


clearBtn.addEventListener("click", function(){
    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
        myLeads.pop(ulEl.firstChild)
      }
    
})









