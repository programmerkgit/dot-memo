import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotMemoComponent } from './dot-memo.component';
import { DocumentRoutedComponent } from './document-routed/document-routed.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
    {
        path: 'documents', component: DotMemoComponent,
        children: [
            {
                path: ':id', component: DocumentRoutedComponent, data: {
                    page: 'document'
                }
            },
            {
                path: '', component: DocumentsComponent, data: {
                    page: 'documents'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    entryComponents: []
})
export class DotMemoRoutingModule {
}
