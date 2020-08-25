import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../modelo/dispositivo.service';
import { Medicion } from '../modelo/Medicion';

@Component({
  selector: 'app-ver-mediciones',
  templateUrl: './ver-mediciones.page.html',
  styleUrls: ['./ver-mediciones.page.scss'],
})
export class VerMedicionesPage implements OnInit {


  public mediciones: Array<Medicion> = [];
  id: number;

  constructor(
    private dispositivoService: DispositivoService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(async params => {
      this.id = +params.get('dispositivoId');
    });
    this.dispositivoService.obtenerMediciones(this.id).then((res) => {
      this.mediciones = res;
    });
  }

  // permite volver atras
  volver() {
    this.location.back();
  }
}
