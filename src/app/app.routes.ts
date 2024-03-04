import { Routes } from '@angular/router';
import { AboutComponent } from './modules/user/about/about.component';
import { ContactComponent } from './modules/user/contact/contact.component';
import { HomeComponent } from './modules/user/home/home.component';
import { LoginComponent } from './modules/user/login/login.component';
import { MenuComponent } from './modules/user/menu/menu.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { ReservationComponent } from './modules/user/reservation/reservation.component';
import { UserComponent } from './modules/user/user.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: UserComponent,
    children: [
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'reservation',
        component: ReservationComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
