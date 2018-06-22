//os meus eventos

//A minha tabela de comentarios

//a minha tabela de testemunhos
//função que imprime os eventos

let myUsers = []
////////////class user
class User {
    constructor(username, password, type, email) {
        this._id = User.getLastId() + 1
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
//////class evento add

let arrayEventosAdd = []
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
/////class events
let arrayEvents = []
class Events {
    constructor(eventname, description, date, event_time, creat_time, state, space, category, responsable, image, coments, rating, views) {
        this._id = Events.getLastId() + 1
        this.eventname = eventname
        this.description = description
        this.date = date
        this.event_time = event_time
        this.creat_time = creat_time
        this.state = state
        this.space = space
        this.category = category
        this.responsable = responsable
        this.image = image
        this.coments = coments
        this.rating = rating
        this.views = views

    }
    //Id
    get id() {
        return this._id
    }

    //Eventname
    get eventname() {
        return this._eventname
    }

    set eventname(newEventname) {
        this._eventname = newEventname
    }

    //Description
    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }

    //Date
    get date() {
        return this._date
    }

    set date(newDate) {
        this._date = newDate
    }

    //Event_time
    get event_time() {
        return this._event_time
    }

    set event_time(newEvent_time) {
        this._event_time = newEvent_time
    }

    //Creat_time
    get creat_time() {
        return this._creat_time
    }

    set creat_time(newCreat_time) {
        this._creat_time = newCreat_time
    }

    //State
    get state() {
        return this._state
    }

    set state(newState) {
        this._state = newState
    }

    //space
    get space() {
        return this._space
    }

    set space(newSpace) {
        this._space = newSpace
    }

    //Category
    get category() {
        return this._category
    }

    set category(newCategory) {
        this._category = newCategory
    }

    //responsable

    get responsable() {
        return this._responsable
    }

    set responsable(newResponsable) {
        this._responsable = newResponsable
    }

    //image
    get image() {
        return this._image
    }

    set image(newImage) {
        this._image = newImage
    }

    //coments
    get coments() {
        return this._coments
    }

    set coments(newComents) {
        this._coments = newComents
    }

    //rating
    get rating() {
        return this._rating
    }

    set rating(newRating) {
        this._rating = newRating
    }

    //views
    get views() {
        return this._views
    }

    set views(newViews) {
        this._views = newViews
    }


    static getLastId() {
        let lastId = 0
        if (arrayEvents.length != 0) {
            lastId = arrayEvents[arrayEvents.length - 1].id
        }
        return lastId
    }

}

/////////////FUNCTIONS///////////////////

window.onload = function () {
    loadEventFromStorage()
    procurarEvent()
    getNotification()

}
/*function events()
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
        <a id="zeLink" class="eventoclick" href="Evento.html" >
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
        
        
    }}*/
//Procurar os eventos que foram adicionados pelo o loggedUser
function procurarEvent() {
    let strHtmlCard = ""
    let eventosadd = document.getElementById("eventosadd")
    //carregar os users do storage
    let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
    let userId=tempLoggedUser._id
    loadUsersFromStorage()
    loadEventFromStorage()
    //encontrar no array my users o loggedUser para guardar o seu userId
    for (let i = 0; i < myUsers.length; i++) {
        if (myUsers[i]._id == userId) {
            console.log("ola")
            //carregar os EventosAdd
            loadAddEventosFromStorage()
            //uma vez que encontrado guardamos o seu id
            let IdUser = myUsers[i]._id
            console.log(myUsers[i]._id)
            let a=0
            for (let b = arrayEventosAdd.length-1; b >=0; b--) 
            {//percorrer o array de eventos add e achar o user id

                if (IdUser == arrayEventosAdd[b]._userId)
                 {  //achando o id podemos começar a imprimir os eventos com o mesmo id
                    console.log("hey")
                   
                    for (let c = 0; c < arrayEvents.length; c++) {
                        
                        if (arrayEventosAdd[b]._eventId == arrayEvents[c]._id) {
                            a++
                            console.log(arrayEvents[c]._id)
                            if (a == 1) {
                                console.log("incio card")
                                strHtmlCard += `<h5 style="display: block;color: #1D76CE">Eventos:</h5>
                                <div class="row" >`
                            }
                            strHtmlCard += `<div class="card m-3" style="width: 40rem; border-radius:5px;" >
                            <a id="zeLink" class="eventoclick" href="Evento.html" >
                            <div class="row " >
                              <div class="col-md-4" >
                                  <img src="${arrayEvents[c].image}" style="width:100%;height:100%; border-radius:5px 0px 0px 5px" >
                                </div>
                                <div class="col-md-8">
                                  <div id="NomeData" class="row ">
                                     <div id="eventoNome" class="mr-auto col-md-6">
                                     <h5 class="" style="margin-top:10px">${arrayEvents[c].eventname}</h5>
                                     </div>
                                     <div id="eventoData" class="mr-2 col-md-4" style=" font-size:12px;">
                                     <p style="float:right;">${arrayEvents[c].date}</p>
                                     </div>
                                    
                                  </div>
                                  <div id="descrição" class="row col-md-12">
                                  <p style="height:40px">${arrayEvents[c].description}</p>
                                  </div>
                                  <div id="localição" class"row col-md-12">
                                  <p>${arrayEvents[c].space}</p>
                                  </div>
                    
                                </div>
                            
                              </div>
                              </a>
                            </div>
                            
                            `
                            console.log("fim")
                            console.log(a)
                            console.log(b + " e ..." + (arrayEventosAdd.length - 1))
                            // Fecha a linha
                            if (a==3) {
                                console.log("fim")
                                strHtmlCard += `</div>`
                                eventosadd.innerHTML = strHtmlCard
                                break;
                            }
                           

                        }
                    }
                }
            }
        }
    }

}

//fazer load dos users
function loadUsersFromStorage() {

    if (localStorage.User) {
        let tempArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempArray.length; i++) {

            let newUser = new User(tempArray[i]._username, tempArray[i]._password, tempArray[i]._type, tempArray[i]._email)
            myUsers.push(newUser)

        }

    }

}
//fazer load dos eventos Add
function loadAddEventosFromStorage() {
    if (localStorage.AddEvents) {
        let tempAddArray = JSON.parse(localStorage.getItem("AddEvents"))
        arrayEventosAdd = []
        for (var i = 0; i < tempAddArray.length; i++) {

            let newAddEvent = new EventosAdd(tempAddArray[i]._userId, tempAddArray[i]._eventId)

            arrayEventosAdd.push(newAddEvent)

        }

    }

}
//carregar eventos do storage
function loadEventFromStorage() {

    if (localStorage.Event) {
        arrayEvents=[]
        let tempEveArray = JSON.parse(localStorage.getItem("Event"))
        for (var i = 0; i < tempEveArray.length; i++) {

            let newEvent = new Events(tempEveArray[i]._eventname, tempEveArray[i]._description, tempEveArray[i]._date, "", "", "", tempEveArray[i]._space, "", "", tempEveArray[i]._image, "", "", "")
            arrayEvents.push(newEvent)

        }

    }

}
let arrayInscrito = []
///function Notification
function getNotification() {

    let notificationId = document.getElementById("notificaçõesId")
    //carregar os eventos
    
    //encontrar o userId
    let tempLoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))
    let NotiuserId = tempLoggedUser._id
    //encontrar o eventId iterando sobre o arrayadd
    let tempAddArray = JSON.parse(localStorage.getItem("AddEvents"))
    for (let i = 0; i < tempAddArray.length; i++) {
        //Quando (NotiuserId==tempAddArray[i]._userId guardar o Idevent
        if (NotiuserId == tempAddArray[i]._userId) {
            let NotieventId = tempAddArray[i]._eventId
            arrayInscrito.push(NotieventId)
            console.log(arrayInscrito)
        }
    }

    let strNotificação=""
