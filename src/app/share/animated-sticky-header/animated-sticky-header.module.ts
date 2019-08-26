import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedStickyHeaderComponent } from './animated-sticky-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AnimatedStickyHeaderComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        AnimatedStickyHeaderComponent
    ]
})
export class AnimatedStickyHeaderModule {
}
