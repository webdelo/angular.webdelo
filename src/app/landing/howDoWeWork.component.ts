import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'app-howDoWeWork',
    templateUrl: '/templates/landing/howDoWeWork.html',
    styleUrls: ['src/css/landing/howDoWeWork.css'],
    encapsulation: ViewEncapsulation.None
})
export class HowDoWeWorkComponent {
    private deploymentEngine: boolean = false;

    runDeployment() {
        this.deploymentEngine = true;
    }
    runDeploymentAgain() {
        this.stopDeployment();
        this.runDeployment();
    }

    stopDeployment() {
        this.deploymentEngine = false;
    }
}