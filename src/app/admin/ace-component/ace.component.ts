import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as AceAjax from 'brace';
import { Editor } from 'brace';
import { AceMode, AceTheme } from '../../share/ace-highlight/ace-mode';


const brace = require('brace');


@Component({
    selector: 'ace-editor',
    templateUrl: './ace.component.html',
    styleUrls: [ './ace.component.css' ]
})
export class AceComponent implements OnInit, AfterViewInit {

    @Input() mode: AceMode = 'javascript';
    @Input() theme: AceTheme = 'textmate';
    @Input() value;
    @Input() options: { enableBasicAutocompletion: boolean, [ Key: string ]: any } = {
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
    };
    @Output() sessionChange = new EventEmitter<string>();
    @Input() readonly: boolean = false;

    @ViewChild('ace', {static: true}) targetElement: ElementRef;

    /* options */
    @Input() showLineNumbers: boolean = true;


    private editor: Editor;

    constructor() {
    }

    setValue(val: string, cursorPos?: number) {
        this.editor.setValue(val, cursorPos);
    }

    setOptions() {
        this.editor.setOptions({
            ...this.options,
            showLineNumbers: this.showLineNumbers
        });
    }


    getValue(): string {
        return this.editor.getValue();
    }

    selection(): AceAjax.Selection {
        return this.editor.selection;
    }

    moveCursorTo(row, column): void {
        return this.editor.moveCursorTo(row, column);
    }

    clearSelection(): void {
        return this.editor.clearSelection();
    }

    ngAfterViewInit(): void {
    }

    ngOnInit() {
        this.initEditor();
        this.setMode(this.mode);
        this.setTheme(this.theme);
        this.setValue(this.value);
        this.editor.setReadOnly(this.readonly);
        this.setOptions();
        this.addChange();
        this.clearSelection();
    }


    private addChange() {
        this.editor.getSession().on('change', (e) => {
            this.sessionChange.emit(this.getValue());
        });
    }


    private initEditor(): void {
        this.editor = brace.edit(this.targetElement.nativeElement);
    }

    private setMode(mode: string): void {
        this.editor.getSession().setMode(`ace/mode/${ mode }`);
    }

    private setTheme(theme: string): void {
        this.editor.setTheme(`ace/theme/${ theme }`);
    }
}
