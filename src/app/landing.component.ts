import {Component, OnInit, Input, ViewEncapsulation, OnChanges} from "@angular/core";
import {Title} from "@angular/platform-browser";

declare var ScrollMagic:any;
declare var TimelineMax:any;
declare var Linear:any;


@Component({
    selector: 'app-landing',
    templateUrl: '/templates/landing.html',
    styleUrls: ['src/css/landing/landing.css', 'src/css/landing/scrollMagic.css']
})
export class LandingComponent implements OnInit, OnChanges {
    public howDoWeWorkActive:boolean = false;
    public evaluationStart:boolean = false;
    public developmentStart:boolean = false;

    constructor(
        private title: Title
    ){
        this.title.setTitle('Welcome to WebDelo!');
    }

    ngOnInit() {
        // init
        var controller = new ScrollMagic.Controller();

        // // define movement of panels
        // var wipeAnimation = new TimelineMax()
        //     .fromTo(".section-evaluation",          1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        //     .fromTo(".section-project-development", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        //     .fromTo(".section-development",         1, {y: "200%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        //     .fromTo(".section-deployment",          1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
        // define movement of panels
        var wipeAnimation = new TimelineMax()
        // animate to second panel
            .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
            .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
            .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
            // animate to third panel
            .to("#slideContainer", 0.5, {z: -150, delay: 1})
            .to("#slideContainer", 1,   {x: "-50%"})
            .to("#slideContainer", 0.5, {z: 0})
            // animate to forth panel
            .to("#slideContainer", 0.5, {z: -150, delay: 1})
            .to("#slideContainer", 1,   {x: "-75%"})
            .to("#slideContainer", 0.5, {z: 0});

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"
        })
            .setPin("#pinContainer")
            .on("progress", event => {
                console.log("Scene progress changed to " + event.progress);
                if ( event.progress > 0 && event.progress < 0.018) {
                    $('.howDoWeWork').addClass('passed');
                    setTimeout(()=>{
                        if ( this.evaluationStart == false ) {
                            this.evaluationStart = true;
                        }
                    }, 2000);
                } else if ( event.progress > 0.58 && event.progress < 0.79 ) {
                    setTimeout(()=>{
                        if ( this.developmentStart == false ) {
                            this.developmentStart = true;
                        }
                    }, 1000);
                }

            })
            .setTween(wipeAnimation)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    }

    ngOnChanges() {

    }
}