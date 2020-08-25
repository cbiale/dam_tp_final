import { Injectable, EventEmitter } from '@angular/core';
import { Dispositivo } from './Dispositivo';
import { Medicion } from './Medicion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Electrovalvula } from './Electrovalvula';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // rutas a la API
  private rutaApi: String = 'http://localhost:3000/api/dispositivos/';
  private rutaApiElectrovalvula: String = 'http://localhost:3000/api/electrovalvulas/';
  private rutaApiMedicion: String = 'http://localhost:3000/api/mediciones/';
  private rutaApiLogRiego: String = 'http://localhost:3000/api/logriegos/';

  constructor(private http: HttpClient) { }
  
  // obtengo listado de dispositivos
  async obtenerDispositivos(): Promise<Dispositivo[]> {
    return this.http.get<Dispositivo[]>('' + this.rutaApi).toPromise()
      .then((dispositivos: Dispositivo[]) => {
        console.log(dispositivos);
        return dispositivos;
      });
  }
  
  // obtengo datos de un dispositivo
  async obtenerDispositivo(id: number): Promise<Dispositivo> {
    const dispositivo = await this.http.get<Dispositivo>('' + this.rutaApi + String(id)).toPromise();
    return dispositivo;
  }

  // obtener mediciones
  // por la forma de traer los datos puedo usar obtenerDispositivo()
  // pero en este caso solo obtengo las mediciones
  async obtenerMediciones(id: number): Promise<Medicion[]> {
    return this.http.get<Medicion[]>('' + this.rutaApi + String(id) + '/mediciones').toPromise()
      .then((medicion: Medicion[]) => {
        return medicion;
      });
  }

  // obtener logs de la electrovalvula asociada al dispositivo
  // lo pongo dentro del servicio de dispositivo dado que sale de la misma ventana
  async obtenerLogs(id: number): Promise<Electrovalvula> {
    // debo pensar en reformular el formato
    // si bien es de la electrovalvula podia usar
    // /api/dispositivos/:id/logs
    // o usar
    // /api/electrovalvudas/:id/ en este caso de la electrovalvula
    // fui por esta alternativa (me parecio mas purista)
    // devuelve datos de la electrovalvula y sus logs
    return this.http.get<Electrovalvula>('' + this.rutaApiElectrovalvula + String(id)).toPromise()
      .then((electrovalvula: Electrovalvula) => {
        return electrovalvula;
      });
  }

  // inserto nueva medicion
  async nuevaMedicion(id : number, valor : number): Promise<any> {
    return this.http.post<any>('' + this.rutaApiMedicion, {'dispositivoId': id, 'valor': valor }).toPromise()
      .then((retorno: any) => {
       console.log(retorno);
        return retorno;
      });
  }

  // inserto nuevo log
  async nuevoLog(id : number, apertura : number): Promise<any> {
    return this.http.post<any>('' + this.rutaApiLogRiego, {'electrovalvulaId': id, 'apertura': apertura }).toPromise()
      .then((retorno: any) => {
       console.log(retorno);
        return retorno;
      });
  }  

}
