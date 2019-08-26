import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import { DocumentFeedBacksComponent } from './document-feedbacks/document-feed-backs.component';
import { IconsModule } from '../../share/icons/icons.module';
import { MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

const shareModule = [
    DocumentComponent,
    DocumentFeedBacksComponent
];

@NgModule({
    declarations: [
        ...shareModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        IconsModule,
        MatTooltipModule
    ],
    exports: [
        ...shareModule
    ]
})
export class DocumentModule {
}
