import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment/moment';

@Pipe({ name: 'date' })
export class DatePipe implements PipeTransform {

    transform(value: any, pattern: string = 'DD.MM.YYYY'): string {
        if (value === undefined || value === null) return null;

        let date = moment(value);
        return date.format(pattern);
    }

}