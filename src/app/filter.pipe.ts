import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any, str:string): any {
    if(!str){
      return item;
    }
    return item.filter(it=>it.id==(str))
  }

}
