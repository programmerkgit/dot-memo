import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotDragDropComponent } from './dot-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
    declarations: [ DotDragDropComponent ],
    imports: [
        CommonModule,
        DragDropModule
    ],
    exports: [
        DotDragDropComponent
    ]
})
export class DotDragDropModule {
}
