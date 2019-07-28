import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDemoComponent } from './drag/drag-demo.component';
import { DroppableModule } from './droppable/droppable.module';
import { AceHighlightComponent } from './ace-highlight/ace-highlight.component';

const shareModules = [
    DragDemoComponent
];

@NgModule({
    declarations: [ ...shareModules, AceHighlightComponent ],
    imports: [
        CommonModule,
        DroppableModule
    ],
    exports: [ ...shareModules, AceHighlightComponent ]
})
export class ShareModule {
}
