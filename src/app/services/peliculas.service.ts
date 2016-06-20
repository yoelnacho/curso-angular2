import { Injectable } from '@angular/core';
import { PELICULAS } from './peliculas.mock';

@Injectable()
export class PeliculasService {

    // usamos el metodo get
    getPeliculas(){
        return PELICULAS;
    }
}