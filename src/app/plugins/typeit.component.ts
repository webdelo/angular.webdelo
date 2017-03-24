import {Component, Input, ElementRef, AfterViewInit, ViewChild, ViewEncapsulation} from "@angular/core";
import * as jQuery from 'jquery';
import 'typed';


@Component({
    selector: 'typeit',
    template: `<span #typeItOutput></span>`,
    encapsulation: ViewEncapsulation.None
})
export class TypeItComponent implements AfterViewInit {
    @Input() strings:Array<any> = [];
    @Input() loop:boolean = false;
    @Input() cursor:boolean = true;
    @Input() duration:number = 50;
    @Input() contentType:string = 'html';
    @Input() delay:number=0;
    @Input() backDelay:number=5000;
    @Input() dismissCursorAfterTyping:boolean=false;

    @ViewChild('typeItOutput') typeItOutput: ElementRef;

    ngAfterViewInit() {
        var that = this;
        setTimeout(function () {
            jQuery(that.typeItOutput.nativeElement).typed({
                strings: that.strings,
                loop: that.loop,
                typeSpeed: that.duration,
                startDelay: 1000,
                backDelay: that.backDelay,
                showCursor: that.cursor,
                contentType: that.contentType,
                callback: function() {
                    if ( that.dismissCursorAfterTyping ) {
                        this.showCursor = false;
                        $('.destroyCursor').find('.typed-cursor').css({
                            'opacity': 0,
                            'animation': 'none'
                        });
                    }
                },
            });
        }, this.delay);
    }
}