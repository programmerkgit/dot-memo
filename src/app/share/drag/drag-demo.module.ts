import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDemoComponent } from './drag-demo.component';
import { DroppableModule } from '../droppable/droppable.module';


@NgModule({
    declarations: [
        DragDemoComponent
    ],
    imports: [
        CommonModule,
        DroppableModule
    ],
    exports: [
        DragDemoComponent
    ]
})
export class DragDemoModule {
}
