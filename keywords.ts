class User {
    public email : string 
    name : string 
    private     readonly city : string ="jaipur"
    constructor(email: string , name : string){
        this.email = email;
        this.name = name
    }

}

const Madhusudan = new User("h@h.com" , "Madhusudan")
// Madhusudan.city