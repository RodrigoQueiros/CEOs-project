//############ Class partnerships ############
let arrayPartnerships=[]
class Partnerships{
    constructor(name,image,local,link,code)
    {
        this._id= Partnerships.getLastId()+1
        this.name=name
        this.image=image
        this.local=local
        this.link=link
        this.code=code
    }
    //id
  get id() {
    return this._id
  }

//name
get name() 
{
 return this._name
}

set name(newName) 
{
this._name = newName
}

//image
get image() 
{
 return this._image
}

set image(newImage) 
{
this._image = newImage
}

//local
get local() 
{
 return this._local
}

set local(newLocal) 
{
this._local = newLocal
}

//link
get link() 
{
 return this._link
}

set link(newLink) 
{
this._link = newLink
}

//
get code() 
{
 return this._code
}

set code(newCode) 
{
this._code = newCode
}
//get id
static getLastId() {
    let lastId = 0
    if(arrayPartnerships.length != 0) {
    lastId = arrayPartnerships[arrayPartnerships.length-1].id
    }
    return lastId
    }

}
window.onload = function () {
    //verificarPart()
    //updateParc()
    loginChances()
    loadPartFromStorage()
    renderTableParc()
    AdicionarParceria()
    

}
function AdicionarParceria()
{
    let formAddParc=document.getElementById("formAddParc")
    let nameParc=document.getElementById("nameParc")
    let ImagParc=document.getElementById("ImagParc")
    let localParc=document.getElementById("localParc")
    let linkParc=document.getElementById("linkParc")
    let codeParc=document.getElementById("codeParc")

    formAddParc.addEventListener("submit", function(){
        let name=nameParc.value
        let link= linkParc.value
        let image=ImagParc.value
        let local=localParc.value
        let code=codeParc.value
        //name,image,local,link,code
        let addParceria= new Partnerships(name,image,local,link,code)
        
        arrayPartnerships.push(addParceria)
        //colocar no storage
        localStorage.removeItem("Parcerias")
        localStorage.setItem("Parcerias", JSON.stringify(arrayPartnerships))
        ///
        renderTableParc()


    })
}
///carregar parcerias do storage para o array parcerias
function loadPartFromStorage()
{
   

      
            let tempParcArray = JSON.parse(localStorage.getItem("Parcerias"))
            for (var i = 0; i < tempParcArray.length; i++) 
            {
                
                //name,image,local,link,code
                let newParc =  new Partnerships(tempParcArray[i]._name, tempParcArray[i]._image,tempParcArray[i]._local,tempParcArray[i]._link,tempParcArray[i]._code)
                arrayPartnerships.push(newParc) 
                   
                  
            }
    
        
     
        
    
}
/*
//verificar parceria
function verificarPart()
{
    let b = false
if (localStorage.getItem("Parcerias")){
    loadPartFromStorage()
    b=true
        
                
}
if(b==false){

    console.log("ola")
    //parcerias adicionadas hardcode
    //name,image,local,link,code
    let newParc1= new Partnerships ("Google","http://knowtechtoday.com/wp-content/uploads/2018/03/google-apps-thumb-559_120517104011_0.jpg ","","https://pt.wikipedia.org/wiki/Google","")
    arrayPartnerships.push(newParc1)
    let newParc2= new Partnerships ("Facebook","http://knowtechtoday.com/wp-content/uploads/2018/03/google-apps-thumb-559_120517104011_0.jpg ","","https://pt.wikipedia.org/wiki/Google","")
    arrayPartnerships.push(newParc2)
    let newParc3= new Partnerships ("Youtube","http://knowtechtoday.com/wp-content/uploads/2018/03/google-apps-thumb-559_120517104011_0.jpg ","","https://pt.wikipedia.org/wiki/Google","")
    arrayPartnerships.push(newParc3)
    let newParc4= new Partnerships ("Youtube","http://knowtechtoday.com/wp-content/uploads/2018/03/google-apps-thumb-559_120517104011_0.jpg ","","https://pt.wikipedia.org/wiki/Google","")
    arrayPartnerships.push(newParc4)
    let newParc5= new Partnerships ("Youtube","http://knowtechtoday.com/wp-content/uploads/2018/03/google-apps-thumb-559_120517104011_0.jpg ","","https://pt.wikipedia.org/wiki/Google","")
    arrayPartnerships.push(newParc5)
    

    //colocar no storage
    localStorage.setItem("Parcerias", JSON.stringify(arrayPartnerships))
   
}}*/


