import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'douBanVideo';

  constructor(){
      console.log('欢迎来到 AngularFlow，让学习变成更简单');
      console.log('我的csdn: ','https://blog.csdn.net/zhuzhiqiang_zhu');
      console.log('我的百家号','https://baijiahao.baidu.com/u?app_id=1641438982695128');
  }
}
