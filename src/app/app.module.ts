import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [LoggingService, PersonasService, DataService, LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
