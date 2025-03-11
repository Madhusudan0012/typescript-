let score: number | string =  32

score = 44
score = "22"


type User  = {
    name :  string, 
    id : number 
}

type Admin = {
    username : string , 
    id : number 
}

let madhusudan : User | Admin ={name : "madhusudan" , id : 456465}

madhusudan = {username : "Madhusudan singh chahaun" , id : 67867856}


const data : number[] = [ 1,2,3]

const data2 : string[] = ["1" , "2" , "3"]

const data3 : (string| number | boolean )[] = ["1" ,2 , "2"]

let seatAllotment : "aisle" | "middle" | "window"
seatAllotment   = "aisle"