import { formatarMoeda } from "../util/Currency";

export abstract class Produto {
    private _id: number; //ID do produto.
    private _nome: string;//Nome do produto ou o modelo dele. EX: Iphone 15, thinkpad, etc;
    private _tipo: number;//Tipo do produto, 1 - Smartphone, 2 - Notebook
    private _preco: number;//Preço do produto


	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}


	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._nome = value;
	}


	public set tipo(value: number) {
		this._tipo = value;
	}

 
	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void{

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Smartphone";
                break;
            case 2:
                tipo = "Notebook";
                break;
            default:
                tipo = "Tipo inválido";
                break;
        }

        console.log("\n*********************************");
        console.log("         Dados do produto          ");
        console.log("***********************************");
        console.log(`ID do produto: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Preço: ${formatarMoeda(this._preco)}`);
        
    }

}