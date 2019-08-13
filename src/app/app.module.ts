import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {HttpApiClient} from './api/httpapiclient';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent, HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        HttpApiClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
