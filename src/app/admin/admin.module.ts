import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentModule } from '../dot-memo/document/document.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { DraftComponent } from './draft/draft.component';
import { IconsModule } from '../share/icons/icons.module';
import { CategoryFormUiComponent } from './categories/category-form-ui/category-form-ui.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { DroppableModule } from '../share/droppable/droppable.module';
import { AdminDocumentPanelModule } from './documents/admin-document-panel/admin-document-panel.module';
import { AdminDocumentsModule } from './documents/admin-documents.module';
import { AceModule } from './ace-component/ace.module';

@NgModule({
    declarations: [
        AdminComponent,
        AdminHeaderComponent, DraftComponent, CategoryFormUiComponent, CategoryFormComponent,
        CategoryNewComponent, CategoryComponent, CategoryListComponent, CategoryEditComponent,
    ],
    imports: [
        AdminDocumentsModule,
        CommonModule,
        AdminDocumentPanelModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        DocumentModule,
        IconsModule,
        DroppableModule,
        FormsModule,
        AceModule
        /* share */
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminModule {
}
