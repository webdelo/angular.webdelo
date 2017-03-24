import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class UserService {
    public profile: any;
    public authorized: Boolean;
    private profileSource: string = '/api/profile.json';

    constructor( private http: Http, private router: Router ){
        this.loadProfile();
        this.isAuthorized();
    }

    loadProfile() {
        this.http
            .get(this.profileSource)
            .subscribe(
                response => {
                    this.profile = response.json();
                },
                response => {
                    console.log(response);
                }
            );

        return this;
    }

    getProfile() {
        return this.profile;
    }

    isAuthorized() {
        this.http
            .get(this.profileSource)
            .subscribe(
                response => {
                    this.authorized = true;
                },
                response => {
                    this.authorized = false;
                }
            );

        return this.authorized;
    }

    isAuthorizedForComponent() {
        this.http
            .get(this.profileSource)
            .subscribe(
                response => {
                    console.log('You are authorized. Congratulation!');
                },
                response => {
                    this.router.navigate(['unauthorized']);
                }
            );
    }
}