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

function loadFromStorage() {

    if(localStorage.User){
        let tempArray = JSON.parse(localStorage.getItem("User"))
        for (var i = 0; i < tempArray.length; i++) {
            
            let newUser =  new User(tempArray[i]._username, tempArray[i]._password,tempArray[i]._type,tempArray[i]._email)
            myUsers.push(newUser)       
        }

    }
    
}

window.onload = function () {
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


let formLogIn = document.getElementById("formLogIn") //Form de Log in
formLogIn.addEventListener("submit",function(event){

    let loginEmail = document.getElementById("logInEmail")
    let loginPass = document.getElementById("logInPass")
    let loginError = ""
    let loggedUser = []
    if (localStorage.getItem("User")) {
            
       for (var i = 0; i < myUsers.length; i++) {
           if (myUsers[i].email == loginEmail) {
               if(myUser[i].password == loginPass ){
                alert("Ok!")
                loggedUser = myUser[i]

               }
               else{
                loginError="A palavra passe não esta certa"
                //Limpa passe, foca passe
               }
               break
           }
           else{
            loginError="O User não existe"
            //Limpa tudo
           }
       }
       
   }
   if(loginError==""){
    localStorage.setItem("LoggedUser", JSON.stringify(loggedUser))
    // Fazer função de user logged

   }
   else
   {
       alert(loginError)
   }


    event.preventDefault()
})









}


