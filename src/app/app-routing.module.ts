import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainComponent} from "./main/main.component";

import {LoginComponent} from "./login/login.component";

import {DemoLayoutComponent} from "./AppLayout/demo-layout.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: '',
    component: MainComponent,
    children: [

      {
        path: '',
        component: DemoLayoutComponent
      },

      //{path: '', loadChildren: './users/users.module#UsersModule'},
    ],
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
