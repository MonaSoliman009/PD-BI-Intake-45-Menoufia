import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransform'
})
export class CurrencyTransformPipe implements PipeTransform {

  transform(value:number,rate:number=50):number{
   return  value*rate
  }

}