// Function to render the Personality objects in the table
function renderTableParc() {
      
    let tableParc = document.getElementById("tableParc")

    let strHtml = ` <thead class="bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Imagem</th>
      <th scope="col">Local</th>
      <th scope="col">Link</th>
      
      <th scope="col">Butoes</th>
    </tr>
  </thead>
  <tbody>`

    for (let i = 0; i < arrayPartnerships.length; i++) {
        let d=1+i
        strHtml += "<tr>" +
        "<td>" + d + "</td>" +
        "<td>" + arrayPartnerships[i].name + "</td>" +
        "<td>" +`<img style="height: 50px; width: 80px;" src="${arrayPartnerships[i].image}" >`+ "</td>" +
        "<td>" + arrayPartnerships[i].local + "</td>" +
        "<td>" + arrayPartnerships[i].link + "</td>" +
       
        "<td>" +
        "<a id='" +arrayPartnerships[i]._id + "' class='edit'data-toggle='modal' data-target='#parcModalEdit'><i class='fas fa-edit'></i></a> " +
        "<a id='" + arrayPartnerships[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
        "<a id='" + arrayPartnerships[i]._id + "' class='view' data-toggle='modal' data-target='#parcModal'><i class='fas fa-eye'></i></a>" +
    "</td>" + 
        "</tr>"
    }
    strHtml += "</tbody>"

   tableParc.innerHTML = strHtml

   // Get all the remove links from the table
   let tdRemove = document.getElementsByClassName("remove")
   // For each link, add a listener to listen the click event
   for (let i = 0; i < tdRemove.length; i++) {
       tdRemove[i].addEventListener("click", function() {
           // By clicking in a specific partnership remove it from the array
           let parceriaId= tdRemove[i].getAttribute("id")
           removePartById(parceriaId)
           //atualizar storage
           localStorage.removeItem("Parcerias")
           localStorage.setItem("Parcerias", JSON.stringify(arrayPartnerships))

           renderTableParc()
       }) }

       // Get all the view links from the table
    let tdView = document.getElementsByClassName("view")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdView.length; i++) {
        tdView[i].addEventListener("click", function() {
            // By clicking in a specific game, view it in a modal
            let parceId = tdView[i].getAttribute("id")
            viewParcById(parceId)                
        })        
    }
     
     // Get all the edit links from the table
     let tdEdit = document.getElementsByClassName("edit")
     // For each link, add a listener to listen the click event
     for (let i = 0; i < tdEdit.length; i++) {
         tdEdit[i].addEventListener("click", function() {
             // By clicking in a specific game, edit in the form
             let parceId = tdEdit[i].getAttribute("id")
             editParceById(parceId)
                       
         })        
     }
       


}
// Remove part based on its ID
function removePartById(id) {
    for (let i = 0; i < arrayPartnerships.length; i++) {
        if(arrayPartnerships[i]._id == id) {
            arrayPartnerships.splice(i, 1)
        }                  
    }
}

// View game based on its ID
 //name,image,local,link,code
function viewParcById(id) {        
    for (let i = 0; i < arrayPartnerships.length; i++) {
        if(arrayPartnerships[i].id == id) {
            let  modalParcName=document.getElementById("modalParcName")
            let  modalParcLink=document.getElementById("modalParcLink")
            let  modalParcLocal=document.getElementById("modalParcLocal")
            let  modalparcCover=document.getElementById("modalparcCover")

            modalParcName.innerHTML= arrayPartnerships[i].name                
            modalParcLink.innerHTML = arrayPartnerships[i].link
            modalParcLocal.innerHTML =  arrayPartnerships[i].local
            modalparcCover.setAttribute("src", arrayPartnerships[i].image)                
        }                  
    }
}

