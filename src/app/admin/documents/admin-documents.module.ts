import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDocumentPanelModule } from './admin-document-panel/admin-document-panel.module';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentFormUiComponent } from './document-form-ui/document-form-ui.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SrcInputComponent } from './document-form-ui/src-input/src-input.component';
import { AceModule } from '../ace-component/ace.module';
import { DocumentModule } from '../../dot-memo/document/document.module';


@NgModule({
    declarations: [
        AdminDocumentsComponent,
        DocumentEditComponent,
        DocumentFormComponent,
        DocumentFormUiComponent,
        DocumentNewComponent,
        DocumentPreviewComponent,
        SrcInputComponent,
    ],
    imports: [
        AceModule,
        AdminDocumentPanelModule,
        CommonModule,
        DocumentModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class AdminDocumentsModule {
}
