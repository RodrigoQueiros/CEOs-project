
/////class Tag
let arrayTags=[]
class Tag{
    constructor(tagname)
    {
        this._id=Tag.getLastId()+1
        this.tagname=tagname
    }

    //Id
    get id() {
        return this._id
    }
    ///tag name
    get tagname()
    {
        return this._tagname  
    }
    set tagname(newTagname)
    {
        this._tagname=newTagname
    }


    static getLastId() {
        
        let lastId = 0
        if (arrayTags.length != 0) {
            lastId =arrayTags[arrayTags.length - 1].id
        }
        return lastId
    }
}

let arrayEvents=[]
let myUsers = []

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
    //verificar se um evento ja tinha sido clicado
    if(localStorage.getItem("EventClick"))
    {
     localStorage.removeItem("EventClick")
    }
//verificar se ja ha eventos predefinidos


let b = false
if (localStorage.getItem("Event")){
    loadEventFromStorage()
    for (var i = 0; i < arrayEvents.length; i++) {
        
        if (arrayEvents[i].eventname != "") {
            
            b = true
            
        }
    }

        
                
}
if(b==false){

    
    //eventos
    let eventoUm= new Events ("ioAcademy Challenge","O ioAcademy Challenge é apoiado pela ESMAD e é direcionada para um público estudantil!!!","27-06-2018","","","","ESMAD","WorkShops","","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/35923109_387772041735241_8475168770883584000_o.jpg?_nc_cat=0&oh=25580f9bf5716027728ad293092c1e16&oe=5BB2D1EF","","","")
        arrayEvents.push(eventoUm)
        let eventoDois= new Events ("WIT IAMCP ","A WIT tem como objectivo promover ajuda mútua para atingir os objetivos pessoais e profissionais","30-06-2018","","","","Rua Passos Manuel, 223 - 4º Andar,Porto","Seminario","","https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46100074%2F210400993975%2F1%2Foriginal.jpg?w=800&auto=compress&rect=1%2C159%2C1020%2C510&s=8f93bcf54ac1f5ca6d008f1e639a3718","","","")
        arrayEvents.push(eventoDois)
        let eventoTres= new Events ("Web Summit","Volunteering at Web Summit is a surefire way of making new connections and learning new skills","27-06-2018","","","","ALTICE ARENA, LISBON","Encontros","","https://external.fopo3-1.fna.fbcdn.net/safe_image.php?d=AQD1935O8ZiJnN6a&w=540&h=282&url=https%3A%2F%2Fwebsummit.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fsportsfile-web-500x300.jpg&cfs=1&upscale=1&fallback=news_d_placeholder_publisher&_nc_hash=AQCIu_ztG0vc6cT6","","","")
        arrayEvents.push(eventoTres)
         console.log(arrayEvents)

    //colocar no storage
    localStorage.setItem("Event", JSON.stringify(arrayEvents))
   
}
loginChances()
events()
updateTagsFiltro()
updateFiltro()
//loginChangesPagEvent()


}
//função que imprime os eventos
function events()
{
    let strHtmlCard = ""
    //iterar sobre o array de eventos
    for(let i=arrayEvents.length-1;i>=0;i--)
    {
        if(i==arrayEvents.length-1){
            strHtmlCard += `<h5 style="display: block;color: #1D76CE">Eventos:</h5>
            <div class="row" >`
        }
        strHtmlCard += `<div class="card m-3" style="width: 40rem; border-radius:5px;" >
        <a id="${arrayEvents[i].id}" class="eventoclick" href="Evento.html" >
        <div class="row " >
          <div class="col-md-4" >
              <img src="${arrayEvents[i].image}" style="width:100%;height:100%; border-radius:5px 0px 0px 5px" >
            </div>
            <div class="col-md-8">
              <div id="NomeData" class="row ">
                 <div id="eventoNome" class="mr-auto col-md-6">
                 <h5 class="" style="margin-top:10px">${arrayEvents[i].eventname}</h5>
                 </div>
                 <div id="eventoData" class="mr-2 col-md-4" style=" font-size:12px;">
                 <p style="float:right;">${arrayEvents[i].date}</p>
                 </div>
                
              </div>
              <div id="descrição" class="row col-md-12">
              <p style="height:40px">${arrayEvents[i].description}</p>
              </div>
              <div id="localição" class"row col-md-12">
              <p>${arrayEvents[i].space}</p>
              </div>

            </div>
        
          </div>
          </a>
        </div>
        
        `
        // Fecha a linha
        if(i==0) {
            strHtmlCard += `</div>`    
        }
        
        
    }
    let eventsCatalog = document.getElementById("eventsPagCatalog")
    eventsCatalog.innerHTML = strHtmlCard
    ////
    let arrayClick=document.getElementsByClassName("eventoclick")
    for(let i=0;i<arrayClick.length;i++)
    {
        arrayClick[i].addEventListener("click",
        function (){
                let eventId=arrayClick[i].id
                localStorage.setItem("eventId", eventId)
                console.log("ola")
        
                 })
    }
    
}

