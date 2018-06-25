let a=0
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
    loginChangesNav()
    verificarDoc()
    updateDoc()

}
///////////////////////////////////////
//verificar se o array oparcerias existe
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

///carregar parcerias do storage para o array parcerias
function loadDocFromStorage()
{
   

        if(localStorage.Docentes)
        {
            let tempDocArray = JSON.parse(localStorage.getItem("Docentes"))
            for (var i = 0; i < tempDocArray.length; i++) 
            {
                //name,image,formartion,uc,shortCV
                let newDoc =  new Teachers(tempDocArray[i]._name, tempDocArray[i]._photo,tempDocArray[i]._formation,tempDocArray[i]._uc,tempDocArray[i]._shortCV)
                arrayTeachers.push(newDoc)    
                  
            }
    
        }
     
        
    
}

///fazer update dos docentes na pagina
function updateDoc(){
    let str=""
    let docHtml=document.getElementById("docentesCard")
    for(let i=0;i<arrayTeachers.length;i++)
    {
       
    if(a==0)  
    {
    str+=`
    
    <div class="row" style="margin-top:5%;">` 
    }
    str+=`  <div class="col-4"><div class="card text-center" style="width: 18rem;margin-right:2%">
    <div style="height:240px">
               <img class="card-img-top"  style="height:100%" src="${arrayTeachers[i]._photo}">
           </div>
    <div class="card-body">
      <h5 class="card-title">${arrayTeachers[i]._name}</h5>
      <p class="card-text">${arrayTeachers[i]._uc}</p>
      
    </div>
  </div>
  </div>
          `
          if( a!=3)
          {
              a++
          }
         if(a==3)
         {str+=`</div>`
         a=0}
         
     }
     docHtml.innerHTML=str
  
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