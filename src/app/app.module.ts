import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DotMemoModule } from './dot-memo/dot-memo.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SiteModule } from './site/site.module';
import { UsefulComponent } from './share/icons/useful/useful.component';
import { IconsModule } from './share/icons/icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDemoComponent } from './share/drag/drag-demo.component';
import { AceHighlightComponent } from './share/ace-highlight/ace-highlight.component';
import { AceHighlightModule } from './share/ace-highlight/ace-highlight.module';
import { DragDemoModule } from './share/drag/drag-demo.module';
import { TestModule } from './test/test.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        TestModule,
        /* Basic Modules */
        BrowserModule,
        BrowserAnimationsModule,
        /* App Routing */
        AppRoutingModule,
        /*Firebase*/
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        /* Modules */
        IconsModule,
        DotMemoModule,
        HttpClientModule,
        SiteModule,
        BrowserAnimationsModule,
        AceHighlightModule,
        DragDemoModule
    ],
    providers: [],
    exports: [
        UsefulComponent
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        DragDemoComponent,
        AceHighlightComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
