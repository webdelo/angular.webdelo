import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment/moment';

@Pipe({ name: 'smartdate' })
export class SmartDatePipe implements PipeTransform {
    private value: any;

    transform(value: any, currentTime: any): string {
        if (value === undefined || value === null) return null;
        this.value = moment(value);

        if (currentTime === undefined || currentTime === null)
            currentTime = moment();
        else
            currentTime = moment(currentTime);

        let diff = this.value.diff( currentTime, 'days' ) ;
        if (diff < 0) {
            diff *= -1;
        }


        if ( diff <= 15 ) {
            if ( diff <= 1 ) {
                return this.value.calendar(currentTime, {
                    sameDay: '[Today]',
                });
            }
            if ( diff == 7 ) {
                if ( this.value.isBefore(currentTime) ) {
                    return `Last ${this.value.format('dddd')}`;
                } else {
                    return `Next ${this.value.format('dddd')}`;
                }
            }
            return this.value.from(currentTime);
        }

        return this.value.calendar(currentTime, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD.MM.YYYY'
        });
    }
}