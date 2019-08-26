import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceComponent } from './ace.component';


@NgModule({
    declarations: [
        AceComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AceComponent
    ]
})
export class AceModule {
}
