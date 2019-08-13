import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpApiClient {

    defaultHeader = {};

    constructor(private httpClient: HttpClient) {}

    get(url, params = null, header = {}) {
        return this.httpClient.get(url, {
            params: params,
            headers: header || this.defaultHeader
        });
    }

    post(url, params = null, header = {}) {
        return this.httpClient.post(url, {
            params: params,
            headers: header || this.defaultHeader
        });
    }
}
