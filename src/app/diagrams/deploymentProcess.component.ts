import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    selector: 'app-deployment-process',
    templateUrl: '/templates/diagrams/deploymentProcess.html',
    styleUrls: [ 'src/css/diagrams/deploymentProcess.css' ]
})
export class DeploymentProcessComponent {
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