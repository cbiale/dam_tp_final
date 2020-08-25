export class Medicion {
    private _medicionId : number;
    private _fecha : Date; 
    private _valor : string;

    constructor(medicionId : number, fecha : Date, valor : string){
        this._medicionId = medicionId;
        this._fecha = fecha;
        this._valor = valor;
    }

    public get medicionId(): number {
        return this._medicionId;
    }
    public set medicionId(medicionId: number) {
        this._medicionId = medicionId;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(fecha: Date) {
        this._fecha = fecha;
    }

    public get valor(): string {
        return this._valor;
    }
    public set valor(valor: string) {
        this._valor = valor;
    }
    
}