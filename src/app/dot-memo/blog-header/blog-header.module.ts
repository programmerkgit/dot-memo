import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHeaderComponent } from './blog-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        BlogHeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BlogHeaderComponent
    ]
})
export class BlogHeaderModule {
}
