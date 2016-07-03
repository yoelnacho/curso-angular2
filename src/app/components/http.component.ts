import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../services/http.service';

@Component({
    selector: 'http',
    templateUrl: 'app/view/http.component.html',
    providers: [ HTTPService ]
})
export class HTTPComponent implements OnInit {
    public posts;
    public myPost;
    error: any;

    constructor(private _httpService = HTTPService) { }

    onTestGet(){
        this._httpService
            .getData()
            .then(posts => this.posts = posts)
            .catch(error => this.error = error);
    }

    ngOnInit() { }
}