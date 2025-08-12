import { Routes } from '@angular/router';
import {Chime} from './landing/landing';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Chime },
  { path: 'chime', component: Chime }
];
