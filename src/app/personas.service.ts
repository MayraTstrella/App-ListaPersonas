import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./data.service";

@Injectable()
export class PersonasService {

  personas: Persona[] = [];


  constructor(private loggingService: LoggingService,
    private dataService: DataService) {

  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  listaPersonas() {
    return this.dataService.verLista();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.mensajeAconsola("Agrego persona: " + persona.nombre);
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  buscarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  editarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);

  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    //cargo el arreglo para modificar los indices en la bd
    this.modificarBDindex();
  }

  modificarBDindex() {
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}