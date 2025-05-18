const score: Array<number> =[]
const name1 : Array<string> = []

function identityOne(val : boolean | number) : boolean|number {
    return val; 
}

function identityTwo (val : any) : any {
    return val ;
}

//at last we made generics function 

function identityThree<Type>(val : Type) : Type{
    return val; 
}

//when you passes anything from type than the value type is locked !!

function identityFour<T> (val : T) : T{
    return val;
}

interface bootle{
    color : string 
    size: number 
}

//function 

function ProductID <T>(Products: T[]):T{
    //do some database operations 
    const myIndex = 3
    return ProductID[myIndex]


}

const getMoreSearchProducts = <T>(products: number[]): number  =>{
    //do some database opertaions 
    const myIndex = 4
    return products[myIndex]

}