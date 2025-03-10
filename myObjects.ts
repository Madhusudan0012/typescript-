// type User  = {
//     name : string , 
//     // password : number,
//     isActive : boolean ,
//     email : string

// }

// function createUser(user : User ) : User{
//     return {name : "" , email : ""  , isActive : true}
// }

// createUser({name : "" , email : ""  , isActive : true})

//type allies in typescript     

type  User =  {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean
    creditCard? : number 
}


let myUser : User = {
    _id : "1234",
    name : "h",
    email : "h@h.com",
    isActive : false,
    creditCard : 12434
}

myUser.email = "madhusudanchauhan62@gmail.com"


type cardnumber ={
    cardnumber: string
}

type cardDate = {
    cardDate: string 

}

type cardDeatils = cardDate & cardnumber & {
    cvv : number 
}