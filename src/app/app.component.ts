import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  personas: Persona[] = [];

  constructor( private logginService: LoggingService,
               private personasService: PersonasService ){

  }
  ngOnInit(): void {
   this.personas = this.personasService.personas;
  }

  // personaAgregada(persona: Persona) {

  //   this.personas.push( persona );
  //   this.logginService.mensajeAconsola('Persona Agregada');
 // this.personasService.agregarPersona(persona);
//}
}