for (let i=0;i<arrayInscrito.length;i++)
{
    //console.log("array")
    for(let b=0;b<arrayEvents.length;b++)
    {
        //console.log("events")
        if(arrayInscrito[i]==arrayEvents[b].id)
        {
            //console.log(Date.parse("25-12-2017"))
            let dataEvento = Date.parse(arrayEvents[b]._date)
            let dataAtual =  Date.parse(Date())

            /*function prepareDate(d) {
                [d, m, y] = d.split("-"); //Split the string
                return [y, m - 1, d]; //Return as an array with y,m,d sequence
              }
              
              let str = "25-12-2017";
              let d = new Date(...prepareDate(str));
              console.log(d.getTime());*/

            //console.log(dataEvento)
            //console.log(dataAtual)
            //console.log(dataEvento-dataAtual)
            //verficar se o evento ira realizar dentro de tres dias
            if((dataEvento-dataAtual<=86400000) && (dataEvento-dataAtual>0))
            {
             strNotificação+=`Falta menos de 1 dia para ${arrayEvents[b]._eventname}.`  + "<br>"
            }
            else if((dataEvento-dataAtual<=259200000) && (dataEvento-dataAtual>0))
            {
                console.log("verificação de tres dias esta a funcionar")
               strNotificação+=`Falta menos de 3 dias para ${arrayEvents[b]._eventname}.` + "<br>"
            }
            //verficar se o evento ira realizar dentro de tres dias
            
        }
    }
    notificationId.innerHTML= strNotificação
}


}
/*
//function prepareDate(d) {
    [d, m, y] = d.split("-"); //Split the string
    return [y, m - 1, d]; //Return as an array with y,m,d sequence
  }
  
  let str = "25-12-2017";
  let d = new Date(...prepareDate(str));*/