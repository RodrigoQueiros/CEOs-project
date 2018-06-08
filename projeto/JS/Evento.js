let arrayEvents=[]
let comentarios=[]
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
//////////////COMENTS//////////////////
class Coment{
    constructor(comentname,date,description)
    {
        this._id=Events.getLastId()+1
        this.comentname=comentname
        this.description=description
        this.date=date
    }
    //Id
    get id() {
        return this._id
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
    static getLastId() {
        let lastId = 0
        if(arrayEvents.length != 0) {
        lastId = arrayEvents[arrayEvents.length-1].id
        }
        return lastId
        }
    
}
window.onload = function () {
    loadEventClickFromStorage()
    

}
//carregar o evento do local storage
function loadEventClickFromStorage() {
    let a=false
    if(localStorage.Event){
        let tempEveClick = JSON.parse(localStorage.getItem("EventClick"))
        
            ///vamos buscar o que guarda-mos no storage e guarda-mos numa variavel para depois imprimi-la
            let newEventClick =  new Events(tempEveClick._eventname, tempEveClick._description,tempEveClick._date,"","","",tempEveClick._space,"","",tempEveClick._image,"","","")
            
             a=true
             let strHtmlClickEve=`<div class="jumbotron">
             <div class="row">
              <div class="col-md-3">
               <img src="${newEventClick.image}" style="width:100%;height:100%; border-radius:5px 0px 0px 5px" >
              </div>
              <div class="col-md-9">
               <h1 class="display-4" style="font-weight: bold;">${newEventClick.eventname}</h1>
               <br>
               <p style="font-size: 25px;"> ${newEventClick.description}</p>
               <div class="row">
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Localização: </label> ${newEventClick.space}</p>
                 </div>
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Data: </label> ${newEventClick.date}</p>
                 </div>
                 <div class="col-md-4">
                    <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Rating: </label> </p>
                 </div>
               </div>
              </div>
             </div>
             
             <hr class="my-4">
             
             <p class="lead">
               
               <a id="btnAdd" class="btn btn-primary btn-lg" href="#" role="button">Adicionar aos eventos</a>
               <a id="btnCom" class="btn btn-primary btn-lg" href="#" role="button">Comentar</a>
             </p>
             <div id="coments">
             <p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Coments: </label> ${newEventClick.coments}</p>
             </div>
           </div>`
           let eventoClicado = document.getElementById("eventoClicado")
           eventoClicado.innerHTML = strHtmlClickEve
           let btnAdd=document.getElementById("btnAdd")
           let btnCom=document.getElementById("btnCom")
           let coments=document.getElementById("coments")
           btnCom.addEventListener("click",function(){
            if(localStorage.LoggedUser){
                let str=`<p style="font-size: 15px;"><label style="font-size: 20px; font-weight: bold;"> Coments: </label> ${newEventClick.coments}</p>
                <input type="text" name="" id="eventComent" class="form-control" placeholder="" aria-describedby="helpId">
                <a id="eventComentBtn" class="btn btn-primary btn-lg" href="#" role="button">Enviar</a>`
                coments.innerHTML=str
                let eventComent=document.getElementById("eventComent")
                let eventComentBtn=document.getElementById("eventComentBtn")
                eventComentBtn.addEventListener("click",function(){
                    let comentariofeito=eventComent.value
                    //criar um comentario com o nome do user,data, descrição
                    let novoComentario= new Coment (localStorage.LoggedUser.name,"",comentariofeito)
                    //dar push
                    comentarios.push(novoComentario)
                    //guardar em storage
                    localStorage.setItem("Comentarios", JSON.stringify(comentarios))
                    //carregamos o local storage
                    let eventClick = JSON.parse(localStorage.getItem("EventClick"))
                    //efetuamos a alteração
                    eventClick.coments=novoComentario
                    //dar update para o storage
                    localStorage.setItem("EventClick", JSON.stringify( eventClick))
                    //carregar o local storage dos eventos
                     arrayEvents = JSON.parse(localStorage.getItem("Event"))
                    //efetuar a alteração
                    for(let i=0;i<arrayEvents.length;i++)
                    {
                        if(arrayEvents[i].eventname==eventClick.eventname)
                        {
                            arrayEvents[i].coments=eventClick.coments
                        }
                    }
                    //dar update ao storage
                    localStorage.setItem("Event", JSON.stringify( arrayEvents))
                })
                
              
            }
           })

    }
    
    
}
