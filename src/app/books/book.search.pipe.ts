import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'bookFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.bookName.toLocaleLowerCase().includes(args)) || (val.author.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}