import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsefulComponent } from './useful/useful.component';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';
import { LikeComponent } from './like/like.component';
import { ReliableComponent } from './reliable/reliable.component';

@NgModule({
    declarations: [
        UsefulComponent,
        UpComponent,
        DownComponent,
        LikeComponent,
        ReliableComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsefulComponent,
        UpComponent,
        DownComponent,
        LikeComponent,
        ReliableComponent
    ]
})
export class IconsModule {
}
