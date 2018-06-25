let arrayEvents=[]
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
////////////class EVENTOS////////////
class Events{
    constructor(eventname,description,date,event_time,creat_time,state,space,category,responsable,image,coments,rating,views)
    {
        this._id=Events.getLastId()+1
        this.eventname=eventname
        this.description=description
        this.date=date
        this.event_time=event_time
        this.creat_time=creat_time
        this.state=state
        this.space=space
        this.category=category
        this.responsable=responsable
        this.image=image
        this.coments=coments
        this.rating=rating
        this.views=views

    }
//Id
    get id() {
        return this._id
        }

//Eventname
    get eventname()
     {
        return this._eventname
     }
       
    set eventname(newEventname) 
    {
        this._eventname = newEventname
    }

//Description
    get description()
     {
        return this._description
     }
       
    set description(newDescription)
     {
        this._description = newDescription
     }
     
//Date
    get date() 
     {
      return this._date
     }
   
    set date(newDate) 
    {
     this._date = newDate
    }

//Event_time
    get event_time() 
    {
     return this._event_time
    }
  
   set event_time(newEvent_time) 
   {
    this._event_time = newEvent_time
   }

//Creat_time
   get creat_time() 
   {
    return this._creat_time
   }
 
  set creat_time(newCreat_time) 
  {
   this._creat_time = newCreat_time
  }

  //State
  get state() 
     {
      return this._state
     }
   
    set state(newState) 
    {
     this._state = newState
    }

    //space
    get space() 
    {
     return this._space
    }
  
   set space(newSpace) 
   {
    this._space = newSpace
   } 

   //Category
   get category() 
   {
    return this._category
   }
 
  set category(newCategory) 
  {
   this._category = newCategory
  } 

  //responsable

  get responsable() 
   {
    return this._responsable
   }
 
