import {Injectable} from '@angular/core';
import {HttpApiClient} from '../../api/httpapiclient';
import {MainApi} from '../../api/main.api';

@Injectable()
export class HomeService {

    constructor(private httpClient: HttpApiClient) {}

    getTagsList() {
        return this.httpClient.get(MainApi.homeTagList);
    }
}
