import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../modelo/dispositivo.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Dispositivo } from '../modelo/Dispositivo';
import { interval } from 'rxjs';
// agregado de plantilla
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);



@Component({
  selector: 'app-ver-dispositivo',
  templateUrl: './ver-dispositivo.page.html',
  styleUrls: ['./ver-dispositivo.page.scss'],
})
export class VerDispositivoPage implements OnInit {

  public dispositivo: Dispositivo;
  id: number;
  // uso el nombre de dispositivo pasado como parametro
  // suele fallar el grafo si quiero obtener desde DB los datos
  nombreDispositivo: string;
  // agregado de plantilla
  private valorObtenido: number = 0;
  public myChart;
  private chartOptions;
  private textoElectrovalvula: String = "Abrir Electroválvula";
  private valorElectrovalvula: number = 0; // cero : abrir y uno : apagar
  private valores: string; // valores de mediciones (5)
  private disableButton = false; // manejo para evitar click rapido

  constructor(
    private dispositivoService: DispositivoService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(async params => {
      this.id = +params.get('dispositivoId');
      this.nombreDispositivo = params.get('nombre');
    });
    this.dispositivoService.obtenerDispositivo(this.id).then((res) => {
      this.dispositivo = res;
      // si hay mediciones obtengo valor reciente (obtengo datos ordenados)
      if (this.dispositivo.mediciones.length > 0) {
        this.valorObtenido = parseInt(this.dispositivo.mediciones[0].valor);
        // obtengo 5 ultimas mediciones
        var tempo = this.dispositivo.mediciones.slice(0, 5);
        this.valores = "";
        for (var i = 0; i < tempo.length; i++) {
          this.valores = this.valores + " " + tempo[i].valor;
        }
      }
      // si hay log de riegos obtengo ultimo valor
      // como no trae en el JSON de dispositivo lo obtengo aparte
      this.dispositivoService.obtenerLogs(this.dispositivo.electrovalvula.electrovalvulaId).then((res) => {
        // si hay logs obtengo valor reciente (obtengo datos ordenados)
        if (res.logRiegos.length > 0) {
          this.estadoElectrovalvula(res.logRiegos[0].apertura);
        }

        // activo callback para simular llegada de valores nuevos.
        interval(30000).subscribe(() => {
          this.controlMediciones();
        });
      });
    });
  }

  // opera cambios en electrovalvula (lo uso en dos lugares por ello aparte)
  estadoElectrovalvula(valor: number) {
    if (valor === 0) {
      this.textoElectrovalvula = "Abrir Electroválvula";
      this.valorElectrovalvula = 0;
    } else {
      this.textoElectrovalvula = "Cerrar Electroválvula";
      this.valorElectrovalvula = 1;
    }
  }

  // carga nuevas mediciones 
  // usado en apertura y cierre de electrovalvula, y
  // simulador de nuevas lecturas ()
  controlMediciones() {
    // si la electrovalvula se encuentra cerrada sumo a valor actual
    // si la electrovalvula se encuentra abierta resto a valor actual
    if (this.valorElectrovalvula === 0) {
      // obtengo nuevo valor en mediciones
      this.valorObtenido = this.valorObtenido + (Math.floor(Math.random() * (3 - 1 + 1) + 1));
    } else {
      // obtengo nuevo valor en mediciones
      this.valorObtenido = this.valorObtenido - (Math.floor(Math.random() * (3 - 1 + 1) + 1));
    }

    // si se pasa a negativo igualo a cero
    if (this.valorObtenido < 0) {
      this.valorObtenido = 0;
    }
    // si es mayor a 100 igualo a 100
    if (this.valorObtenido > 100) {
      this.valorObtenido = 100;
    }
    // inserto nueva medicion
    this.dispositivoService.nuevaMedicion(this.dispositivo.dispositivoId, this.valorObtenido).then((valor) => {
      // obtengo datos de mediciones
      this.dispositivoService.obtenerMediciones(this.dispositivo.dispositivoId).then((res) => {
        // obtengo 5 ultimas mediciones
        // uso un atributo valores, entonces dado que hace seguimiento me actualiza solo la vista
        var tempo = res.slice(0, 5);
        this.valores = "";
        for (var i = 0; i < tempo.length; i++) {
          this.valores = this.valores + " " + tempo[i].valor;
        }
      });
    });
    // actualizo el grafo
    this.myChart.update({
      series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]
    });
  }

  // apertura y cierre de electrovalvula
  // ver comportamiento adicional en controlMediciones()
  operarElectrovalvula() {
    /* (En el caso de que se abra o se cierre dicha
    electroválvula, se deberá insertar un registro en la tabla de Log_Riegos y por otro
    lado se necesitará realizar un insert sobre la tabla de mediciones para crear un
    nuevo registro con el nuevo valor solamente si se cierra la electroválvula)*/
    
    // deshabilito boton de apertura y cierre
    this.disableButton = true;
    if (this.valorElectrovalvula === 0) {
      // se abre electroválvula
      this.estadoElectrovalvula(1);
    } else {
      // obtengo un nuevo valor (para que funciones bajando debo hacer antes
      // de cerrar electrovalvula - y asi reutilizo codigo)
      this.controlMediciones();
      // se cierra electrovalvula
      this.estadoElectrovalvula(0);

    }
    // inserto en log de riegos
    this.dispositivoService.nuevoLog(this.dispositivo.electrovalvula.electrovalvulaId, this.valorElectrovalvula).then((res) => {
      // habilito boton de apertura y cierre
      this.disableButton = false;
    });
  }


  ionViewDidEnter() {
    this.generarChart();
  }

  generarChart() {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      }
      , title: {
        text: this.nombreDispositivo
      }

      , credits: { enabled: false }


      , pane: {
        startAngle: -150,
        endAngle: 150
      }
      // the value axis
      , yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'kPA'
        },
        plotBands: [{
          from: 0,
          to: 10,
          color: '#55BF3B' // green
        }, {
          from: 10,
          to: 30,
          color: '#DDDF0D' // yellow
        }, {
          from: 30,
          to: 100,
          color: '#DF5353' // red
        }]
      }
      ,

      series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions);
  }


}
