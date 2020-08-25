import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoEstado'
})
export class FormatoEstadoPipe implements PipeTransform {

  transform(valor: number): string {
    if (valor === 1) {
      return 'Encendido';
    }
    if (valor === 0) {
      return 'Apagado';
    }

  }

}
