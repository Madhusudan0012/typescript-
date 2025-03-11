// interface User {
//     readonly dbId : number,
//     name : string ,
//     id : number,
//     googleId?:number
//     startTrail: () => string
//     getCoupon(couponname: string): number 

  
// }

// const Madhusudan:User = {dbId: 909 , name : "madhusudan" , id : 90909,
//     startTrail: ()=>{
//         return "trail started"
//     }, 
//     getCoupon: (name: "Madhusudan10") =>{
//         return 10 
//     }
//  }
// Madhusudan.name = "rahul" 


interface  User {
    githubToken : string 
}

interface Admin extends User{
    role : "Admin"|"Learner" | "ta"
}

// const Madhusudan: Admin ={}