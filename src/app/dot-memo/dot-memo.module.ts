import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotMemoRoutingModule } from './dot-memo-routing.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { DotMemoComponent } from './dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentPanelComponent } from './document-panel/document-panel.component';
import { IconsModule } from '../share/icons/icons.module';
import { DocumentModule } from './document/document.module';
import { DocuemntPanelSimpleComponent } from './docuemnt-panel-simple/docuemnt-panel-simple.component';
import { RouterModule } from '@angular/router';
import { AnimatedStickyHeaderModule } from '../share/animated-sticky-header/animated-sticky-header.module';

@NgModule({
    declarations: [
        BlogHeaderComponent,
        DotMemoComponent,
        DocumentRoutedComponent,
        DocumentsComponent,
        DocumentPanelComponent,
        DocuemntPanelSimpleComponent
    ],
    imports: [
        CommonModule,
        DotMemoRoutingModule,
        RouterModule,
        /* share */
        AnimatedStickyHeaderModule,
        DocumentModule,
        IconsModule
    ],
    exports: [
        BlogHeaderComponent
    ]

})
export class DotMemoModule {
}
