//Classe Utilizador
let utilizadores=[]
class Utilizador{
    constructor(username,password,tipo,email,foto)
    {
        this._id= Utilizador.getLastId()+1
        this.username=username 
        this.password=password
        this.tipo=tipo
        this.email=email
        this.foto=foto

    }
    //propriedade Id
    get id() {
        return this._id
        }
    //Propriedade username
    get username()
     {
        return this._username
     }
       
    set username(newUsername) 
    {
        this._username = newUsername
    }
    //Propriedade password
    get password()
     {
        return this._password
     }
       
    set password(newPassoword)
     {
        this._password = newPassoword
     }
      // Propriedade email
    get email() 
     {
      return this._email
     }
   
    set email(newEmail) 
    {
     this._email = newEmail
    }
    // Propriedade email
         
}