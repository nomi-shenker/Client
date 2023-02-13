import Child from "./Child";

export default class User{
    FirstName:string='';
    LastName:string="";
    Tz:string='';
    DateOfBirth:Date =null;
    egender:number=0;
    HMO:string=''
    childrenUser:Array<Child>=[];

    constructor(FirstName?:string, LastName?:string,  Tz?:string, DateOfBirth?:Date,  egender?:number, HMO?:string,childrenUser?:Array<Child>){
     this.FirstName=FirstName;
     this.LastName=LastName;
     this.DateOfBirth=DateOfBirth;
     this.Tz=Tz;
     this.egender=egender;
     this.HMO=HMO;
     this.childrenUser=new Array<Child>();
    }
 
    
}
