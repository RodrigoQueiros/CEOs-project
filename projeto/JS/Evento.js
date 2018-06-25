let arrayEvents=[]
let arrayComentarios=[]
let myUsers = []
class User {
    constructor(username, password, type, email) {
        this._id = User.getLastId()+1
        this.username = username
        this.password = password
        this.type = type
        this.email = email
        this._picture = "https://d2w4qhtqw2dbsq.cloudfront.net/profile_live/2070689/large.jpg"

    }
    //Id
    get id() {
        return this._id
    }

    //Username
    get username() {
        return this._username
    }

    set username(newUsername) {
        this._username = newUsername
    }

    //Password
    get password() {
        return this._password
    }

    set password(newPassoword) {
        this._password = newPassoword
    }

    //Type
    get type() {
        return this._type
    }

    set type(newType) {
        this._type = newType
    }

    //Email
    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }
    //Picture
    get picture() {
        return this._picture
    }



    static getLastId() {
        
        let lastId = 0
        if (myUsers.length != 0) {
            lastId = myUsers[myUsers.length - 1].id
        }
        return lastId
    }

}
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
//////Coment////////////////
class Coment{constructor(userId,eventId,comentname,date,description)
    {
        this._id=Coment.getLastId()+1
        this._userId=userId
        this._eventId=eventId
        this.comentname=comentname
        this.description=description
        this.date=date
    }
  
    //Id
    get id() {
        return this._id
        }
        //userId
        get userId(){
            return this._userId
        }
        set userId(newuserId) 
        {
        this._userId = newuserId
        }
        //eventId
        get eventId(){
            return this._eventId
        }
        set eventId(neweventId) 
        {
        this._eventId = neweventId
        }

//Eventname
    get comentname()
     {
        return this._comentname
     }
       
    set comentname(newComentname) 
    {
        this._comentname = newComentname
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
    //
    static getLastId() {
        let lastId = 0
        if(arrayComentarios.length != 0) {
        lastId = arrayComentarios[arrayComentarios.length-1].id
        }
        return lastId
        }
    
}
//////////////COMENTS//////////////////
class NewComent{
    constructor(comentname,date,description)
    {
        this._id=NewComent.getLastId()+1
        this._userId=NewComent.getUserId()
        this._eventId=NewComent.getEventId()
        this.comentname=comentname
        this.description=description
        this._date=NewComent.formatDate(new Date())
    }
    //Id
    get id() {
        return this._id
        }
        //userId
        get userId(){
            return this._userId
        }
        //eventId
        get eventId(){
            return this._eventId
        }

//Eventname
    get comentname()
     {
        return this._comentname
     }
       
