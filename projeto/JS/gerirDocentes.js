//############ Class teachers ############
let  arrayTeachers=[]
class Teachers{
    constructor(name,photo,formation,uc,shortCV)
    {
        this._id= Teachers.getLastId()+1
        this.name=name
        this.photo=photo
        this.formation=formation
        this.uc=uc
        this.shortCV=shortCV
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

//photo
get photo() 
{
 return this._photo
}

set photo(newPhoto) 
{
this._photo = newPhoto
}

//formation
get formation() 
{
 return this._formation
}

set formation(newFormation) 
{
this._formation = newFormation
}

//uc
get uc() 
{
 return this._uc
}

set uc(newUc) 
{
this._uc = newUc
}

//shortCV
get shortCV() 
{
 return this._shortCV
}

set shortCV(newShortCV) 
{
this._shortCV = newShortCV
}

     //get id
static getLastId() {
    let lastId = 0
    if(arrayTeachers.length != 0) {
    lastId = arrayTeachers[arrayTeachers.length-1].id
    }
    return lastId
    }
}
window.onload = function () {
    loginChances()
    loadDocFromStorage()
    renderTableDoc()
    AdicionarDocente()
    

}
function AdicionarDocente()
{
    let formAddDoc=document.getElementById("formAddDoc")
    let nameDoc=document.getElementById("nameDoc")
    let ImagDoc=document.getElementById("ImagDoc")
    let FormDoc=document.getElementById("FormDoc")
    let uniDoc=document.getElementById("UniDoc")
    let shortCVDoc=document.getElementById("shortCVDoc")

    formAddDoc.addEventListener("submit", function(){
        let name=nameDoc.value
        let Imag= ImagDoc.value
        let Form= FormDoc.value
        let UniDoc= uniDoc.value
        let ShortCVDoc= shortCVDoc.value
        //name,photo,formaçao,Uc,short cv
        let addDoc= new Teachers(name,Imag,Form,UniDoc,ShortCVDoc)
        
        arrayTeachers.push(addDoc)
        console.log( arrayTeachers)
        //colocar no storage
        localStorage.removeItem("Docentes")
        localStorage.setItem("Docentes", JSON.stringify(arrayTeachers))
        ///
        renderTableDoc()


    })
}
//selectoresDoc
function selectoresDoc()
{
    let select=document.getElementById("docEve")
    let strSeletores=""
    for(let i=0;i<arrayTeachers;i++)
    {
      strSeletores+=`option value="volvo">${arrayTeachers[i]._name}</option>`
    }
}
///carregar Docentes do storage para o arrayTeachers
function loadDocFromStorage()
{
   

      
            let tempDocArray = JSON.parse(localStorage.getItem("Docentes"))
            for (var i = 0; i < tempDocArray.length; i++) 
            {
                
                //name,photo,formaçao,Uc,short cv
                let newDocc =  new Teachers(tempDocArray[i]._name, tempDocArray[i]._photo,tempDocArray[i]._formation,tempDocArray[i]._uc,tempDocArray[i]._shortCV)
                arrayTeachers.push(newDocc) 
                   
                  
            }
    
        
     
        
    
}
///função de atualizar a tabela
function   renderTableDoc() {
      
    let tableDoc= document.getElementById("tableDoce")

    let strHtml = ` <thead class="bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Imagem</th>
      <th scope="col">Formação</th>
      <th scope="col">Uc</th>
      
      <th scope="col">Butoes</th>
    </tr>
  </thead>
  <tbody>`

    for (let i = 0; i < arrayTeachers.length; i++) {
        let d=1+i
        strHtml += "<tr>" +
        "<td>" + d + "</td>" +
        "<td>" + arrayTeachers[i].name + "</td>" +
        "<td>" +`<img style="height: 50px; width: 80px;" src="${arrayTeachers[i].photo}" >`+ "</td>" +
        "<td>" + arrayTeachers[i].formation + "</td>" +
        "<td>" + arrayTeachers[i].uc + "</td>" +
       
        "<td>" +
        "<a id='" +arrayTeachers[i]._id + "' class='edit'data-toggle='modal' data-target='#parcModalEdit'><i class='fas fa-edit'></i></a> " +
        "<a id='" + arrayTeachers[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
        "<a id='" + arrayTeachers[i]._id + "' class='view' data-toggle='modal' data-target='#parcModal'><i class='fas fa-eye'></i></a>" +
    "</td>" + 
        "</tr>"
    }
    strHtml += "</tbody>"

  tableDoc.innerHTML = strHtml



  // Get all the remove links from the table
  let tdRemove = document.getElementsByClassName("remove")
  // For each link, add a listener to listen the click event
  for (let i = 0; i < tdRemove.length; i++) {
      tdRemove[i].addEventListener("click", function() {
          // By clicking in a specific teacher remove it from the array
          let docId= tdRemove[i].getAttribute("id")
          removeDocById(docId)
          //atualizar storage
          localStorage.removeItem("Docentes")
          localStorage.setItem("Docentes", JSON.stringify(arrayTeachers))

          renderTableDoc()
      }) }

 // Get all the view links from the table
 let tdView = document.getElementsByClassName("view")
 // For each link, add a listener to listen the click event
 for (let i = 0; i < tdView.length; i++) {
     tdView[i].addEventListener("click", function() {
         // By clicking in a specific teacher, view it in a modal
         let docId = tdView[i].getAttribute("id")
         viewDocById(docId)                
     })        
 }

  // Get all the edit links from the table
  let tdEdit = document.getElementsByClassName("edit")
  // For each link, add a listener to listen the click event
  for (let i = 0; i < tdEdit.length; i++) {
      tdEdit[i].addEventListener("click", function() {
          // By clicking in a specific game, edit in the form
          let docId = tdEdit[i].getAttribute("id")
          editDocById(docId)
                    
      })        
  }

}

// Remove doc based on its ID
function removeDocById(id) {
    for (let i = 0; i < arrayTeachers.length; i++) {
        if(arrayTeachers[i]._id == id) {
            arrayTeachers.splice(i, 1)
        }                  
    }
}

// View doc based on its ID
 //name,photo,formaçao,Uc,short cv
 function viewDocById(id) {        
    for (let i = 0; i < arrayTeachers.length; i++) {
        if(arrayTeachers[i].id == id) {
            let  modalDocName=document.getElementById("modalDocName")
            let  modalDocUc=document.getElementById("modalDocUc")
            let   modalDocFormação=document.getElementById("modalDocFormação")
            let  modalDocCover=document.getElementById("modalDocCover")
            let  modalDocShort=document.getElementById("modalDocShort")

            modalDocName.innerHTML= arrayTeachers[i].name                
            modalDocUc.innerHTML = arrayTeachers[i].uc
            modalDocFormação.innerHTML =  arrayTeachers[i].formation
           modalDocShort.innerHTML= arrayTeachers[i].shortCV
            modalDocCover.setAttribute("src", arrayTeachers[i].photo)                
        }                  
    }
    
}


// Edit game based on its ID
function editDocById(id) {    
    // Update global variable
     //name,photo,formaçao,Uc,short cv
  let modalDoccEdiNome=document.getElementById("modalDoccEdiNome")
  let modalDoccEdiformaçao=document.getElementById("modalDoccEdiformaçao")
  let modalDoccEdiUc=document.getElementById("modalDoccEdiUc")
  let modalDoccEdiShort=document.getElementById("modalDoccEdiShort")
  let modalDoccEdiphoto=document.getElementById("modalDoccEdiphoto")
  let modalDoccEdiCover=document.getElementById("modalDoccEdiCover")
  let btnEdit=document.getElementById("btnEdit")
  // Iterate from all the teachers and fill the form with the teachers data
    for (let i = 0; i < arrayTeachers.length; i++) {
        if(arrayTeachers[i].id == id) {
            modalDoccEdiNome.setAttribute("value", arrayTeachers[i].name)
            modalDoccEdiformaçao.setAttribute("value", arrayTeachers[i].formation)
            modalDoccEdiUc.setAttribute("value", arrayTeachers[i].uc)
            modalDoccEdiShort.setAttribute("value", arrayTeachers[i].shortCV)
            modalDoccEdiphoto.setAttribute("value", arrayTeachers[i].photo)
            modalDoccEdiCover.setAttribute("src", arrayTeachers[i].photo)
            btnEdit.addEventListener("click",function(){
                arrayTeachers[i].name=modalDoccEdiNome.value
                arrayTeachers[i].formation= modalDoccEdiformaçao.value
                arrayTeachers[i].uc= modalDoccEdiUc.value
                arrayTeachers[i].shortCV=  modalDoccEdiShort.value
                arrayTeachers[i].photo=modalDoccEdiphoto.value
                modalDoccEdiCover.setAttribute("src", arrayTeachers[i].photo)
                 //atualizar storage
                 localStorage.removeItem("Docentes")
                 localStorage.setItem("Docentes", JSON.stringify(arrayTeachers))   
                 renderTableDoc()
                 alert("O Docente foi editado")


            })
            
        }                  
    }
}
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