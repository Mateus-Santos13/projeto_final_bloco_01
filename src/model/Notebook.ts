import { Produto } from "./Produto";

export class Smartphone extends Produto {

    private _processador: string;
    private _tamanhoTela: string;


    constructor(id: number, nome: string, tipo: number, preco: number,processador: string, tamanhoTela: string) {
        super(id, nome, tipo, preco);
        this._processador = processador;
        this._tamanhoTela = tamanhoTela;
    }

    

    public visualizar(): void{
        super.visualizar();
        console.log(`Processador do aparelho: ${this._processador}`);
        console.log(`Tamanho da tela do aparelho: ${this._tamanhoTela}`);
    }
}