import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/department', pathMatch:'full'},//prefix
  {path: 'department',component: DepartmentListComponent},
  {path: 'department/:id', component: DepartmentDetailComponent},
  {path: 'employee',component: EmployeeListComponent},
  {path: "**", component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentListComponent,EmployeeListComponent,
                               PageNotFoundComponent, DepartmentDetailComponent ]