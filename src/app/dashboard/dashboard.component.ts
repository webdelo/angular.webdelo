import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {UserService} from "../core/authorization/service/user.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: '/templates/dashboard/dashboard.html',
    styleUrls  : ['src/css/dashboard.component.css'],
    providers: [UserService]
})
export class DashboardComponent {
    constructor( private title: Title, private user: UserService ){
        this.title.setTitle('Webdelo App. Dashboard');
        this.user.isAuthorizedForComponent();
    }
}