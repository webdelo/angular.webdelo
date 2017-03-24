import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    selector: 'app-project-process',
    templateUrl: '/templates/diagrams/projectProcess.html',
    styleUrls: [ 'src/css/diagrams/projectProcess.css' ],
    encapsulation: ViewEncapsulation.None
})
export class ProjectProcessComponent {
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