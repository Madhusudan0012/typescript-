class User1 {
   protected _courseCount    = 1
    readonly    city : string = "Agra"
    constructor(
        public email: string,
        public name : string , 
    ){

    }
    getAppleEamil() : string {
        return `apple   ${this.email}`
    }
    setCourseCount() : number{
            return this._courseCount
    }
}

class subUser1 extends User1{
    //only public is used in that 
    isFamily : boolean = true 
    changeCourseCount() {
        this._courseCount = 4 
    }
}

//Protected means accessable to parent classs as well as to child class that inherit that property from main class  