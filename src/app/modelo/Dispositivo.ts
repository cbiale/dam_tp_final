import { Medicion } from './Medicion';
import { Electrovalvula } from './Electrovalvula';

export class Dispositivo{
    private _dispositivoId: number;
    private _nombre: string; 
    private _ubicacion: string;
    private _electrovalvula: Electrovalvula;
    private _mediciones: Array<Medicion>;
    
    constructor(dispositivo, nombre, ubicacion, electrovalvula, mediciones){
        this._dispositivoId = dispositivo;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
        this._electrovalvula = electrovalvula;
        this._mediciones = mediciones;
    }

    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get ubicacion(): string {
        return this._ubicacion;
    }
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    
    public get electrovalvula(): Electrovalvula {
        return this._electrovalvula;
    }
    public set electrovalvula(value: Electrovalvula) {
        this._electrovalvula = value;
    }
    public get mediciones(): Array<Medicion> {
        return this._mediciones;
    }
    public set mediciones(value: Array<Medicion>) {
        this._mediciones = value;
    }
}