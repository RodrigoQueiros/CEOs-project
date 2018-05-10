let arrayUser=[]
let arrayEvents=[]
let arrayComents=[]
let arrayCategory=[]
let arrayTeachers=[]
let arrayTestimonial=[]
let arrayPartnerships=[]
// ############ Cass User ############

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

  static getLastId() {
    let lastId = 0
    if(arrayUser.length != 0) {
    lastId = arrayUser[arrayUser.length-1].id
    }
    return lastId
    }
   
}

//############ Class Events ############

class Events{
    constructor(eventname,description,date,event_time,creat_time,state,space,category,responsable,image,coments,rating,views)
    {
        this._id= arrayEvents.getLastId()+1
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
        this._id= arrayTeachers.getLastId()+1
        this.name=name
        this.photo=photo
        this.formation=formation
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
    constructor(identification,testimonial){
        this._id= arrayTestimonial.getLastId()+1 
        this.identification=identification
        this.testimonial=testimonial

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


}
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




