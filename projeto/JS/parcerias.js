let a=0 
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
/////////////
window.onload = function () {
    loginChangesNav()
    verificarPart()
    updateParc()

}
//verificar se o array oparcerias existe
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
    let newParc2= new Partnerships ("Microsoft","https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg","","https://microsoft.com/pt-pt/","")
    arrayPartnerships.push(newParc2)
    let newParc3= new Partnerships ("Blip","http://www.empregopelomundo.com/wp-content/uploads/2013/06/sas.png","","https://blip.pt","")
    arrayPartnerships.push(newParc3)
    let newParc4= new Partnerships ("Sonae","https://i2.aroq.com/1/sonae.jpg","","https://sonae.pt/en/","")
    arrayPartnerships.push(newParc4)
    

    //colocar no storage
    localStorage.setItem("Parcerias", JSON.stringify(arrayPartnerships))
   
}}
///carregar parcerias do storage para o array parcerias
function loadPartFromStorage()
{
   

        if(localStorage.Parcerias)
        {
            let tempParcArray = JSON.parse(localStorage.getItem("Parcerias"))
            for (var i = 0; i < tempParcArray.length; i++) 
            {
                //name,image,local,link,code
                let newParc =  new Partnerships(tempParcArray[i]._name, tempParcArray[i]._image,tempParcArray[i]._local,tempParcArray[i]._link,tempParcArray[i]._link,tempParcArray[i]._code)
                arrayPartnerships.push(newParc)    
                  
            }
    
        }
     
        
    
}
///fazer update das parcerias na pagina
function updateParc(){
    let str=""
    let parcHtml=document.getElementById("parceriasCard")
    for(let i=0;i<arrayPartnerships.length;i++)
    {
       
    if(a==0)  
    {
    str+=`
    
    <div class="row" style="margin-top:5%; margin-bottom:20px;">` 
    }
    str+=`<div class="col-4"><div class="card" style="width: 18rem;margin-right:2%">
           <a href="${arrayPartnerships[i].link}" class="cardParceria">
           <div style="height:150px">
               <img class="card-img-top"  style="height:100%" src="${arrayPartnerships[i].image}">
           </div>

           <div class="card-body">
             <h3 class="card-text">${arrayPartnerships[i].name}</h3>
           </div>
       </a>
         </div></div>
          `
          if( a!=3)
          {
              a++
          }
         if(a==3)
         {str+=`</div>`
         a=0}
         
     }
     parcHtml.innerHTML=str
  
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