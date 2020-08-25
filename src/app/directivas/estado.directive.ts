import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appEstado]'
})
export class EstadoDirective implements OnInit {

  @Input() valor: number
  constructor(private referencia: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    //console.log(this.valor);
    if (this.valor <= 10) {
      this.renderer.setStyle(this.referencia.nativeElement, 'color', 'green');
    }
    if (this.valor > 10 && this.valor <= 30) {
      this.renderer.setStyle(this.referencia.nativeElement, 'color', '#CCCC00');
    }
    if (this.valor > 30) {
      this.renderer.setStyle(this.referencia.nativeElement, 'color', 'red');
    }


 }
  
}