function loginChangesPagEvent(){
   
    let verifyType
    
if(localStorage.LoggedUser){
    verifyType = JSON.parse(localStorage.getItem("LoggedUser"))

    let AddEvent = document.getElementById("Admin/Doc/AddEvent")


    if (verifyType._type == "admin") {
    userType = "admin"

    AddEvent.innerHTML = `
    <h5 style="display: block;color: #1D76CE">Adicionar Evento:</h5>
    <div class="row" >
    
    <div class="form-group" >
     <form id="formEvent">
     <label for="eventName">Nome</label>
     <input type="text" name="" id="eventName" class="form-control" placeholder="required" aria-describedby="helpId" required>

     <label for="eventDescription">Descrição</label>
     <input type="text" name="" id="eventDescription" class="form-control" placeholder="required" aria-describedby="helpId" required>
     
     <label for="eventDate">Data</label>
     <input type="date" name="" id="eventDate" class="form-control" placeholder="required" aria-describedby="helpId" required>

     <label for="eventTime">Horas</label>
     <input type="text" name="" id="eventTime" class="form-control" placeholder="" aria-describedby="helpId">

     <!--
     <label for="eventCreatTime">Horas de criação do evento</label>
     <input type="text" name="" id="eventCreatTime" class="form-control" placeholder="" aria-describedby="helpId">
      
     <label for="eventTime">Horas</label>
     <input type="text" name="" id="eventTime" class="form-control" placeholder="" aria-describedby="helpId">
    
     <label for="eventState">Estado</label>
     <input type="text" name="" id="eventState" class="form-control" placeholder="" aria-describedby="helpId">
    -->

    <label for="eventSpace">local</label>
     <input type="text" name="" id="eventSpace" class="form-control" placeholder="" aria-describedby="helpId" required>
     
     <!--
     <label for="eventCategory">Categoria</label>
     <input type="text" name="" id="eventCategory" class="form-control" placeholder="" aria-describedby="helpId">

     <label for="eventResponsable">Responsavel</label>
     <input type="text" name="" id="eventResponsable" class="form-control" placeholder="" aria-describedby="helpId">
      -->

    <label for="eventImage">Foto Link:</label>
    <input type="url" name="" id="eventImage" class="form-control" placeholder="required" aria-describedby="helpId" required>
    <br>
    <button type="submit" class="btn btn-primary mb-2">Submeter</button>


<form>
   </div>`
    
   AdicionarEvent()


    }
    else if (verifyType._type == "teacher"){
     userType = "teacher"
     AddEvent.innerHTML = `<h5 style="display: block;color: #1D76CE">Adicionar Evento:</h5>
     <div class="row" >
     
     <div class="form-group" >
      <form id="formEvent">
      <label for="eventName">Nome</label>
      <input type="text" name="" id="eventName" class="form-control" placeholder="required" aria-describedby="helpId" required>
 
      <label for="eventDescription">Descrição</label>
      <input type="text" name="" id="eventDescription" class="form-control" placeholder="required" aria-describedby="helpId" required>
      
      <label for="eventDate">Data</label>
      <input type="date" name="" id="eventDate" class="form-control" placeholder="required" aria-describedby="helpId" required>
 
      <label for="eventTime">Horas</label>
      <input type="text" name="" id="eventTime" class="form-control" placeholder="" aria-describedby="helpId">
 
      <!--
      <label for="eventCreatTime">Horas de criação do evento</label>
      <input type="text" name="" id="eventCreatTime" class="form-control" placeholder="" aria-describedby="helpId">
       
      <label for="eventTime">Horas</label>
      <input type="text" name="" id="eventTime" class="form-control" placeholder="" aria-describedby="helpId">
     
      <label for="eventState">Estado</label>
      <input type="text" name="" id="eventState" class="form-control" placeholder="" aria-describedby="helpId">
     -->
 
     <label for="eventSpace">local</label>
      <input type="text" name="" id="eventSpace" class="form-control" placeholder="" aria-describedby="helpId" required>
      
      <!--
      <label for="eventCategory">Categoria</label>
      <input type="text" name="" id="eventCategory" class="form-control" placeholder="" aria-describedby="helpId">
 
      <label for="eventResponsable">Responsavel</label>
      <input type="text" name="" id="eventResponsable" class="form-control" placeholder="" aria-describedby="helpId">
       -->
 
     <label for="eventImage">Foto Link:</label>
     <input type="url" name="" id="eventImage" class="form-control" placeholder="required" aria-describedby="helpId" required>
     <br>
     <button type="submit" class="btn btn-primary mb-2">Submeter</button>
 
 
 <form>
    </div>`
    AdicionarEvent()
     
    }
    else if(verifyType._type == "standard"){
     userType = "standard"
     AddEvent.innerHTML =""



    }   
}
}
//função para adicionar o evento ao array de eventos e passalo para o local storage
function  AdicionarEvent(){

let formEvent=document.getElementById("formEvent")
let eventName=document.getElementById("eventName")
let eventDescription=document.getElementById("eventDescription")
let eventDate=document.getElementById("eventDate")
let eventSpace= document.getElementById("eventSpace")
let eventImage=document.getElementById("eventImage")
console.log("aaaaaaa")
formEvent.addEventListener("submit",function(event){
    console.log("aaaaaaa")
    let newPrevEventAdd= new Events (eventName.value,eventDescription.value,eventDate.value,"","","",eventSpace.value,"","", eventImage.value,"","","")
arrayEvents.push(newPrevEventAdd)
console.log(arrayEvents)
//atualizar no storage
localStorage.setItem("Event", JSON.stringify(arrayEvents))
event.preventDefault()
events()
})
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
//carregar eventos do storage
function loadEventFromStorage() {

    if(localStorage.Event){
        let tempEveArray = JSON.parse(localStorage.getItem("Event"))
        for (var i = 0; i < tempEveArray.length; i++) {
            
            let newEvent =  new Events(tempEveArray[i]._eventname, tempEveArray[i]._description,tempEveArray[i]._date,"","","",tempEveArray[i]._space,tempEveArray[i]._category,"",tempEveArray[i]._image,"","","")
            arrayEvents.push(newEvent)    
              
        }

    }
    
}
//carregar administrador
function loadUsersFromStorage() {

    if(localStorage.User){
        let tempArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempArray.length; i++) {
            
            let newUser =  new User(tempArray[i]._username, tempArray[i]._password,tempArray[i]._type,tempArray[i]._email)
            myUsers.push(newUser)    
              
        }

    }
    
}

