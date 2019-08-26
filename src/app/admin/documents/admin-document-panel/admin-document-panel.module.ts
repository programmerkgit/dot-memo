import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDocumentPanelComponent } from './admin-document-panel.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AdminDocumentPanelComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AdminDocumentPanelComponent
    ]
})
export class AdminDocumentPanelModule {
}
