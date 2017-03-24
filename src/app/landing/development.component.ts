import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    selector: 'app-development',
    templateUrl: '/templates/landing/development.html',
    encapsulation: ViewEncapsulation.None
})
export class DevelopmentComponent {
    @Input() run: boolean = false;
}