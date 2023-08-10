
let inputBtn = document.getElementById("input-btn");
let myLeads = []; 
let tabLeads = [];
let body = document.getElementById("bodyEl");
let ulEl = document.getElementById("ul-El");
let inputCase = document.getElementById("input-el");
let clearBtn = document.getElementById("clearBtn");
let btnLeads = document.getElementById("leadsBtn");
let tabBtn = document.getElementById("tabBtn");
const leadsfromlocalStorage = JSON.parse(localStorage.getItem("myLeads"));




if(leadsfromlocalStorage){
    myLeads = leadsfromlocalStorage ;
    render(myLeads);
}



function render(leadss){
    let elmt = ""
   
        
    for(let i= 0 ; i<leadss.length; i++){
        elmt += `<li><a target href= '${leadss[i]}'> ${leadss[i]} </a></li>`
            
    }
    ulEl.innerHTML =  elmt ; 
}





tabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        
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
    

})



clearBtn.addEventListener("dblclick", function(){
    while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
        myLeads.pop(ulEl.firstChild)
      }
    localStorage.clear()


})













