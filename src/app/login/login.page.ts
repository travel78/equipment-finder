import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public loginForm: FormGroup;
    public error: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }

    public onSubmit() {
        switch (this.loginForm.get('name').value) {
            case 'user':
                this.loginForm.reset({});
                this.error = null;
                return this.router.navigate(['user']);
            case 'admin':
                this.loginForm.reset({});
                this.error = null;
                return this.router.navigate(['admin']);
            default:
                this.error = 'Wrong credentials';
        }
    }
}
