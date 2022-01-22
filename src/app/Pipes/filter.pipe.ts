import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any) {
    if (value.length === 0) {
      return value;
    }
    return value.filter(function (search: any) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
