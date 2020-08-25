import { Dispositivo } from '../modelo/Dispositivo';
import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../modelo/dispositivo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  dispositivos : Dispositivo[] = [];
  
  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit() { }


  ionViewDidEnter() {
    this.dispositivoService.obtenerDispositivos().then((res) => {
      this.dispositivos = res;      
    })
  }

}
