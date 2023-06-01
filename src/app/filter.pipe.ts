import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filterValue: string): any[] {
    if (!data || !filterValue) {
      return data;
    }

    return data.filter((item: any) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