// Edit game based on its ID
function editParceById(id) {    
    // Update global variable
  let modalparcEdiNome=document.getElementById("modalparcEdiNome")
  let modalparcEdiLocal=document.getElementById("modalparcEdiLocal")
  let modalparcEdiLink=document.getElementById("modalparcEdiLink")
  let modalparcEdiImag=document.getElementById("modalparcEdiImag")
  let modalparcEdiCover=document.getElementById("modalparcEdiCover")
  let btnEdit=document.getElementById("btnEdit")
  // Iterate from all the games and fill the form with the games data
    for (let i = 0; i < arrayPartnerships.length; i++) {
        if(arrayPartnerships[i].id == id) {
            modalparcEdiNome.setAttribute("value", arrayPartnerships[i].name)
            modalparcEdiLocal.setAttribute("value", arrayPartnerships[i].local)
            modalparcEdiLink.setAttribute("value", arrayPartnerships[i].link)
            modalparcEdiImag.setAttribute("value", arrayPartnerships[i].image)
            modalparcEdiCover.setAttribute("src", arrayPartnerships[i].image)
            btnEdit.addEventListener("click",function(){
                arrayPartnerships[i].name=modalparcEdiNome.value
                arrayPartnerships[i].local=modalparcEdiLocal.value
                arrayPartnerships[i].link=modalparcEdiLink.value
                arrayPartnerships[i].image= modalparcEdiImag.value
                modalparcEdiCover.setAttribute("src", arrayPartnerships[i].image)
                 //atualizar storage
                 localStorage.removeItem("Parcerias")
                 localStorage.setItem("Parcerias", JSON.stringify(arrayPartnerships))   
                 renderTableParc()
alert("A parceria foi editada")


            })
            
        }                  
    }
}
//função para aplicar as changes a navbar quando esta logado
function loginChances(){
   
    let verifyType
    
if(localStorage.LoggedUser){
    verifyType = JSON.parse(localStorage.getItem("LoggedUser"))

    let changeLogin = document.getElementById("textLogin")


    if (verifyType._type == "admin") {
    userType = "admin"

    changeLogin.innerHTML = `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" style="display:inline" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">` + verifyType._username + `</a> 
     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       <a class="dropdown-item" href="perfil.html">Perfil</a>
       <a class="dropdown-item" href="gerirEventos.html">Registar evento</a>   
       <a class="dropdown-item" href="gerirDocentes.html">Gerir Docentes</a>  
       <a class="dropdown-item" href="gerirParcerias.html">Gerir Parcerias</a>  
       <a class="dropdown-item" href="Admin.html">Definições</a>  
       <a class="dropdown-item" onclick="buttonLogOut()">Logout</a>         
       </div>
   </li>`
    }
    else if (verifyType._type == "teacher"){
     userType = "teacher"
     changeLogin.innerHTML = `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" style="display:inline" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">` + verifyType._username + `</a> 
     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       <a class="dropdown-item" href="perfil.html">Perfil</a>
       <a class="dropdown-item" href="gerirEventos.html">Registar evento</a>   
       <a class="dropdown-item" href="gerirDocentes.html">Gerir Docentes</a>  
       <a class="dropdown-item" href="gerirParcerias.html">Gerir Parcerias</a>  
       <a class="dropdown-item" onclick="buttonLogOut()">Logout</a>       
       </div>
   </li>`
    }
    else if(verifyType._type == "standard"){
     userType = "standard"
     changeLogin.innerHTML = `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" style="display:inline" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">` + verifyType._username + `</a> 
     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <a class="dropdown-item" href="perfil.html">Perfil</a>
       <a class="dropdown-item" onclick="buttonLogOut()">Logout</a>              
       </div>
   </li>`



    }   
}      
}
//função para dar logout
function buttonLogOut(){
    let changeLogin = document.getElementById("textLogin")  
    localStorage.removeItem("LoggedUser")
    changeLogin.innerHTML = "Login"
    location.reload(true);
    
    
}