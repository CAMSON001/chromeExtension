
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let tabLeads = [];
let body = document.getElementById("bodyEl");
let ulEl = document.getElementById("ul-El");
let inputCase = document.getElementById("input-el");
let clearBtn = document.getElementById("clearBtn");
let btnLeads = document.getElementById("leadsBtn");
let tabBtn = document.getElementById("tabBtn");




tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        tabLeads.push(activeTab.url);
        localStorage.setItem("tabLeads", JSON.stringify(tabLeads));

        let leadsCpys = localStorage.getItem("tabLeads");
        leadsCpys = JSON.parse(leadsCpys);

        // Effacer le contenu de la liste avant de la remplir à nouveau
        ulEl.innerHTML = '';

        for (let i = 0; i < leadsCpys.length; i++) {
            let elmts = `<li><a href='#'>${leadsCpys[i]}</a></li>`;
            ulEl.innerHTML += elmts;
        }
    });
});


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



clearBtn.addEventListener("dbldblclick", function(){
    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
        myLeads.pop(ulEl.firstChild)
      }
    localStorage.clear()


})



btnLeads.addEventListener("click", function(){
    let leads = localStorage.getItem("myLeads");
    leads = JSON.parse(leads);
    if(leads){
        
        for(let i= 0 ; i<leads.length; i++){
            console.log(leads[i]);
            let elmt= `<li><a  href= '#'> ${leads[i]} </a></li>`
            ulEl.innerHTML +=  elmt ; 
        }
    }
    else{
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "There is no leads..";
        body.append(paragraphe)
    }
   
    
   
})












btnLeads.addEventListener("click", function(){
    let leads = localStorage.getItem("myLeads");
    leads = JSON.parse(leads);
    if(leads){
        
        for(let i= 0 ; i<leads.length; i++){
            console.log(leads[i]);
            let elmt= `<li><a  href= '#'> ${leads[i]} </a></li>`
            ulEl.innerHTML +=  elmt ; 
        }
    }
    else{
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "There is no leads..";
        body.append(paragraphe)
    }
   
    
   
})














