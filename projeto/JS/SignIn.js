let myUsers = []
let loggedUser = []
let changeLogin = document.getElementById("textLogin")

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
    loginChances()
    loadFromStorage()
    //Criar um admin
    let a = false
    if (localStorage.getItem("User")){
        
        for (var i = 0; i < myUsers.length; i++) {
            
            if (myUsers[i].username == "RL") {
                a = true
                
            }
        }

            
                    
    }
    if(a==false){

        let newAdmin = new User("RL", "projeto", "admin", "")
        myUsers.push(newAdmin)
        localStorage.setItem("User", JSON.stringify(myUsers))

    }  

    let formSignIn = document.getElementById("formSignIn") //Form de registo
    let rUser = document.getElementById("rUser")
    let rEmail = document.getElementById("rEmail")
    let rPass = document.getElementById("rPass")
    let rcPass = document.getElementById("rcPass")


     //Registar user
     formSignIn.addEventListener("submit", function (event) {
        let strError = ""
        event.preventDefault()
        //Validar o email
        let userExist = false       

        if (localStorage.getItem("User")) {
             //Função que le o local storage devolve o array myUsers 
            

            for (var i = 0; i < myUsers.length; i++) {
                if (myUsers[i].email == rEmail.value) {
                    userExist = true
                }
            }
        }
        

        if (userExist == true) {
            strError += "\nEmail já existente!"
        }
        event.preventDefault()
        if (rPass.value != rcPass.value) //Verificar se a passe e a sua confirmação coincidem
        {
            console.log(rPass.value)
            strError += "As palavras-passes não coincidem"
            rcPass.value = ""
            rPass.value = ""
            event.preventDefault()
        }

        //Criar user

        if (strError == "") {
            let newUser = new User(rUser.value, rPass.value, "standard", rEmail.value) //Fazer o Objeto


            //Local Storage
            
            
            

            myUsers.push(newUser)
            localStorage.setItem("User", JSON.stringify(myUsers))
            

            alert("Registo efetuado com sucesso!!")
            event.preventDefault()
        }
        else { //Se n tiver tudo bem

            alert(strError)
            formSignIn.reset()
            rUser.focus()
        }

        event.preventDefault()
    })






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
       <a class="dropdown-item" href="#">Perfil</a>
       <a class="dropdown-item" href="#">Registar evento</a>   
       <a class="dropdown-item" href="#">Gerir Docentes</a>  
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
       <a class="dropdown-item" href="#">Registar evento</a>   
       <a class="dropdown-item" href="#">Gerir Docentes</a>  
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