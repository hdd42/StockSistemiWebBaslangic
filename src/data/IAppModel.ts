export interface IProduct {
  "_id": string,
  "name": string
  "price": number,
  "vendor": {
    "_id": string,
    "title": string
  },
  "stock": number,
  "productCode": string

}


export interface IUser {
  "_id": string,
  "email": string,
  "name": string,
  "deletedAt"?:Date|null,
  "active": boolean,
  "role": string
}

