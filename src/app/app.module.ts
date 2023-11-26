import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CertificationComponent } from './certification/certification.component';


@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        CertificationComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
