import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard.service';


const routes: Routes = [
  {path: '', component: PersonasComponent, canActivate:[LoginGuard]},
  {path: 'personas', component: PersonasComponent, canActivate:[LoginGuard], children: [

    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent}
  ]},
  
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent }
]

@NgModule({

  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
