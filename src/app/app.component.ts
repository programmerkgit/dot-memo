import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ApiAuthService } from './service/api-auth.service';
import { DragDemoComponent } from './share/drag/drag-demo.component';
import { AceHighlightComponent } from './share/ace-highlight/ace-highlight.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnDestroy, OnInit {
    title = 'app';
    routerSubscription: Subscription;

    constructor(
        private injector: Injector,
        private router: Router,
        private apiAuthService: ApiAuthService
    ) {
        const dragDemo = createCustomElement(DragDemoComponent, {injector});
        if (document.createElement('drag-demo').constructor === HTMLElement) {
            customElements.define('drag-demo', dragDemo);
        }
        const aceHighLight = createCustomElement(AceHighlightComponent, {injector});
        if (document.createElement('app-ace-highlight').constructor === HTMLElement) {
            customElements.define('app-ace-highlight', aceHighLight);
        }
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.apiAuthService.setUser().subscribe();
        if (environment.production) {
            this.routerSubscription = this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
            ).subscribe((event: any) => {
                (window as any).ga('set', 'page', event.urlAfterRedirects);
                (window as any).ga('send', 'pageview');
            });
        }
    }
}