//função para carregar os elementos do filtro do storage caso eles existam
function updateFiltro()
{
    let eventNameFilt=""
    let eventDateFilt=""
    let eventTagFilt=""
    ////eventName
    if(localStorage.eventname)
    {
        eventNameFilt=JSON.parse(localStorage.getItem("eventname"))
    }
    
  
    ///eventDate
    if(localStorage.eventDate)
    {
        eventDateFilt=JSON.parse(localStorage.getItem("eventDate"))   
    }

   
    //eventTag
    if(localStorage.filterTag)
    {
        eventTagFilt=JSON.parse(localStorage.getItem("filterTag"))  
    }


    ///substituir no filtro
     let eventName=document.getElementById("eventName")
     let eventDate=document.getElementById("eventDate")
     let filterTag=document.getElementById("filterTag")
     let btnFiltroEvent=document.getElementById("btnFiltroEvent")

     eventName.value=eventNameFilt
     eventDate.value=eventDateFilt
     filterTag.value=eventTagFilt
 console.log(filterTag.value)
    //E carregar filtro
    btnFiltroEvent.addEventListener("click", function(){
      
            let strHtmlCard = ""
    //iterar sobre o array de eventos
    let b=0
    for(let i=arrayEvents.length-1;i>=0;i--)
    {
        if((eventName.value==arrayEvents[i].eventname||eventName.value=="") && (eventDate.value==arrayEvents[i].date||eventDate.value=="") && (filterTag.value==arrayEvents[i].category||filterTag.value==""))
        {
       console.log("id: "+arrayEvents[i].id)
        if(i==arrayEvents.length-1){
            strHtmlCard += `<h5 style="display: block;color: #1D76CE">Eventos:</h5>
            <div class="row" >`
        }
        strHtmlCard += `<div class="card m-3" style="width: 40rem; border-radius:5px;" >
        <a id="${arrayEvents[i].id}" class="eventoclick" href="Evento.html" >
        <div class="row " >
          <div class="col-md-4" >
              <img src="${arrayEvents[i].image}" style="width:100%;height:100%; border-radius:5px 0px 0px 5px" >
            </div>
            <div class="col-md-8">
              <div id="NomeData" class="row ">
                 <div id="eventoNome" class="mr-auto col-md-6">
                 <h5 class="" style="margin-top:10px">${arrayEvents[i].eventname}</h5>
                 </div>
                 <div id="eventoData" class="mr-2 col-md-4" style=" font-size:12px;">
                 <p style="float:right;">${arrayEvents[i].date}</p>
                 </div>
                
              </div>
              <div id="descrição" class="row col-md-12">
              <p style="height:40px">${arrayEvents[i].description}</p>
              </div>
              <div id="localição" class"row col-md-12">
              <p>${arrayEvents[i].space}</p>
              </div>

            </div>
        
          </div>
          </a>
        </div>
        
        `
        // Fecha a linha
        if(i==0) {
            strHtmlCard += `</div>`    
        }
        
        
    }
    let eventsCatalog = document.getElementById("eventsPagCatalog")
    eventsCatalog.innerHTML = strHtmlCard
        }
    
    
    
        ////
        let arrayClick=document.getElementsByClassName("eventoclick")
        for(let i=0;i<arrayClick.length;i++)
        {
            arrayClick[i].addEventListener("click",
            function (){
                    let eventId = arrayClick[i].id 
                    console.log(eventId)
                    localStorage.setItem("eventId", eventId)
                    console.log("ola")
            
                     })
        }}
    )

   
}
//função update tags do filtro
function updateTagsFiltro()
{
    let filterTag=document.getElementById("filterTag")
    loadTagsFromStorage()
    let strTagFiltro=""
    console.log(arrayTags)
    for(let i=0;i<arrayTags.length;i++)
    {
        strTagFiltro+= `<option value="${arrayTags[i]._tagname}">${arrayTags[i]._tagname}</option>`
    }
    filterTag.innerHTML=strTagFiltro
}
//loadTagsFromStorage
function loadTagsFromStorage(){
     
    
    arrayTags=[]
    let tempTagsArray = JSON.parse(localStorage.getItem("Tags"))
        for (var i = 0; i < tempTagsArray.length; i++) 
        {
            //tagname
            let newtag =  new Tag(tempTagsArray[i]._tagname)
            arrayTags.push(newtag)    
              
        }
    
    
}