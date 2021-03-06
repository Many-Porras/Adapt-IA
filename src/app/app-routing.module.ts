import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { Servi01Component } from './components/service/servi01/servi01.component';
import { Servi02Component } from './components/service/servi02/servi02.component';
import { Servi03Component } from './components/service/servi03/servi03.component';
import { Servi04Component } from './components/service/servi04/servi04.component';
import { Servi05Component } from './components/service/servi05/servi05.component';
import { ProjectComponent } from './components/project/project.component';
import { ClientComponent } from './components/client/client.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  //{ path: 'nav', component: NavbarComponent},
  { path: '', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent}, // TODO: only user auth.
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'service01', component: Servi01Component},
  { path: 'service02', component: Servi02Component},
  { path: 'service03', component: Servi03Component},
  { path: 'service04', component: Servi04Component},
  { path: 'service05', component: Servi05Component},
  { path: 'project', component: ProjectComponent},
  { path: 'client', component: ClientComponent},
  { path: 'footer', component: FooterComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent, HomeComponent, LoginComponent, RegisterComponent,
ProfileComponent, AboutComponent, ServiceComponent, Servi01Component, Servi02Component,
Servi03Component, Servi04Component, Servi05Component, ProjectComponent, ClientComponent,
FooterComponent, Page404Component]
