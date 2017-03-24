import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment/moment';

@Pipe({ name: 'calendar' })
export class CalendarPipe implements PipeTransform {

    transform(value: any): string {
        if (value === undefined || value === null) return null;

        let date = moment(value);
        return date.calendar();
    }

}