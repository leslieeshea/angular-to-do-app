import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // have to add this here because it's a module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
