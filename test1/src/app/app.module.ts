import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe'
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    ReactiveComponent,
    AboutComponent,
    FilterPipe,
 

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
