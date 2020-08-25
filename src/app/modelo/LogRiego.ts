import { Electrovalvula } from './Electrovalvula';

export class LogRiego {
    private _logRiegoId : number;
    private _apertura: number;
    private _fecha : Date;
    private _electrovalvula: Electrovalvula;
    
    constructor(logRiegoId : number, apertura : number, fecha : Date, electrovalvula : Electrovalvula){
        this._logRiegoId = logRiegoId;
        this._apertura = apertura;
        this._fecha = fecha;
        this._electrovalvula = electrovalvula;
    }

    public get logRiegoId(): number {
        return this._logRiegoId;
    }
    public set logRiegoId(logRiegoId: number) {
        this._logRiegoId = logRiegoId;
    }

    public get apertura(): number {
        return this._apertura;
    }
    public set apertura(value: number) {
        this._apertura = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(fecha: Date) {
        this._fecha = fecha;
    }
    public get electrovalvula(): Electrovalvula {
        return this._electrovalvula;
    }
    public set electrovalvula(value: Electrovalvula) {
        this._electrovalvula = value;
    }
    
}