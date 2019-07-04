import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthguardGuard } from './authguard.guard';

export const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate:[AuthguardGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: "**", redirectTo: '/login' }
]
