import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {

    constructor(private http: HttpClient,
                private loginServ: LoginService
        ) { }

    verLista() {
        const token = this.loginServ.getIdToken();
        return this.http.get<Persona[]>('https://app-listapersonas-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarPersonas(personas: Persona[]) {
        const token = this.loginServ.getIdToken();
        this.http.put('https://app-listapersonas-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas).
            subscribe(response => console.log("personas guardadas:" + response));

    }

    modificarPersona(index: number, persona: Persona) {
        const token = this.loginServ.getIdToken();
        let url: string;
        url = 'https://app-listapersonas-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.http.put(url, persona).subscribe(
            resp => console.log("Resultado editar persona:" + resp)
            // error => console.log("error en editar:" + error) 
        );
    }

    eliminarPersona(index: number) {
        const token = this.loginServ.getIdToken();
        let url: string;
        url = 'https://app-listapersonas-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.http.delete(url).subscribe(
            resp => console.log("Resultado eliminar persona:" + resp)
            // error => console.log("error en editar:" + error) 
        );
    }
}