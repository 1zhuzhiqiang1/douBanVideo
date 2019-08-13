import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
    selector: 'home-page',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [
        HomeService
    ]
})
export class HomeComponent implements OnInit{

    tags = ["热门", "最新", "经典"];
    selectTag = 0;

    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.homeService.getTagsList().subscribe(res => {
            console.log('taglist:',res);
            this.tags = res;
        })
    }

}
