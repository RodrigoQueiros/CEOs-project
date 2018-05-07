let arrayUser=[]
let arrayEvents=[]

//Cass User

class User{
    constructor(username,password,type,email,picture="https://d2w4qhtqw2dbsq.cloudfront.net/profile_live/2070689/large.jpg")
    {
        this._id= arrayUser.getLastId()+1
        this.username=username 
        this.password=password
        this.type=type
        this.email=email
        this.picture=picture

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
 
  set picture(newPicture) 
  {
   this._picture = newPicture
  }

}

//Class Events

//Class Coments

//Class Category

//Class teachers

//Class testimonials

//Class partnerships

//Class course



//Window on Load

window.onload = function(){

//Admin
let newAdmin = new User("RL","projeto","admin","","")



//Get elements by ids
let formFilter = document.getElementById("") //Form dos filtros 
let formSingIn = document.getElementById("") //Form de registo
let formLogIn = document.getElementById("") //Form de Log in

//Filtrar eventos
formFilter.addEventListener("submit", function(event){




})


//Registar user
formSingIn.addEventListener("submit", function(event){





})




}




