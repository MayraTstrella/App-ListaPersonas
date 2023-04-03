import { Component, Input } from '@angular/core';
import { PersonasService } from 'src/app/personas.service';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() id: number;

  constructor(private personaService: PersonasService) {

  }
}
