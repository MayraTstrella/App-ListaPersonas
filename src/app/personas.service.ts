import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {

    personas: Persona[] = [new Persona ('Mayra', 'Torres')];


    constructor( private loggingService: LoggingService) {

    }

    agregarPersona(persona: Persona) {
        this.loggingService.mensajeAconsola("Agrego persona: " + persona.nombre);
        this.personas.push( persona );
        
      }

    buscarPersona(index: number) {
      let persona: Persona = this.personas[index];
      return persona;
    }  

    editarPersona(index: number, persona: Persona) {
      let persona1 = this.personas[index];
      persona1.nombre = persona.nombre;
      persona1.apellido = persona.apellido;

    }

    eliminarPersona(index: number) {
      this.personas.splice(index,1);
    }
}