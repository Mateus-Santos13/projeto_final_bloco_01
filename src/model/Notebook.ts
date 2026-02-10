import { Produto } from "./Produto";

export class Notebook extends Produto {

    private _processador: string;
    private _tamanhoTela: number;


    constructor(id: number, nome: string, tipo: number, preco: number,processador: string, tamanhoTela: number) {
        super(id, nome, tipo, preco);
        this._processador = processador;
        this._tamanhoTela = tamanhoTela;
    }

    
	public get processador(): string {
		return this._processador;
	}

	public get tamanhoTela(): number {
		return this._tamanhoTela;
	}

	public set processador(value: string) {
		this._processador = value;
	}

	public set tamanhoTela(value: number) {
		this._tamanhoTela = value;
	}

    public visualizar(): void{
        super.visualizar();
        console.log(`Processador do notebook: ${this._processador}`);
        console.log(`Tamanho da tela do notebook: ${this._tamanhoTela} polegadas`);
    }
}