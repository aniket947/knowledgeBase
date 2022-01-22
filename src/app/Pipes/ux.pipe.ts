import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'uxpipe',
})
export class UxPipe implements PipeTransform {
  transform(value: any) {
    return value.substr(0, 15) + '....';
  }
}
