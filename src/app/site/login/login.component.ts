import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiAuthService } from '../../service/api-auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {


    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private apiAuthService: ApiAuthService,
        private router: Router
    ) {
    }

    redirectToAdmin() {
        return this.router.navigateByUrl('admin');
    }

    ngOnInit() {
        this.formGroup = this.fb.group({
            email: '',
            password: ''
        });
    }

    submit() {
        /*login and redirect*/
        const values = this.formGroup.getRawValue();
        this.apiAuthService.login(values).subscribe(data => {
            if (data.result) {
                this.redirectToAdmin().catch(err => {
                    this.handleError(err);
                });
            }
        }, error => {
            this.handleError(error);
        });
    }

    handleError(err) {
        alert(err);
    }

    login(values: { email: string, password: string }) {
        this.apiAuthService.login(values);
    }

}
