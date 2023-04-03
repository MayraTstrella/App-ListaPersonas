import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];

  constructor( private logginService: LoggingService,
               private personasService: PersonasService,
               private router:Router ){

  }
  ngOnInit(): void {
   this.personas = this.personasService.personas;
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }

}