  set responsable(newResponsable) 
  {
   this._responsable = newResponsable
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

//coments
get coments() 
{
 return this._coments
}

set coments(newComents) 
{
this._coments = newComents
}

//rating
get rating() 
{
 return this._rating
}

set rating(newRating) 
{
this._rating = newRating
}

//views
get views() 
{
 return this._views
}

set views(newViews) 
{
this._views = newViews
}


  static getLastId() {
    let lastId = 0
    if(arrayEvents.length != 0) {
    lastId = arrayEvents[arrayEvents.length-1].id
    }
    return lastId
    }
   
}

window.onload = function () {
    
    loadEveFromStorage()
    renderTableEve()
    AdicionarEvento()

}

function AdicionarEvento()
{
    let formAddEve=document.getElementById("formAddEve")
    let nameEve=document.getElementById("nameEve")
    let ImagEve=document.getElementById("ImagEve")
    let localEve=document.getElementById("localEve")
    let descriçãoEve=document.getElementById("descriçãoEve")
    let dataEve=document.getElementById("dataEve")
    let horasEve=document.getElementById("horasEve")
    let docEve=document.getElementById("docEve")

    selectoresDoc()
    formAddEve.addEventListener("submit", function(){
        let name= nameEve.value
        let image= ImagEve.value 
        let local=localEve.value
        let desc=descriçãoEve.value
        let data=dataEve.value
        let horas=horasEve.value
        let doc=docEve.value
        //(eventname * ,description * ,date * ,event_time * ,creat_time,state,space * ,category ,responsable,image * ,coments,rating,views)
        let addEvento= new Events(name, desc, data, horas, "", "", local, "", doc, image, "","","")
        
        arrayEvents.push(addEvento)
        //colocar no storage
        localStorage.removeItem("Event")
        localStorage.setItem("Event", JSON.stringify(arrayEvents))
        ///
        renderTableEve()


    })
}

///carregar eventos do storage para o array eventos
function loadEveFromStorage()
{
   

      
            let tempEveArray = JSON.parse(localStorage.getItem("Event"))
            for (var i = 0; i < tempEveArray.length; i++) 
            {
                
                // //(eventname * ,description * ,date * ,event_time * ,creat_time,state,space * ,category ,responsable,image * ,coments,rating,views)
                let newEvent =  new Events(tempEveArray[i]._eventname, tempEveArray[i]._description,tempEveArray[i]._date,tempEveArray[i]._event_time,tempEveArray[i]._creat_time,tempEveArray[i]._state,tempEveArray[i]._space,tempEveArray[i]._category,tempEveArray[i]._responsable,tempEveArray[i]._image,tempEveArray[i]._coments,tempEveArray[i]._rating,tempEveArray[i]._views)
               arrayEvents.push(newEvent) 
                   
                  
            }
    
        
     
        
    
}
//caregar a tabela de eventos

// Function to render the Personality objects in the table
function renderTableEve() {
      
    let tableEve = document.getElementById("tableEve")
     //(eventname * ,description * ,date * ,event_time * ,creat_time,state,space * ,category ,responsable,image * ,coments,rating,views)
    let strHtml = ` <thead class="bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Imagem</th>
      <th scope="col">Local</th>
      <th scope="col">Decrição</th>
      <th scope="col">Data</th>
      <th scope="col">Horas</th>
      <th scope="col">Responsavel</th>

      
      <th scope="col">Butoes</th>
    </tr>
  </thead>
  <tbody>`

    for (let i = 0; i < arrayEvents.length; i++) {
        let d=1+i
        strHtml += "<tr>" +
        "<td>" + d + "</td>" +
        "<td>" + arrayEvents[i].eventname + "</td>" +
        "<td>" +`<img style="height: 50px; width: 80px;" src="${arrayEvents[i].image}" >`+ "</td>" +
        "<td>" + arrayEvents[i].space + "</td>" +
        "<td>" + arrayEvents[i].description + "</td>" +
        "<td>" + arrayEvents[i].date + "</td>" +
        "<td>" + arrayEvents[i].event_time+ "</td>" +
        "<td>" + arrayEvents[i].responsable + "</td>" +
       
        "<td>" +
        "<a id='" +arrayEvents[i]._id + "' class='edit'data-toggle='modal' data-target='#eveModalEdit'><i class='fas fa-edit'></i></a> " +
        "<a id='" + arrayEvents[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
        "<a id='" + arrayEvents[i]._id + "' class='view' data-toggle='modal' data-target='#eveModal'><i class='fas fa-eye'></i></a>" +
    "</td>" + 
        "</tr>"
    }
    strHtml += "</tbody>"

   tableEve.innerHTML = strHtml

   // Get all the remove links from the table
   let tdRemove = document.getElementsByClassName("remove")
   // For each link, add a listener to listen the click event
   for (let i = 0; i < tdRemove.length; i++) {
       tdRemove[i].addEventListener("click", function() {
           // By clicking in a specific partnership remove it from the array
           let eventoId= tdRemove[i].getAttribute("id")
           removeEveById(eventoId)
           //atualizar storage
           localStorage.removeItem("Event")
           localStorage.setItem("Event", JSON.stringify(arrayEvents))

           renderTableEve()
       }) }

       // Get all the view links from the table
    let tdView = document.getElementsByClassName("view")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdView.length; i++) {
        tdView[i].addEventListener("click", function() {
            // By clicking in a specific event, view it in a modal
            let eveId = tdView[i].getAttribute("id")
            viewEveById(eveId)                
        })        
    }

     // Get all the edit links from the table
     let tdEdit = document.getElementsByClassName("edit")
     // For each link, add a listener to listen the click event
     for (let i = 0; i < tdEdit.length; i++) {
         tdEdit[i].addEventListener("click", function() {
             // By clicking in a specific event, edit in the form
             let eveId = tdEdit[i].getAttribute("id")
             editEveById(eveId)
                     
         })        
     }

}

// Remove event based on its ID
function removeEveById(id) {
    for (let i = 0; i < arrayEvents.length; i++) {
        if(arrayEvents[i]._id == id) {
            arrayEvents.splice(i, 1)
        }                  
    }
}

// View event based on its ID
 //(eventname * ,description * ,date * ,event_time * ,creat_time,state,space * ,category ,responsable,image * ,coments,rating,views)
 function viewEveById(id) {        
    for (let i = 0; i < arrayEvents.length; i++) {
        if(arrayEvents[i].id == id) {
            let modalEveLocal=document.getElementById("modalEveLocal")
            let  modalEveName=document.getElementById("modalEveName")
            let  modalEveData=document.getElementById("modalEveData")
            let  modalEveHoras=document.getElementById("modalEveHoras")
            let  modalEveResp=document.getElementById("modalEveResp")
            let modalEvedescrição=document.getElementById("modalEvedescrição")
            let modalEveCover=document.getElementById("modalEveCover")

            modalEveLocal.innerHTML=arrayEvents[i].space
            modalEveName.innerHTML= arrayEvents[i].eventname              
            modalEveData.innerHTML = arrayEvents[i].date
            modalEveHoras.innerHTML =  arrayEvents[i].event_time
            modalEveResp.innerHTML=arrayEvents[i].responsable
            modalEvedescrição.innerHTML=arrayEvents[i].description
            modalEveCover.setAttribute("src", arrayEvents[i].image)                
        }                  
    }
}


// Edit game based on its ID
function  editEveById(id) {    
    // Update global variable
  let modalEveEdiNome=document.getElementById("modalEveEdiNome")
  let modalEveEdiLocal=document.getElementById("modalEveEdiLocal")
  let modalEveEdiData=document.getElementById("modalEveEdiData")
  let modalEveEdiTime=document.getElementById("modalEveEdiTime")
  let modalEveEdiResponsavel=document.getElementById("modalEveEdiResponsavel")
  let modalEveEdiDesc=document.getElementById("modalEveEdiDesc")
  let modalEveEdiImag=document.getElementById("modalEveEdiImag")
  let modalEveEdiCover=document.getElementById("modalEveEdiCover")

  let btnEdit=document.getElementById("btnEdit")
  // Iterate from all the games and fill the form with the games data
    for (let i = 0; i < arrayEvents.length; i++) {
        if(arrayEvents[i].id == id) {
            modalEveEdiNome.setAttribute("value", arrayEvents[i].eventname)
            modalEveEdiLocal.setAttribute("value", arrayEvents[i].space)
            modalEveEdiData.setAttribute("value", arrayEvents[i].date)
            modalEveEdiTime.setAttribute("value", arrayEvents[i].event_time)
            modalEveEdiResponsavel.setAttribute("value", arrayEvents[i].responsable)
            modalEveEdiDesc.setAttribute("value", arrayEvents[i].description)
            modalEveEdiImag.setAttribute("value", arrayEvents[i].image)
            modalEveEdiCover.setAttribute("src", arrayEvents[i].image)
            btnEdit.addEventListener("click",function(){
                arrayEvents[i].eventname= modalEveEdiNome.value
                arrayEvents[i].space=modalEveEdiLocal.value
                arrayEvents[i].date= modalEveEdiData.value
                arrayEvents[i].event_time= modalEveEdiTime.value
                arrayEvents[i].responsable= modalEveEdiResponsavel.value
                arrayEvents[i].description=modalEveEdiDesc.value
                arrayEvents[i].image=modalEveEdiImag.value

                modalEveEdiCover.setAttribute("src", arrayEvents[i].image)
                 //atualizar storage
                 localStorage.removeItem("Event")
                 localStorage.setItem("Event", JSON.stringify(arrayEvents))   
                 renderTableEve()
                 
                 alertEditado()



            })
            
        }                  
    }
    
}
function alertEditado(){
alert("O evento foi editado")}
//função para aplicar as changes a navbar quando esta logado
function loginChangesNav(){
   
    let verifyType
    
if(localStorage.LoggedUser){
    verifyType = JSON.parse(localStorage.getItem("LoggedUser"))

    let changeLogin = document.getElementById("textLogin")


    if (verifyType._type == "admin") {
    userType = "admin"

    changeLogin.innerHTML = `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" style="display:inline" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">` + verifyType._username + `</a> 
     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       <a class="dropdown-item" href="#">Perfil</a>
       <a class="dropdown-item" href="gerirEventos.html">Gerir Eventos</a>   
       <a class="dropdown-item" href="gerirDocentes.html">Gerir Docentes</a>  
       <a class="dropdown-item" href="gerirParcerias.html">Gerir Parcerias</a>  
       <a class="dropdown-item" href="#">Definições</a>  
       <a class="dropdown-item" onclick="buttonLogOut()">Logout</a>         
       </div>
   </li>`
    }
    else if (verifyType._type == "teacher"){
     userType = "teacher"
     changeLogin.innerHTML = `<li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" style="display:inline" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">` + verifyType._username + `</a> 
     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       <a class="dropdown-item" href="#">Perfil</a>
       <a class="dropdown-item" href="gerirEventos.html">Gerir Eventos</a>   
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
       <a class="dropdown-item" href="#">Perfil</a>
       <a class="dropdown-item" onclick="buttonLogOut()">Logout</a>             
       </div>
   </li>`



    }   
}}
//função para dar logout
function buttonLogOut(){
    let changeLogin = document.getElementById("textLogin")  
    localStorage.removeItem("LoggedUser")
    changeLogin.innerHTML = "Login"
    location.reload(true);
    
    
}
let strSeletores=""
//selectoresDoc
function selectoresDoc()
{
    loadDocFromStorage()
    //let select=document.getElementById("docEve")
    console.log("hey")
    console.log(arrayTeachers)
    for (let index = 0; index < arrayTeachers.length; index++) {
        console.log("hey")
      strSeletores+=`<option value="${arrayTeachers[index]._name}">${arrayTeachers[index]._name}</option>`
      console.log( strSeletores)
    }
    
    docEve.innerHTML=strSeletores
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