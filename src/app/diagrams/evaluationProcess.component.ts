import {Component, ViewEncapsulation, Input, OnChanges, OnInit} from "@angular/core";

@Component({
    selector: 'app-evaluation-process',
    templateUrl: '/templates/diagrams/evaluationProcess.html',
    styleUrls: [ 'src/css/diagrams/evaluationProcess.css' ],
    encapsulation: ViewEncapsulation.None
})
export class EvaluationProcessComponent implements OnInit {
    @Input() run: boolean = false;
    developersQuantity: number = null;
    autoDevChange:any;
    autoDevInterval:any;

    start() {
        this.run = true;
    }

    stop() {
        this.run = false;
    }

    repeat() {
        this.stop();
        this.stopAutoDevChange();
        setTimeout(()=>{
            this.start();
            this.startAutoDevChange();
        }, 1000);
    }

    chooseDevelopersQuantity( quantity:number ) {
        if ( quantity == this.developersQuantity ) {
            this.developersQuantity = null;
            this.startAutoDevChange();
            return;
        }
        this.developersQuantity = quantity;
        this.stopAutoDevChange();
    }

    ngOnInit() {
        this.startAutoDevChange();
    }

    startAutoDevChange() {
        this.autoDevChange = setTimeout((function(){
            this.developersQuantity = 4;
            this.autoDevInterval = setInterval((function () {
                if (this.developersQuantity == 6) {
                    this.developersQuantity = 4;
                    return;
                }
                this.developersQuantity++;
            }).bind(this), 3000);
        }).bind(this), 10000);
    }

    stopAutoDevChange() {
        clearInterval(this.autoDevChange);
        clearInterval(this.autoDevInterval);
    }
}