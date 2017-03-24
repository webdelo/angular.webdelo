/**
 * Created by dmitricercel on 27.02.17.
 */
import {
    Component, OnChanges, OnInit, Input,
    trigger, state, animate, transition, style
} from '@angular/core';

@Component({
    selector : 'app-fader',
    template: `<span [@visibilityChanged]="visibility" ><ng-content></ng-content></span>`,
    animations: [
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ]
})
export class FaderComponent implements OnChanges, OnInit {
    @Input() isVisible : boolean = true;
    @Input() delay : number = 0;
    visibility = 'shown';

    ngOnInit() {
        setTimeout(function () {
            this.visibility = this.isVisible ? 'shown' : 'hidden';
        }, this.delay);
    }

    ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }
}