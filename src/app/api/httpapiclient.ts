import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpApiClient {

    defaultHeader = new HttpHeaders({});

    constructor(private httpClient: HttpClient) {}

    get(url, params = null, header = null) {
        return this.httpClient.get(url, {
            params: params,
            headers: header || this.defaultHeader
        });
    }

    post(url, params = null, header = null) {
        return this.httpClient.post(url, {
            params: params,
            headers: header || this.defaultHeader
        });
    }
}
