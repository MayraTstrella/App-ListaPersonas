import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit {
 
   nombreI: string = '';
   apellidoI: string = '';
   idI: number;
   modoEdicion: number;

  constructor( private loggingService: LoggingService,
               private personasService: PersonasService,
               private router: Router,
               private route: ActivatedRoute ) {

  }

  ngOnInit() {

    this.idI = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //usando queryParams
    // if (this.idI) {
      if (this.modoEdicion != null && this.modoEdicion ===1 ) {
      let persona: Persona = this.personasService.buscarPersona(this.idI);
      this.nombreI = persona.nombre;
      this.apellidoI = persona.apellido;
    }
  }

  guardarPersona( ) {
    let personan = new Persona( this.nombreI, this.apellidoI )
    // if (this.idI) {
      if (this.modoEdicion != null && this.modoEdicion ===1 ) {
      this.personasService.editarPersona(this.idI, personan);

    } else {

      this.personasService.agregarPersona(personan);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.idI != null) {
      this.personasService.eliminarPersona(this.idI);
    }
    this.router.navigate(['personas']);
  }

}
