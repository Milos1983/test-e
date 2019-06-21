import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



export const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: '/login', pathMatch: 'full'},
    { path: "**", redirectTo: '/login' }
]