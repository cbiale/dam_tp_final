import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha: string): string {
    // Formato original: 2020-08-24T18:12:46.000Z
    // Formato nuevo:    24/08/2020 18:12:46.000Z 
    return fecha.substr(8,2) + '/' + fecha.substr(5,2) +  '/' + fecha.substr(0,4) + ' ' + fecha.substr(11);
  }

}
