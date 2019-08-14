import {Injectable} from '@angular/core';
import {HttpApiClient} from '../../api/httpapiclient';
import {MainApi} from '../../api/main.api';
import {Observable} from 'rxjs';

@Injectable()
export class HomeService {

    constructor(private httpClient: HttpApiClient) {}

    getTagsList(): Observable<any> {
        return this.httpClient.get(MainApi.homeTagList);
    }

    getVideoListByTag(tagUrl): Observable<any> {
        return this.httpClient.get(tagUrl);
    }
}
