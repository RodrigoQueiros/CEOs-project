let arrayUser=[]
let arrayEvents=[]
let arrayComents=[]
let arrayCategory=[]
let arrayTeachers=[]
let arrayTestimonial=[]
let arrayPartnerships=[]

let myUsers = []
let userType = ""
let loggedUser = []
let changeLogin = document.getElementById("textLogin")  
// ############ Cass User ############

class User{
    constructor(username,password,type,email)
    {
        this._id= 0
        this.username=username 
        this.password=password
        this.type=type
        this.email=email
        this._picture="https://d2w4qhtqw2dbsq.cloudfront.net/profile_live/2070689/large.jpg"

    }
//Id
    get id() {
        return this._id
        }

//Username
    get username()
     {
        return this._username
     }
       
    set username(newUsername) 
    {
        this._username = newUsername
    }

//Password
    get password()
     {
        return this._password
     }
       
    set password(newPassoword)
     {
        this._password = newPassoword
     }
     
//Type
    get type() 
     {
      return this._type
     }
   
    set type(newType) 
    {
     this._type = newType
    }

//Email
    get email() 
    {
     return this._email
    }
  
   set email(newEmail) 
   {
    this._email = newEmail
   }
//Picture
   get picture() 
   {
    return this._picture
   }
 
  

  static getLastId() {
    let lastId = 0
    if(arrayUser.length != 0) {
    lastId = arrayUser[arrayUser.length-1].id
    }
    return lastId
    }
   
}


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

//############ Class Events ############

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


//############ Class Coments ###########
class Coments{
    constructor(name,coment,rating)
    {
        this._id= arrayComents.getLastId()+1
        this.name=name
        this.coment=coment
        this.rating=rating
    }

    //Id
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

//coment
get coment() 
{
 return this._coment
}

set coment(newComent) 
{
this._coment = newComent
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

//get it
static getLastId() {
    let lastId = 0
    if(arrayComents.length != 0) {
    lastId = arrayComents[arrayComents.length-1].id
    }
    return lastId
    }

}

//############ Class Category ############
class Category{
    constructor(category){
        this._id= arrayCategory.getLastId()+1
        this.category=category

    }

    //id
    get id() {
        return this._id
        }

    //category
    get category() 
    {
     return this._category
    }
    
    set category(newCategory) 
    {
    this._category = newCategory
    }


    //get id
static getLastId() {
    let lastId = 0
    if(arrayCategory.length != 0) {
    lastId = arrayCategory[arrayCategory.length-1].id
    }
    return lastId
    }

}

//############ Class teachers ############
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


//############ Class testimonials ############

class Testimonial{
    constructor(identification,testimonial,image,date){
        this._id= Testimonial.getLastId()+1 
        this.identification=identification
        this.testimonial=testimonial
        this.image=image
        this.date=date

    }

