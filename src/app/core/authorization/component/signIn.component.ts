import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

class User {
    username: string;
    password: string;
}

@Component({
    selector: 'cg-sign-in',
    templateUrl: '/templates/core/authorization/sign-in.component.html',
    providers: [UserService]
})
export class SignInComponent {
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });
    public userData: User = new User;
    public error: Boolean = false;
    public submitted: boolean;
    public profile: any;

    constructor(
        private fb: FormBuilder,
        private http: Http,
        private router: Router,
        private user: UserService
    ) {}

    signIn() {
        if ( this.loginForm.valid ) {
            this.http
                .post('/api/auth/signIn', this.userData)
                .subscribe(response => {
                    console.log(this.user);
                    this.router.navigate(['dashboard']);
                }, response => {
                    if ( response.status == 401 ) {
                        this.error = true;
                    } else {
                        console.log(response);
                    }
                });
        }
        this.submitted = true;
    }

    isAuthorized() {
        return this.user.authorized;
    }

    logout() {
        this.http
            .post('/api/auth/logout', this.userData)
            .subscribe(response => {
                this.router.navigate(['/']);
                this.user.isAuthorized();
            }, response => {
                if ( response.status == 401 ) {
                    this.error = true;
                } else {
                    console.log(response);
                }
            })
    }
}