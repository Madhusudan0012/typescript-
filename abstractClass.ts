    abstract class TakePhoto1{
        constructor(
            public cameraMode : string , 
            public filter : string  
        ){} 

        abstract getSepia() : void 
    }


    class Instagram1 extends TakePhoto1{
        constructor(
            public cameraMode : string , 
            public filter : string  , 
            public brust  : number 
        ){
            super(cameraMode , filter )
        }
        getSepia(): void {
            console.log("Do Nothing just a time pass ")
        }
        

    }

    // const ankit = new Instagram("test" , "Test")