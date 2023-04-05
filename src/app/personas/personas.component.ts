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

  constructor(private logginService: LoggingService,
    private personasService: PersonasService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.personasService.listaPersonas()
      .subscribe(
        (personas: Persona[]) => {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        }
      );
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }

}
