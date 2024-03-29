import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Document } from '../../model/document';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiAuthService } from '../../service/api-auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: [ './document.component.scss' ]
})
export class DocumentComponent implements OnInit, OnChanges {

    @Input() document: Document;

    color = '#909090';
    selectedColor = '#013BDA';

    sanitizedContent: SafeHtml;

    constructor(
        private sanitizer: DomSanitizer,
        private apiAuthService: ApiAuthService
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.document.content);
    }

    isAdmin$(): Observable<boolean> {
        return this.apiAuthService.isAdmin();
    }

    ngOnInit() {
    }
}
