import {IUser} from "./IAppModel";
/** HTTP RESPONSE INTERFACE */

export interface IGet{
  success:number,
  data:any,
  meta?:{
    skip:number,
    limit:number,
    count:number
  },
  message?:string
}


export interface IPostPut{
  success:number,
  data:any,
  message?:string
}


export interface IDelete{
  success:number,
  message?:string
}

export interface ILogin{
  success:number,
  token:string,
  user:IUser
}


export interface IRegister{
  success:string,
  message?:string
}

/** HTTP RESPONSE INTERFACE ENDS */


/** Alert INTERFACE */

export interface IAppAlert{
  title:string,
  message?:string
}

/** Alert INTERFACE END*/



/** Menu Interface */

 export interface IMenu{
   route:string,
   title:string,
  icon?:string
}

/** Menu INTERFACE END **/
