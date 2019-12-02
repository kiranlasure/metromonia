import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApicallComponent } from './apicall/apicall.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Apicall2Component } from './apicall2/apicall2.component';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
  {path:'', component:CalculatorComponent},
  {path:'api', component:ApicallComponent},
  {path:'apicall2',component:Apicall2Component},
  {path:'flex',component:FlexComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =[CalculatorComponent, ApicallComponent, PageNotFoundComponent,Apicall2Component]
