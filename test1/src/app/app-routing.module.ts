import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { AboutComponent } from './about/about.component';
import { ReactiveComponent } from './reactive/reactive.component';


const routes: Routes = [
  {path: 'form', component:Form1Component},
  {path:'react', component: ReactiveComponent},
  {path: 'search', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
