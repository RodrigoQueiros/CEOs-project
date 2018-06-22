let arrayTags=[]
/////class Tag
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











let myUsers = []
//Classe User
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


window.onload = function () {
    loginChangesNav()
    loadUsersFromStorage()
    renderTableUser()
    loadTagsFromStorage()  
    renserTagTable()
    addTag()

}

//Carregar users do storage e guarda-los no array
function loadUsersFromStorage()
{
    
    if(localStorage.User)
    {
        let tempUserArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempUserArray.length; i++) 
        {
            //username,password,type,email,picture
            let newUser =  new User(tempUserArray[i]._username, tempUserArray[i]._password,tempUserArray[i]._type,tempUserArray[i]._email,tempUserArray[i]._picture)
            myUsers.push(newUser)    
              
        }

    }
}

//atualizar a tabela
function renderTableUser() {
    //username,password,type,email,picture 
    let tableUsers = document.getElementById("tableUsers")

    let strHtml = ` <thead class="bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Type</th>
      <th scope="col">Email</th>
      <th scope="col">Picture</th>
      
      <th scope="col">Butoes</th>
    </tr>
  </thead>
  <tbody>`

    for (let i = 0; i < myUsers.length; i++) {
        let d=1+i
        strHtml += "<tr>" +
        "<td>" + d + "</td>" +
        "<td>" + myUsers[i].username + "</td>" +
        
        "<td>" +  myUsers[i].password + "</td>" +
        "<td>" +  myUsers[i].type + "</td>" +
        "<td>" +  myUsers[i].email + "</td>" +
        "<td>" +`<img style="height: 50px; width: 80px;" src="${myUsers[i].picture}" >`+ "</td>" +

        "<td>" +
        "<a id='" + myUsers[i]._id + "' class='edit'data-toggle='modal' data-target='#userModalEdit'><i class='fas fa-edit'></i></a> " +
        "<a id='" + myUsers[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
        "<a id='" + myUsers[i]._id + "' class='view' data-toggle='modal' data-target='#userModal'><i class='fas fa-eye'></i></a>" +
    "</td>" + 
        "</tr>"
    }
    strHtml += "</tbody>"

   tableUsers.innerHTML = strHtml

// Get all the remove links from the table
let tdRemove = document.getElementsByClassName("remove")
// For each link, add a listener to listen the click event
for (let i = 0; i < tdRemove.length; i++) {
    tdRemove[i].addEventListener("click", function() {
        // By clicking in a specific partnership remove it from the array
        let userId= tdRemove[i].getAttribute("id")
        removeUserById(userId)
        //atualizar storage
        localStorage.removeItem("User")
        localStorage.setItem("User", JSON.stringify(myUsers))

        renderTableUser()
    }) }


         // Get all the view links from the table
         let tdView = document.getElementsByClassName("view")
         // For each link, add a listener to listen the click event
         for (let i = 0; i < tdView.length; i++) {
             tdView[i].addEventListener("click", function() {
                 // By clicking in a specific game, view it in a modal
                 let userId = tdView[i].getAttribute("id")
                 viewUserById(userId)                
             })        
         }


         // Get all the edit links from the table
     let tdEdit = document.getElementsByClassName("edit")
     // For each link, add a listener to listen the click event
     for (let i = 0; i < tdEdit.length; i++) {
         tdEdit[i].addEventListener("click", function() {
             // By clicking in a specific game, edit in the form
             let userId = tdEdit[i].getAttribute("id")
             editUserById(userId)
                       
         })        
     }



}

// Remove user based on its ID
function  removeUserById(id) {
    for (let i = 0; i < myUsers.length; i++) {
        if(myUsers[i]._id == id) {
            myUsers.splice(i, 1)
        }                  
    }
}

    // View user based on its ID
 ///username,password,type,email,picture 
 function viewUserById(id) {        
    for (let i = 0; i < myUsers.length; i++) {
        if(myUsers[i].id == id) {
            let  modalUserName=document.getElementById("modalUserName")
            let  modalUserPassword=document.getElementById("modalUserPassword")
            let  modalUsertype=document.getElementById("modalUsertype")
            let modalUserEmail=document.getElementById("modalUserEmail")
            let modalUserCover=document.getElementById("modalUserCover")

            modalUserName.innerHTML= myUsers[i].username              
            modalUserPassword.innerHTML = myUsers[i].password
            modalUsertype.innerHTML =  myUsers[i].type
            modalUserEmail.innerHTML=myUsers[i].email
            modalUserCover.setAttribute("src", myUsers[i].picture)                
        }                  
    }
}

// Edit game based on its ID
function editUserById(id) {    
    // Update global variable
  let modaluserEdiNome=document.getElementById("modaluserEdiNome")
  let modaluserEdiPass=document.getElementById("modaluserEdiPass")
  let modaluserEdiType=document.getElementById("modaluserEdiType")
  let modaluserEdiEmail=document.getElementById("modaluserEdiEmail")
  let modaluserEdiImag=document.getElementById("modaluserEdiImag")
  let modaluserEdiCover=document.getElementById("modaluserEdiCover")
  let btnEdit=document.getElementById("btnEdit")
  // Iterate from all the games and fill the form with the games data
    for (let i = 0; i < myUsers.length; i++) {
        if(myUsers[i].id == id) {
            modaluserEdiNome.setAttribute("value", myUsers[i].username)
            modaluserEdiPass.setAttribute("value", myUsers[i].password)
            modaluserEdiType.setAttribute("value", myUsers[i].type)
            modaluserEdiEmail.setAttribute("value",myUsers[i].email)
            modaluserEdiImag.setAttribute("value", myUsers[i].picture)
            modaluserEdiCover.setAttribute("src", myUsers[i].picture)
            btnEdit.addEventListener("click",function(){
                myUsers[i].username=modaluserEdiNome.value
                myUsers[i].password=modaluserEdiPass.value
                myUsers[i].type=modaluserEdiType.value
                myUsers[i].email=modaluserEdiEmail.value
                myUsers[i].picture= modaluserEdiImag.value
                modaluserEdiCover.setAttribute("src", myUsers[i].picture)
                 //atualizar storage
                 localStorage.removeItem("User")
                 localStorage.setItem("User", JSON.stringify(myUsers))   
                 renderTableUser()



            })
            
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
       <a class="dropdown-item" href="#">Gerir Eventos</a>   
       <a class="dropdown-item" href="#">Gerir Docentes</a>  
       <a class="dropdown-item" href="#">Gerir Parcerias</a>  
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
////Adicionar Tag
function addTag()
{
    let formTag=document.getElementById("formTag")
    let btnTag=document.getElementById("btnTag")
    let tagName=document.getElementById("tagName")
    btnTag.addEventListener("click", function(){
       
      let newTag= new Tag(tagName.value)
      arrayTags.push(newTag)
       //atualizar storage
       console.log("ola")
       localStorage.removeItem("Tags")
       localStorage.setItem("Tags", JSON.stringify(arrayTags)) 
       loadTagsFromStorage()  
       renserTagTable()
    })
}
//Atualizar tabela de tags
function renserTagTable()
{
    
//username,password,type,email,picture 
let tableTags = document.getElementById("tableTags")

let strHtml = ` <thead class="bg-primary">
<tr>
  <th scope="col">id#</th>
  <th scope="col">Name</th>

  
  <th scope="col"></th>
</tr>
</thead>
<tbody>`

for (let i = 0; i < arrayTags.length; i++) {
    
    strHtml += "<tr>" +
    "<td>" + arrayTags[i].id + "</td>" +
    "<td>" + arrayTags[i]._tagname + "</td>" +
    
    

    "<td>" +
   
    "<a id='" + arrayTags[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
    
"</td>" + 
    "</tr>"
}
strHtml += "</tbody>"

tableTags.innerHTML = strHtml

// Get all the remove links from the table
let tdRemove = document.getElementsByClassName("remove")
// For each link, add a listener to listen the click event
for (let i = 0; i < tdRemove.length; i++) {
tdRemove[i].addEventListener("click", function() {
    // By clicking in a specific partnership remove it from the array
    let tagId= tdRemove[i].getAttribute("id")
    removeTagById(tagId)
    //atualizar storage
    localStorage.removeItem("Tags")
    localStorage.setItem("Tags", JSON.stringify(arrayTags))
    loadTagsFromStorage()  
    renserTagTable()
}) }


}
// Remove tag based on its ID
function  removeTagById(id) {
    for (let i = 0; i < arrayTags.length; i++) {
        if(arrayTags[i]._id == id) {
            arrayTags.splice(i, 1)
        }                  
    }
}