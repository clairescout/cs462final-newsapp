import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    eci = 'JkZy768XEPMUWvvFsQLVXd';
    baseUrlQuery = `http://localhost:8080/sky/cloud/${this.eci}`;
    baseUrlEvent = `http://localhost:8080/sky/event/${this.eci}/eid`;
    constructor(private httpClient: HttpClient) { }

    public get(resourceurl) {
        return this.httpClient.get(`${this.baseUrlQuery}/${resourceurl}`);
    }

    public post(resourceUrl: string, payload: any) {
        return this.httpClient.post(`${this.baseUrlEvent}/${resourceUrl}`, payload);
    }
}
