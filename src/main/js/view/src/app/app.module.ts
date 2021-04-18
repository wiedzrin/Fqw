import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule} from "@angular/material/button";

import {MenuComponent} from "./header/menu/menu.component";
import { SearchComponent } from './header/search/search.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
