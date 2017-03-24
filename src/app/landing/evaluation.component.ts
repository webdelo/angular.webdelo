import {Component, ViewEncapsulation, Input, OnChanges} from "@angular/core";

@Component({
    selector: 'app-evaluation',
    templateUrl: '/templates/landing/evaluation.html',
    encapsulation: ViewEncapsulation.None
})
export class EvaluationComponent implements OnChanges {
    @Input() run: boolean = false;

    ngOnChanges() {
        console.log(this.run);
    }
}