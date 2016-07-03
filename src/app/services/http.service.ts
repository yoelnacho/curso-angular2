import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HTTPService {

    // Url desde donde tomo la api
    private url = "http://jsonplaceholder.typicode.com/posts";

    // acceder al servicio HTTP
    constructor(private _http: Http) { }

    getData(): Promise<any> {
        return this._http.get(this.url)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}