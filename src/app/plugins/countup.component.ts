import {Component, Input, ElementRef, AfterViewInit, ViewChild, ViewEncapsulation, OnChanges} from "@angular/core";

declare var CountUp:any;


@Component({
    selector: 'countup',
    template: `<span #output></span>`,
    encapsulation: ViewEncapsulation.None
})
export class CountUpComponent implements AfterViewInit, OnChanges {
    @Input() start:number;
    @Input() end:number;
    @Input() delay:number=0;
    @Input() duration:number=4;
    @Input() trigger:boolean=false;
    @Input() triggerOn:boolean=false;
    @ViewChild('output') output: ElementRef;

    ngAfterViewInit() {
        var that = this;
        if ( this.trigger == false ) {
            setTimeout(function(){
                var options = {
                    useEasing : false,
                    useGrouping : false,
                    separator : ',',
                    decimal : '.',
                    prefix : '',
                    suffix : ''
                };
                var demo = new CountUp(that.output.nativeElement, that.start, that.end, 0, that.duration, options);
                demo.start();
            }, this.delay);
        }
    }

    ngOnChanges() {
        var that = this;
        if ( this.triggerOn ) {
            setTimeout(function(){
                var options = {
                    useEasing : false,
                    useGrouping : false,
                    separator : ',',
                    decimal : '.',
                    prefix : '',
                    suffix : ''
                };
                var demo = new CountUp(that.output.nativeElement, that.start, that.end, 0, that.duration, options);
                demo.start();
            }, this.delay);
        }
    }
}