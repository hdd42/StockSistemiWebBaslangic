import { Injectable } from '@angular/core';
import {IMenu} from "../../data/AppInterface";

@Injectable()
export class MenuService {



  constructor() {

  }

  getMenu() : Array<IMenu>{
    return MenuList.admin
  }

}


export const MenuList  = {
  admin:[
    { title : 'Kullanicilar', route:'/users' , icon: 'people' },
    { title : 'Urunler', route:'/products' ,icon: 'view_quilt'},
    { title : 'Siparisler', route:'/orders' ,icon: 'view_quilt' },
    { title : 'Alimlar', route:'/purchases'  ,icon: 'view_quilt'},
  ],
  bayi:[],
  calisan:[]
}
