import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    verLista() {
        return this.http.get<Persona[]>('https://app-listapersonas-default-rtdb.firebaseio.com/datos.json');
    }

    guardarPersonas(personas: Persona[]) {
        this.http.put('https://app-listapersonas-default-rtdb.firebaseio.com/datos.json', personas).
            subscribe(response => console.log("personas guardadas:" + response));

    }

    modificarPersona(index: number, persona: Persona) {
        let url: string;
        url = 'https://app-listapersonas-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.http.put(url, persona).subscribe(
            resp => console.log("Resultado editar persona:" + resp)
            // error => console.log("error en editar:" + error) 
        );
    }

    eliminarPersona(index: number) {
        let url: string;
        url = 'https://app-listapersonas-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.http.delete(url).subscribe(
            resp => console.log("Resultado eliminar persona:" + resp)
            // error => console.log("error en editar:" + error) 
        );
    }
}