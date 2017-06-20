import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';


import { routedComponents, AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';


import { DemoLayoutComponent } from './AppLayout/demo-layout.component';
import { LeftMenuComponent } from './main/left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    DemoLayoutComponent,
    LeftMenuComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

  ], // modules needed to run this module
  providers: [

  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
