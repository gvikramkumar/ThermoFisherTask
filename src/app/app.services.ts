import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

    constructor(private http: Http){

    }

    getWeatherData(req) {
        let requestOptions = new RequestOptions({
            method: req.method,
            url: req.url,
            body: req.data
        });

        return this.http.request(new Request(requestOptions))
                   .map((res) => res.json()); 
                //    .timeoutWith(6000, Observable.throw(new Error('Request timed out!')));
    }

}