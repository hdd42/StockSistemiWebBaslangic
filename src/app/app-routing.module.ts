import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainComponent} from "./main/main.component";

import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
export const routedComponents: any[] = [
  MainComponent, LoginComponent
];
