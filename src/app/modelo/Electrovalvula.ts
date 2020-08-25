import { LogRiego } from './LogRiego';

export class Electrovalvula {
    private _electrovalvulaId: number;
    private _nombre: string; 
    private _logRiegos: Array<LogRiego>;
    
    constructor(electrovalvula : number, nombre : string, logRiegos : Array<LogRiego>){
        this._electrovalvulaId = electrovalvula;
        this._nombre = nombre;
        this._logRiegos = logRiegos;
    }

    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }

    public set electrovalvulaId(electrovalvulaId: number) {
        this._electrovalvulaId = electrovalvulaId;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get logRiegos(): Array<LogRiego> {
        return this._logRiegos;
    }

    public set logRiegos(logRiegos : Array<LogRiego>) {
        this._logRiegos = logRiegos;
    }

}