    //id
  get id() {
    return this._id
    }

//identification
get identification() 
{
 return this._identification
}

set identification(newIdentification) 
{
this._identification = newIdentification
}

//testimonial
get testimonial() 
{
 return this._testimonial
}

set testimonial(newTestimonial) 
{
this._testimonial = newTestimonial
}

//Image
get image()
{
    return this._image
}
set image(newImage)
{
    this._image = newImage
}
//date
get date()
{
    return this._date
}

set date(newDate)
{
    this._date=newDate
}
 //get id
 static getLastId() {
    let lastId = 0
    if(arrayTestimonial.length != 0) {
    lastId = arrayTestimonial[arrayTestimonial.length-1].id
    }
    return lastId
    }

    
}

//############ Class partnerships ############

class Partnerships{
    constructor(name,image,local,link,code)
    {
        this._id= arrayPartnerships.getLastId()+1
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
//Class course



//Window on Load

window.onload = function(){
    updateTagsFiltro()
    verificarDoc()
    loginChances()
    loadFromStorage()
    ///apagar no storage os filtros anteriores
    if(localStorage.eventDate)
    {
        localStorage.setItem("eventDate","")
    }
    if(localStorage.eventname)
    {
        localStorage.setItem("eventname","")
    }
    if(localStorage.filterTag)
    {
        localStorage.setItem("filterTag","") 
    }
    filtroHome()
//eventos

updateEvents()
console.log(arrayEvents)
//testemunho
let testemunho= new Testimonial("Rodrigo","Adoro o site! Feito por grandes futuros programadores sem duvida","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/29683169_1433337813437899_821953977863520960_n.jpg?_nc_cat=0&oh=d3bccafcd80d7b146e9fd8f0a9c2e552&oe=5BE3759B","2018-06-20")
arrayTestimonial.push(testemunho)

console.log(arrayTestimonial)
//docente

/*let teacher= new Teachers("Ricardo Queiros", "../Outros/event5.jpg","","POO","")
arrayTeachers.push(teacher)*/
updateTestimonial_Docente()

//Admin
let newAdmin = new User("RL","projeto","admin","","")
arrayUser.push(newAdmin)


//Get elements by ids
/*
let formFilter = document.getElementById("a") //Form dos filtros 
let formSignIn = document.getElementById("formSignIn") //Form de registo
let formLogIn = document.getElementById("a") //Form de Log in

//Filtrar eventos
/*formFilter.addEventListener("submit", function(event){




})

let rUser = document.getElementById("rUser")
let rEmail = document.getElementById("rEmail")
let rPass = document.getElementById("rPass")
let rcPass = document.getElementById("rcPass")

//Registar user
formSignIn.addEventListener("submit", function(event){
    let strError = ""
    event.preventDefault()
//Validar o email
let userExist = false
for (var i = 0; i < arrayUser.length; i++) {
if (arrayUser[i].email == rEmail.value) {
userExist = true
} 
}

if(userExist == true) {
strError += "\nEmail já existente!"
}
event.preventDefault()
if(rPass.value != rcPass.value) //Verificar se a passe e a sua confirmação coincidem
{
    console.log(rPass.value)
    strError += "As palavras-passes não coincidem"
    rcPass.value=""
    rPass.value=""
    event.preventDefault()
}

//Criar user

if (strError=="") 
{
let newUser = new User(rUser.value,rPass.value,"standard",rEmail.value) //Fazer o Objeto
arrayUser.push(newUser) //Por dentro do array
alert("Registo efetuado com sucesso!!")
event.preventDefault()
}
else{ //Se n tiver tudo bem

    alert(strError)
    formSignIn.reset()
    rUser.focus()
}

event.preventDefault()
})

*/


}

function updateEvents(){
    loadEventFromStorage()
    console.log(arrayEvents)
    //iterar sobre o array de eventos
    let strHtmlCard = ""
    for(let i=1;i<4;i++)
    {
        if(i==1){
            strHtmlCard += `<h5 style="display: block;color: #1D76CE">Eventos:</h5>
            <div class="row" >`
        }
        strHtmlCard += `<div class="card m-3" style="width: 40rem; border-radius:5px;border-width:3px" >
        <a id="${arrayEvents[arrayEvents.length-i]._id}" class="eventoclick" href="Evento.html" >
        <div class="row " >
          <div class="col-md-4" >
              <img src="${arrayEvents[arrayEvents.length-i].image}" style="width:100%;height:100%; border-radius:5px 0px 0px 5px" >
            </div>
            <div class="col-md-8"  >
              <div id="NomeData" class="row ">
                 <div id="eventoNome" class="mr-auto col-md-6">
                 <h5 class="" style="margin-top:10px">${arrayEvents[arrayEvents.length-i].eventname}</h5>
                 </div>
                 <div id="eventoData" class="mr-2 col-md-4" style=" font-size:12px;">
                 <p style="float:right;">${arrayEvents[arrayEvents.length-i].date}</p>
                 </div>
                
              </div>
              <div id="descrição" class="row col-md-12">
              <p style="height:40px" >${arrayEvents[arrayEvents.length-i].description}</p>
              </div>
              <div id="localição" class"row col-md-12">
              <p>${arrayEvents[arrayEvents.length-i].space}</p>
              </div>

            </div>
        
          </div>
          </a>
        </div>
        
        `
        // Fecha a linha
        if(i== 3) {
            strHtmlCard += `</div>`    
            //Console.log(strHtmlCard)
    let eventsCatalog = document.getElementById("eventsCatalog")
    eventsCatalog.innerHTML = strHtmlCard
        }  
    }
    
}




function updateTestimonial_Docente()
{
    loadDocFromStorage()
    let strHtmlTest = ""
    //iterar sobre o array de testemunhos
  
            strHtmlTest += 
             ` <h5 style="display: block;color: #1D76CE">Testemunho:</h5>
         <div class="row"> 
         <div class="card m-3" style="width: 40rm;" >
            <a id="zeLink" class="eventoclick" href="#">
             <div class="row " style="height:5rm;">
              <div class="col-md-3 " >
                  <img  src="${arrayTestimonial[arrayTestimonial.length-1].image}" style="width:80%;height:80%; border-radius:5px;margin-left:20px;margin-top:20px;" >
              </div>
              <div class="ml-0 col-md-9">
                  <h5 id="IdentificaçãoTest"  style="float:left; margin-top:20px;margin-left:0px;">${arrayTestimonial[arrayTestimonial.length-1].identification}</h5>
              </div>
             </div>
             <div class="row ml-1 col-md-12" style="height:30rm;margin-top:20px;">   
                 <p style="margin-top:10px;">${arrayTestimonial[arrayTestimonial.length-1].testimonial} </p>
             </div>  
             <div id="TestDate" class"row mr-2 col-md-12" style="font-size:12px;">
              <p style="float:right;margin-right:5px;">${arrayTestimonial[arrayTestimonial.length-1].date}</p>
              </div>
 
           </a>
        </div> 
        </div>


        <h5 style="display: block;color: #1D76CE">Docente:</h5>
        <div class="row"> 
         <div class="card m-3" style="width: 40rm;" >
            <a id="zeLink" class="eventoclick" href="#">
             <div class="row col-md-12">
              <div class="col-md-4 mr-auto mt-2 " style="padding:10px">
                  <img src="${arrayTeachers[arrayTeachers.length-1].photo}" style="float:left;border-radius:5px;width:95%;height:95%;" >
              </div>
              <div class="mr-auto col-md-8 mt-2" id="docNameDesc" style="float:left;">
                 <div class="mr-auto" >
                     <h5 id="doncenteName" style="margin-left:0px;margin-top:10px">${arrayTeachers[arrayTeachers.length-1].name}</h5>
                 </div>

                 <div class="mr-auto" >
                      <p id="docenteDescrição">${arrayTeachers[arrayTeachers.length-1].uc}</p>
                 </div>
              </div>
             </div>
             
 
           </a>
        </div> 
        </div>
           `
    
    let testemunhosCatalog = document.getElementById("testemunhosCatalog")
    testemunhosCatalog.innerHTML = strHtmlTest
}

///carregar Docentes do storage para o arrayTeachers
function loadDocFromStorage()
{
   

      if(localStorage.Docentes)
      {arrayTeachers=[]
            let tempDocArray = JSON.parse(localStorage.getItem("Docentes"))
            for (var i = 0; i < tempDocArray.length; i++) 
            {
                
                //name,photo,formaçao,Uc,short cv
                let newDocc =  new Teachers(tempDocArray[i]._name, tempDocArray[i]._photo,tempDocArray[i]._formation,tempDocArray[i]._uc,tempDocArray[i]._shortCV)
                arrayTeachers.push(newDocc) 
                   
                  
            }
        }
        
     
        
    
}

function loadFromStorage() {

    if(localStorage.User){
        let tempArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempArray.length; i++) {
            
            let newUser =  new User(tempArray[i]._username, tempArray[i]._password,tempArray[i]._type,tempArray[i]._email)
            myUsers.push(newUser)    
              
        }

    }
    
}


//carregar eventos do storage
function loadEventFromStorage() {

    if(localStorage.Event){
        let tempEveArray = JSON.parse(localStorage.getItem("Event"))
        arrayEvents=[]
        for (var i = 0; i < tempEveArray.length; i++) {
            
            let newEvent =  new Events(tempEveArray[i]._eventname, tempEveArray[i]._description,tempEveArray[i]._date,"","","",tempEveArray[i]._space,"","",tempEveArray[i]._image,"","","")
            arrayEvents.push(newEvent)    
              
        }

    }
    else
    {
        arrayEvents=[]
        let eventoUm= new Events ("ioAcademy Challenge","O ioAcademy Challenge é apoiado pela ESMAD e é direcionada para um público estudantil!!!","2018-06-27","","","","ESMAD","WorkShops","","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/35923109_387772041735241_8475168770883584000_o.jpg?_nc_cat=0&oh=25580f9bf5716027728ad293092c1e16&oe=5BB2D1EF","","","")
        arrayEvents.push(eventoUm)
        let eventoDois= new Events ("WIT IAMCP ","A WIT tem como objectivo promover ajuda mútua para atingir os objetivos pessoais e profissionais","2018-06-30","","","","Rua Passos Manuel, 223 - 4º Andar,Porto","Seminario","","https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46100074%2F210400993975%2F1%2Foriginal.jpg?w=800&auto=compress&rect=1%2C159%2C1020%2C510&s=8f93bcf54ac1f5ca6d008f1e639a3718","","","")
        arrayEvents.push(eventoDois)
        let eventoTres= new Events ("Web Summit","Volunteering at Web Summit is a surefire way of making new connections and learning new skills","27-06-2018","","","","ALTICE ARENA, LISBON","Encontros","","https://external.fopo3-1.fna.fbcdn.net/safe_image.php?d=AQD1935O8ZiJnN6a&w=540&h=282&url=https%3A%2F%2Fwebsummit.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fsportsfile-web-500x300.jpg&cfs=1&upscale=1&fallback=news_d_placeholder_publisher&_nc_hash=AQCIu_ztG0vc6cT6","","","")
        arrayEvents.push(eventoTres)
         console.log(arrayEvents)
         localStorage.setItem("Event",JSON.stringify(arrayEvents))
    }
    
}

function buttonLogOut(){
    let changeLogin = document.getElementById("textLogin")  
    localStorage.removeItem("LoggedUser")
    changeLogin.innerHTML = "Login"
    location.reload(true);
    
    
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
     
    if(localStorage.Tags)
    {
    arrayTags=[]
    let tempTagsArray = JSON.parse(localStorage.getItem("Tags"))
        for (var i = 0; i < tempTagsArray.length; i++) 
        {
            //tagname
            let newtag =  new Tag(tempTagsArray[i]._tagname)
            arrayTags.push(newtag)    
              
        }
    }
    
}
//função filtrar
function filtroHome()
{
   let btnFiltroHome=document.getElementById("btnFiltroHome")
   let eventNameHome = document.getElementById("eventName")
   let eventDateHome = document.getElementById("eventDate")
   let filterTagHome = document.getElementById("filterTag")
   let formFilter=document.getElementById("formFilter")
   btnFiltroHome.addEventListener("click",function(){
       let eventname=eventNameHome.value
       let eventDate=eventDateHome.value
       let filterTag=filterTagHome.value
    //Colocar no storage para depois carregar na seguinte pagina
    localStorage.setItem("eventname", JSON.stringify(eventname))
    localStorage.setItem("eventDate",JSON.stringify(eventDate))
    localStorage.setItem("filterTag",JSON.stringify(filterTag))
    })
    eventNameHome.value=""
    filterTagHome.value=""
    eventDateHome.value=""
}
function verificarDoc()
{
    let b = false
if (localStorage.getItem("Docentes")){
    loadDocFromStorage()
    b=true
        
                
}
if(b==false){

    console.log("ola")
    //parcerias adicionadas hardcode
    //name,photo,formation,uc,shortCV
    let newDocc1= new Teachers ("Ricardo Queiros","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/21317517_10212941804634127_2533581123657042195_n.jpg?_nc_cat=0&oh=f399c82d3692c0af6db39709942bf919&oe=5BA37C68 ","","POO"," ")
    arrayTeachers.push(newDocc1)
    let newDocc2= new Teachers ("Mario Pinto","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/22852969_1686309991379118_1792211636139421050_n.jpg?_nc_cat=0&oh=8885dde4f53bda197fcfde60c87a33a6&oe=5BE3D50A"," ","AED"," ")
    arrayTeachers.push(newDocc2)
    let newDocc3= new Teachers ("Lino Oliveira","https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/1005812_10202054191375221_1395673250_n.jpg?_nc_cat=0&oh=7ac79c784d748caf350a25e4c9c46627&oe=5BBA2671"," ","TAW"," ")
    arrayTeachers.push(newDocc3)
    

    //colocar no storage
    localStorage.setItem("Docentes", JSON.stringify(arrayTeachers))
   
}}