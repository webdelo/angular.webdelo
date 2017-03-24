import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    selector: 'app-developing-process',
    templateUrl: '/templates/diagrams/developingProcess.html',
    styleUrls: [ 'src/css/diagrams/developingProcess.css' ],
    encapsulation: ViewEncapsulation.None
})
export class DevelopingProcessComponent {
    @Input() run: boolean = false;

    start() {
        this.run = true;
    }

    stop() {
        this.run = false;
    }

    repeat() {
        this.stop();
        setTimeout(()=>{
            this.start();
        }, 1000);
    }
}