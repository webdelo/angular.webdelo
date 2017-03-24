import {Component} from "@angular/core";
import {SignInComponent} from "./component/signIn.component";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cg-unauthorized',
    templateUrl: '/templates/core/authorization/unauthorized.html',
    styleUrls: ['src/css/unauthorized.component.css']
})
export class UnauthorizedComponent {
    constructor( private title: Title){
        title.setTitle('Congregation App. You must be authorized to look at this page');
    }
}