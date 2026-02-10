import { Produto } from "./Produto";

export class Smartphone extends Produto {

    private _marca: string;
    private _memoria: number;


	constructor(id: number, nome: string, tipo: number, preco: number,marca: string, memoria: number) {
		super(id, nome, tipo, preco);
        this._marca = marca;
        this._memoria = memoria;
	}

	public get marca(): string {
		return this._marca;
	}

	public get memoria(): number {
		return this._memoria;
	}

	public set marca(value: string) {
		this._marca = value;
	}

	public set memoria(value: number) {
		this._memoria = value;
	}

    public visualizar(): void{
        super.visualizar();
        console.log(`Marca do aparelho: ${this._marca}`);
        console.log(`Memória do aparelho: ${this._memoria}`);
    }
}