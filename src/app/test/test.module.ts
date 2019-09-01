import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IconsModule } from '../share/icons/icons.module';
import { DotMemoModule } from '../dot-memo/dot-memo.module';
import { HttpClientModule } from '@angular/common/http';
import { SiteModule } from '../site/site.module';
import { AceHighlightModule } from '../share/ace-highlight/ace-highlight.module';
import { DragDemoModule } from '../share/drag/drag-demo.module';
import { BizierCurveComponent } from './bizier-curve/bizier-curve.component';
import { ComponentFactoryComponent } from './component-factory/component-factory.component';
import { ComponentInjectionComponent } from './component-injection/component-injection.component';
import { HostComponent } from './host/host.component';
import { LayoutComponent } from './layout/layout.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { RotateComponent } from './rotate/rotate.component';
import { SvgPathComponent } from './svg-path/svg-path.component';
import { ZoomInComponent } from './zoom-in/zoom-in.component';
import { TestComponent } from './test.component';
import { DotDragDropModule } from './dot-drag-drop/dot-drag-drop.module';


@NgModule({
    declarations: [
        BizierCurveComponent,
        ComponentFactoryComponent,
        ComponentInjectionComponent,
        HostComponent,
        LayoutComponent,
        PerspectiveComponent,
        RotateComponent,
        SvgPathComponent,
        ZoomInComponent,
        TestComponent
    ],
    imports: [
        DotDragDropModule,
        CommonModule,
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
        DragDemoModule,
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
    exports: [
        TestComponent
    ]
})
export class TestModule {
}
