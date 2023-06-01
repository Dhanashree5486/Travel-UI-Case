import { FlightComponent } from './flight/flight.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { CardComponent } from './card/card.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'card', component: CardComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'register', component: RegistrationComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