    set comentname(newComentname) 
    {
        this._comentname = newComentname
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
   
   

    
        // Função que converte uma data
// Acrescentando zeros à esquerda sempre que o mês e o dia sejam inferiores a 10
static  formatDate(date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');}
    
    static getLastId() {
        let lastId = 0
        if(arrayComentarios.length != 0) {
        lastId = arrayComentarios[arrayComentarios.length-1].id
        }
        return lastId
        }
    static getUserId()
    {
        let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
        let tempUser=JSON.parse(localStorage.getItem("User"))
        let UserId=""
        for(let i=0;i<tempUser.length;i++)
         {
           if(tempUser[i]._username==tempLoggedUser._username)
           {
            UserId=tempUser[i]._id
           }
         }
        
            
        return  UserId    
              
        
    }

    static getEventId()
    {
       let tempEventClick=JSON.parse(localStorage.getItem("eventId"))
       let EveClickId=tempEventClick
       return EveClickId
    }
    
}
let arrayEventosAdd=[]
////////////adicionar
class EventosAddNew{
    constructor(){
        this._id=EventosAddNew.getLastId()+1
        this._userId=EventosAddNew.getUserId()
        this._eventId=EventosAddNew.getEventId()
       
    }

     //Id
    get id() {
    return this._id
    }
    //userId
    get userId(){
        return this._userId
    }
    //eventId
    get eventId(){
        return this._eventId
    }

    static getLastId() {
        let lastId = 0
        if(arrayEventosAdd.length != 0) {
        lastId = arrayEventosAdd[arrayEventosAdd.length-1].id
        }
        return lastId
        }
    static getUserId()
    {
        let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
        let tempUser=JSON.parse(localStorage.getItem("User"))
        let UserId=""
        for(let i=0;i<tempUser.length;i++)
         {
           if(tempUser[i]._username==tempLoggedUser._username)
           {
            UserId=tempUser[i]._id
           }
         }
        
            
        return  UserId    
              
        
    }

    static getEventId()
    {
       let tempEventClick=JSON.parse(localStorage.getItem("eventId"))
       let EveClickId=tempEventClick._id
       return EveClickId
    }
}
//////carregar
class EventosAdd{
    constructor(userId,eventId)
    {
        this._id=EventosAdd.getLastId()+1
        this.userId=userId
        this.eventId=eventId
    }

     //Id
     get id() {
        return this._id
        }
        
        //userId
        get userId(){
            return this._userId
        }
        
        set userId(newUserId) 
        {
            this._userId = newUserId
        }
        //eventId
        get eventId(){
            return this._eventId
        }

        set eventId(newEventId){
            this._eventId = newEventId
        }

        static getLastId() {
            let lastId = 0
            if(arrayEventosAdd.length != 0) {
            lastId = arrayEventosAdd[arrayEventosAdd.length-1].id
            }
            return lastId
            }
}

////
let arrayrating=[]
class AddRating
{
    constructor(points)
    {
        this._id=AddRating.getLastId()+1
        this._userId= AddRating.getUserId()
        this._eventId=AddRating.getEventId()
        this.points=points  
    }


     //Id
     get id() {
        return this._id
        }
        
        //userId
        get userId(){
            return this._userId
        }
        
       
        //eventId
        get eventId(){
            return this._eventId
        }

        //points
        get points(){
            return this._points
        }
        set points(newPoints){
            this._points = newPoints
        }

        static getLastId() {
            let lastId = 0
            if(arrayrating.length != 0) {
            lastId = arrayrating[arrayrating.length-1].id
            }
            return lastId
            }

            static getUserId()
            {
                let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
                let tempUser=JSON.parse(localStorage.getItem("User"))
                let UserId=""
                for(let i=0;i<tempUser.length;i++)
                 {
                   if(tempUser[i]._username==tempLoggedUser._username)
                   {
                    UserId=tempUser[i]._id
                   }
                 }
                
                    
                return  UserId    
                      
                
            }
        
            static getEventId()
            {
               let eventId=JSON.parse(localStorage.getItem("eventId"))
               let EveClickId=eventId
               return EveClickId
            }
}


class rating{
    constructor(userId,eventId,points)
    {
        this._id=rating.getLastId()+1
        this.userId=userId
        this.eventId=eventId
        this.points=points
    }


     //Id
     get id() {
        return this._id
        }
        
        //userId
        get userId(){
            return this._userId
        }
        
        set userId(newUserId) 
        {
            this._userId = newUserId
        }
        //eventId
        get eventId(){
            return this._eventId
        }

        set eventId(newEventId){
            this._eventId = newEventId
        }
        //points
        get points(){
            return this._points
        }

        set points(newPoints){
            this._points = newPoints
        }

        static getLastId() {
            let lastId = 0
            if(arrayrating.length != 0) {
            lastId = arrayrating[arrayrating.length-1].id
            }
            return lastId
            }


}

window.onload = function () {
    
    loadEventClickFromStorage()
    comentarioRemove()
    verificarAddEve()
    loginChangesNav()
    GlobalRate()
    console.log(localStorage.LoggedUser.id)
   

}
//carregar o evento do local storage
function loadEventClickFromStorage() {
    let a=false
    if(localStorage.Event){
        let tempEveClick = localStorage.getItem("eventId")
        loadEveFromStorage()
            ///vamos buscar o que guarda-mos no storage e guarda-mos numa variavel para depois imprimi-la
            //let newEventClick =  new Events(tempEveClick._eventname, tempEveClick._description,tempEveClick._date,"","","",tempEveClick._space,"","",tempEveClick._image,"","","")
            //let EventClickId=tempEveClick._id
            let strHtmlClickEve=""
            for(let i=0;i<arrayEvents.length;i++)
            {
                if(arrayEvents[i].id==tempEveClick)
                {
             a=true
              strHtmlClickEve=`<div class="jumbotron">
             <div class="row">
              <div class="col-md-3">
               <img src="${arrayEvents[i].image}" style="width:300px;height:200px; border-radius:5px 0px 0px 5px" >
              </div>
              <div class="col-md-9">
               <h1 class="display-4" style="font-weight: bold;">${arrayEvents[i].eventname}</h1>
               <br>
               <p style="font-size: 25px;"> ${arrayEvents[i].description}</p>
               <div class="row">
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Localização: </label> ${arrayEvents[i].space}</p>
                 </div>
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Data: </label> ${arrayEvents[i].date}</p>
                 </div>
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Rating: </label> </p>
                    <div id="globalrate">
                    <!--
                    <div class="star-rating">
                    <input id="star-5" type="radio" name="rating" class = "estrela" value="5">
                    <label for="star-5" title="5 stars">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
                    <label for="star-4" title="4 stars">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
                    <label for="star-3" title="3 stars">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
                    <label for="star-2" title="2 stars">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
                    <label for="star-1" title="1 star">
                            <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                </div>
                -->
                 </div>
                 </div>
                 <div class="col-md-4" id="coments">
                 <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Coments: </label> ${comentarios(arrayEvents[i].id)}</p>
                 </div>
               </div>
              </div>
             </div>
             
             <hr class="my-4">
             
             <p class="lead">
             
             <button id="btnAdd" class="btn btn-primary btn-lg">Adicionar aos eventos</button>
             <button id="btnCom" class="btn btn-primary btn-lg"  >Comentar</button>
             <button id="btnRate" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#rateModal" onclick="AddRatinge()">Classificar</button>
             </p>
             
             <div id="comentar">
             </div>
           </div>`
                }
            }
           let eventoClicado = document.getElementById("eventoClicado")
           eventoClicado.innerHTML = strHtmlClickEve
           comentarioRemove()
           let btnCom=document.getElementById("btnCom")
           let coments=document.getElementById("coments")
           btnCom.addEventListener("click",function(){
            if(localStorage.LoggedUser){
                let str=`<p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Coments: </label> ${comentarios(tempEveClick)}</p>
                <input type="text" name="" id="eventComent" class="form-control" placeholder="" aria-describedby="helpId">
                <a id="eventComentBtn" class="btn btn-primary btn-lg" href="#" role="button">Submeter Comentario</a>`
                coments.innerHTML=str
                let eventComent=document.getElementById("eventComent")
                let eventComentBtn=document.getElementById("eventComentBtn")
                eventComentBtn.addEventListener("click",function(){
                    let comentariofeito=eventComent.value
                    //criar um comentario com o nome do user,data, descrição
                    let novoComentario= new NewComent ("","",comentariofeito)
                    let freshComent=new Coment(novoComentario._userId,novoComentario._eventId,novoComentario._comentname,novoComentario._date,novoComentario._description)
                    //dar push
                    arrayComentarios.push(freshComent)
                    //guardar em storage
                    localStorage.setItem("Comentarios", JSON.stringify(arrayComentarios))
                    location.reload(true)
                    
                })
                
              
            }
           })

    }
    let btnAdd=document.getElementById("btnAdd")
    
    btnAdd.addEventListener("click",function addEvento(){
        loadAddEventosFromStorage()
        console.log( arrayEventosAdd)
        
        let newAddEventb= new EventosAddNew()
        arrayEventosAdd.push(newAddEventb)
        localStorage.setItem("AddEvents", JSON.stringify(arrayEventosAdd))
        location.reload(true)
        alert("O evento foi adicionado")
     
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
//verificar se o evento ja foi adicionado
function verificarAddEve()
{ let btnAdd=document.getElementById("btnAdd")
   
    loadAddEventosFromStorage()
    let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
    let userId=tempLoggedUser._id
    let tempEventClick=JSON.parse(localStorage.getItem("eventClick"))
       let EveClickId=tempEventClick
    for(let i=0;i<arrayEventosAdd.length;i++)
    {
        if((arrayEventosAdd[i].userId==userId) &&(arrayEventosAdd[i].eventId==EveClickId))
        {
            console.log("btnAdd")
            document.getElementById("btnAdd").disabled = true;
            document.getElementById("btnAdd").style.display = "none"
        
        }
    }
}
 /// vamos buscar os comentarios
 function comentarios(EventClickId)
 {
    loadComentariosFromStorage()
    loadUsersFromStorage()
    let a=false
    //loadEventClickFromStorage()
     let strComent=""
    for(let i=0;i<arrayComentarios.length;i++) 
    {
       if(EventClickId==arrayComentarios[i]._eventId)
       {
          for(let b=0;b<myUsers.length;b++)
          {
              if(myUsers[b]._id==arrayComentarios[i]._userId)
              {     console.log(myUsers[b]._picture)
                  console.log(arrayComentarios[i]._userId)
 if(localStorage.LoggedUser) { 
     a=true
let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))              
if(tempLoggedUser._id==myUsers[0]._id)
{strComent+="<br>"+
`<div class="row" style="background-color:white">
<div class="col-3" >
<img src="${myUsers[b]._picture}" style="width: 60px;margin-top:15px">

</div>
<div class="col-9">
<div class="row" style="margin-top:10px"><h3>${myUsers[b].username}</h3><p style="position:absolute;right:15px;margin-top:5px; color:grey">${arrayComentarios[i]._date}</p> </div>
<p>${arrayComentarios[i]._description}</p>
</div>
<div id="removerDiv" class=" col-3" style="margin-left:70%;margin-bottom:5px;">

<button id="${arrayComentarios[i]._id}" class="Remover btn btn-danger">Remover</button>
</div>
</div>`

}
else if((tempLoggedUser._id==myUsers[b]._id) && (myUsers[b]._id==arrayComentarios[i]._userId))
                  { strComent+="<br>"+
                  `<div class="row" style="background-color:white">
<div class="col-3" >
    <img src="${myUsers[b]._picture}" style="width: 60px;margin-top:15px">

</div>
<div class="col-8">
    <div class="row" style="margin-top:10px"><h3>${myUsers[b].username}</h3><p style="position:absolute;right:15px;margin-top:5px; color:grey">data</p> </div>
    <p>${arrayComentarios[i]._description}</p>
</div>
<div id="removerDiv" class=" col-1">

<button id="${arrayComentarios[i]._id}" class="Remover">Remover</button>
</div>
</div>`}
else if((tempLoggedUser._id!=myUsers[b]._id) && (myUsers[b]._id==arrayComentarios[i]._userId))
                  { strComent+="<br>"+
                  `<div class="row" style="background-color:white">
<div class="col-3" >
    <img src="${myUsers[b]._picture}" style="width: 60px;margin-top:15px">

</div>
<div class="col-8">
    <div class="row" style="margin-top:10px"><h3>${myUsers[b].username}</h3><p style="position:absolute;right:15px;margin-top:5px; color:grey">data</p> </div>
    <p>${arrayComentarios[i]._description}</p>
</div>
<div id="removerDiv" class=" col-1">


</div>
</div>`}}
if(a=false)
{
    if(myUsers[b]._id==arrayComentarios[i]._userId)
    {
        strComent+="<br>"+
        `<div class="row" style="background-color:white">
<div class="col-3" >
<img src="${myUsers[b]._picture}" style="width: 60px;margin-top:15px">

</div>
<div class="col-8">
<div class="row" style="margin-top:10px"><h3>${myUsers[b].username}</h3><p style="position:absolute;right:15px;margin-top:5px; color:grey">data</p> </div>
<p>${arrayComentarios[i]._description}</p>
</div>
<div id="removerDiv" class=" col-1">


</div>
</div>`
    }
}

                  
                 
              }

           
              
          }
       }
    }
    console.log(strComent)
    return strComent
    
    
 }
 //função 
 function comentarioRemove(){
    loadComentariosFromStorage()
    loadUsersFromStorage()
    let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
   
    
        
        
        
        let arrayRemove= document.getElementsByClassName("Remover")
        for(let c=0;c<arrayRemove.length;c++)
        {
            
            console.log("hey")
            arrayRemove[c].addEventListener("click", function(){
                let comentarioId = arrayRemove[c].id 
                
                console.log(comentarioId)
                for(let i=0;i<arrayComentarios.length;i++)
                {
                    if(arrayComentarios[i]._id==comentarioId)
                    {
                        loadComentariosFromStorage()      
                arrayComentarios.splice(i,1)
                //guardar em storage
                
                localStorage.setItem("Comentarios", JSON.stringify(arrayComentarios))
                location.reload(true)}} 
            })
        }

    
 }
 //fazer load dos eventos Add
function loadAddEventosFromStorage(){
    if(localStorage.AddEvents){
        let tempAddArray = JSON.parse(localStorage.getItem("AddEvents"))
         arrayEventosAdd=[]
        for (var i = 0; i < tempAddArray.length; i++) {
            
            let newAddEvent =  new EventosAdd(tempAddArray[i]._userId,tempAddArray[i]._eventId)
            
            arrayEventosAdd.push(newAddEvent)    
              
        }

    }

}
 // Fazer load dos comentarios do storage para o array 
 function loadComentariosFromStorage()
 {
    if(localStorage.Comentarios){
        arrayComentarios=[]
        let tempComArray = JSON.parse(localStorage.getItem("Comentarios"))
        for (var i = 0; i < tempComArray.length; i++) {
            //(comentname,date,description)
            let newComentario =  new Coment(tempComArray[i]._userId, tempComArray[i]._eventId,tempComArray[i]._comentname,tempComArray[i]._date,tempComArray[i]._description)
            
            arrayComentarios.push(newComentario)    
              
        }

    }
 }
 //fazer load dos users
 function loadUsersFromStorage() {

    if(localStorage.User){
        let tempArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempArray.length; i++) {
            
            let newUser =  new User(tempArray[i]._username, tempArray[i]._password,tempArray[i]._type,tempArray[i]._email)
            myUsers.push(newUser)    
              
        }

    }
    
}

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
       <a class="dropdown-item" href="perfil.html">Perfil</a>
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
       <a class="dropdown-item" href="perfil.html">Perfil</a>
       <a class="dropdown-item" href="gerirEventos.html">Gerir evento</a>   
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
}}
//função para dar logout
function buttonLogOut(){
    let changeLogin = document.getElementById("textLogin")  
    localStorage.removeItem("LoggedUser")
    changeLogin.innerHTML = "Login"
    location.reload(true);
    
    
}

//rating
function AddRatinge()
{
    let btnRate = document.getElementById("btnRate")
    let estrela = document.getElementsByClassName("estrela")
    votRate.addEventListener("click", function(){
    
    let valorPontuacao=0
    for (let i = 0; i < estrela.length; i++) {
        if (estrela[i].checked == true) {
            valorPontuacao = estrela[i].value
        }
    }
    uploadRatingFromStotage()
    let newRate= new AddRating(valorPontuacao)
    arrayrating.push(newRate)
    //guardar em storage
    localStorage.setItem("Rating", JSON.stringify(arrayrating))
    console.log("ola")
    console.log(newRate)
    location.reload(true);
    }
    
    
)
GlobalRate()   
}
// upload ratingfor
function uploadRatingFromStotage()
{
    
    if(localStorage.Rating){
        arrayrating=[]
        let tempArray = JSON.parse(localStorage.getItem("Rating"))
        for (var i = 0; i < tempArray.length; i++) {
            
            let newRating =  new rating(tempArray[i]._userId,tempArray[i]._eventId,tempArray[i]._points)
            arrayrating.push(newRating)    
              
        }

    }
}

//ratingglobal do evento
function GlobalRate()
{
    uploadRatingFromStotage()
    let globalrate=document.getElementById("globalrate")
    let eventId = JSON.parse(localStorage.getItem("eventId"))
    let soma=0
    let total=0
    let media=0
    let str=""
    for(let i=0;i<arrayrating.length;i++)
    {
        if(eventId==arrayrating[i]._eventId)
        {
         soma=soma+parseInt(arrayrating[i]._points)
         total++
        }
    }
    media=soma/total
    console.log(media)
    //tempEveClick.rating=media
    let index
    for(let i=0;i<arrayEvents.length;i++)
    {
       if(eventId==arrayEvents[i]._id)
       {
        index=i
        arrayEvents[i]._rating=media 
        

       }
    }
    //atualizar storage
    //guardar em storage
    localStorage.setItem("Event", JSON.stringify( arrayEvents))
   

    console.log(arrayEvents[index]._rating)
    if(localStorage.Rating==-1)
    {str=`
        <div class="star-rating">
        <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
        <label for="star-5" title="5 stars">
                <i class="active fa fa-star" aria-hidden="false"></i>
        </label>
        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
        <label for="star-4" title="4 stars">
                <i class="active fa fa-star" aria-hidden="true"></i>
        </label>
        <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
        <label for="star-3" title="3 stars">
                <i class="active fa fa-star" aria-hidden="true"></i>
        </label>
        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
        <label for="star-2" title="2 stars">
                <i class="active fa fa-star" aria-hidden="true"></i>
        </label>
        <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
        <label for="star-1" title="1 star">
                <i class="active fa fa-star" aria-hidden="true"></i>
        </label>
    </div> `  
    }
   if(arrayEvents[index]._rating>4.5)
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" checked>
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   if((arrayEvents[index]._rating<=4.5)&&(arrayEvents[index]._rating>3.5))
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4"checked>
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   if((arrayEvents[index]._rating<=3.5)&&(arrayEvents[index]._rating>2.5))
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3"checked>
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   if((arrayEvents[index]._rating<=2.5)&&(arrayEvents[index]._rating>1.5))
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2"checked>
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   if((arrayEvents[index]._rating<=1.5)&&(arrayEvents[index]._rating>0.5))
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1"checked>
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   if(arrayEvents[index]._rating<=0.5)
   {str=`
    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" class = "estrela" value="5" >
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="false"></i>
    </label>
    <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
</div> `
   }
   globalrate.innerHTML=str
   console.log(arrayEvents[index]._rating)
}


