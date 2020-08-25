import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DispositivoService } from '../modelo/dispositivo.service';
import { LogRiego } from '../modelo/LogRiego';

@Component({
  selector: 'app-ver-logs',
  templateUrl: './ver-logs.page.html',
  styleUrls: ['./ver-logs.page.scss'],
})
export class VerLogsPage implements OnInit {

  public logRiegos: Array<LogRiego> = [];
  id: number;

  constructor(
    private dispositivoService: DispositivoService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(async params => {
      this.id = +params.get('electrovalvulaId');
    });
    this.dispositivoService.obtenerLogs(this.id).then((res) => {
      this.logRiegos = res.logRiegos;
    });
  }

  // permite volver atras
  volver() {
    this.location.back();
  }
}
