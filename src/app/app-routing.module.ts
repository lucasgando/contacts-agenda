import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { publicGuard } from './guards/public.guard';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'contacts',
    pathMatch: "full"
  },
  {
    path: "login",
    canActivate: [publicGuard],
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    canActivate: [publicGuard],
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "contacts",
    canActivate: [userGuard, adminGuard],
    loadChildren: ()=> import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: "contacts/:id",
    canActivate: [userGuard, adminGuard],
    loadChildren: ()=> import('./pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule)
  },
  {
    path:"**",
    loadChildren: ()=> import('./pages/error/error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
