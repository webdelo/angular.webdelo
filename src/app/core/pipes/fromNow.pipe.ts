import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment/moment';

@Pipe({ name: 'fromNow' })
export class FromNowPipe implements PipeTransform {
    private value: any;

    transform(value: any, currentTime: any): string {
        if (value === undefined || value === null) return null;
        this.value = moment(value);

        if (currentTime === undefined || currentTime === null)
            currentTime = moment();
        else
            currentTime = moment(currentTime);

        return this.value.from(currentTime);
    }

}