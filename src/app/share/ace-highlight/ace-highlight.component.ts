import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AceMode, AceTheme } from './ace-mode';

const ace = require('brace');
require('brace/ext/static_highlight');
require(`brace/mode/javascript`);
require(`brace/mode/sh`);
require(`brace/mode/html`);
require(`brace/mode/yaml`);
require(`brace/mode/typescript`);
require(`brace/theme/dawn`);
require(`brace/theme/textmate`);
require(`brace/theme/terminal`);
require(`brace/theme/xcode`);
require(`brace/theme/twilight`);
require('brace/ext/language_tools');

@Component({
    selector: 'app-ace-highlight',
    templateUrl: './ace-highlight.component.html',
    styleUrls: [ './ace-highlight.component.scss' ]
})
export class AceHighlightComponent implements OnInit, AfterViewInit {


    @ViewChild('target', {static: true}) target;
    @Input() value: string;
    @Input() mode: AceMode;
    @Input() theme: AceTheme = 'dawn';

    constructor() {
    }

    ngAfterViewInit(): void {
        const highlighter = ace.acequire('ace/ext/static_highlight');
        highlighter.highlight(this.target.nativeElement, {
            mode: `ace/mode/${ this.mode }`,
            theme: `ace/theme/${ this.theme }`
        });
    }

    ngOnInit() {
    }

}
