import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {HomePojo} from '../../pojo/home/home.pojo';
import {MainApi} from '../../api/main.api';

@Component({
    selector: 'home-page',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [
        HomeService
    ]
})
export class HomeComponent implements OnInit{

    tags = [];
    tagUrls = [
        MainApi.remenVideoList,
        MainApi.zuixinVideoList,
        MainApi.jingdianVideoList,
        MainApi.huayuVideoList,
        MainApi.oumeiVideoList
    ];
    selectTag = 0;
    selectTagUrl: string;
    videos: Array<HomePojo>= [];
    greenUrl: '';

    constructor(private homeService: HomeService) {
    }

    clickTag(index, tagName) {
        this.selectTag = index;
        this.selectTagUrl = this.tagUrls[index];
        this.requestVideoList();
    }

    ngOnInit(): void {
        this.homeService.getTagsList().subscribe(res => {
            console.log('taglist:',res);
            this.tags = res;
            this.selectTag = 0;
            this.selectTagUrl = this.tagUrls[0];
            this.requestVideoList();
        })
    }

    requestVideoList() {
        this.homeService.getVideoListByTag(this.selectTagUrl).subscribe((res: any) => {
            this.videos = res.subjects;
            console.log('videos:', this.videos);
        });
    }

}
