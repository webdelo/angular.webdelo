import {Component, ViewEncapsulation} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {UserService} from "../core/authorization/service/user.service";

@Component({
    selector: 'app-header',
    templateUrl: '/templates/dashboard/header.html',
    styleUrls: ['src/css/header.css'],
    providers: [ UserService ],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent{
    constructor(
        private user: UserService,
        private http: Http,
        private router: Router
    ){
    }

    logout() {
        this.http
            .post('/api/auth/logout', [])
            .subscribe(response => {
                this.router.navigate(['/']);
                this.user.isAuthorized();
            }, response => {
                console.log(response);
            })
    }
}