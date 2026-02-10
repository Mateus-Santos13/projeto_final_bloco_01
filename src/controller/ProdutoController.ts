import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";
import { Produto } from "../model/Produto";



export class ProdutoController implements ProdutoRepository {


    private listaProdutos = new Array<Produto>();

    public id: number = 0;

    //Métodos do CRUD


    listarTodas(): void {
        for (let Produto of this.listaProdutos) {//vai percorrer o array e imprimir as Produtos
            Produto.visualizar();
        }
    }

    procurarPorID(id: number): void {
        const buscaProduto = this.buscarNoArray(id);//busca a Produto no array

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log(colors.fg.red, `\nO Produto ID ${id} nao foi encontrado.`, colors.reset);
        }
    }




    cadastrar(Produto: Produto): void {
        this.listaProdutos.push(Produto);//adiciona a Produto ao array
        console.log(colors.fg.green, `\nO Produto ID ${Produto.id} foi cadastrado com sucesso.`, colors.reset);
    }

    atualizar(Produto: Produto): void {
        const buscaProduto = this.buscarNoArray(Produto.id);//busca a Produto no array

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = Produto;//busca a Produto no array e atualiza com os dados que foram passados;
            console.log(colors.fg.green, `\nO Produto ID ${Produto.id} foi atualizado com sucesso.`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO Produto ID ${Produto.id} nao foi encontrado.`, colors.reset);
        }
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);//busca a Produto no array

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);//remove a Produto do array
            console.log(colors.fg.green, `\nO Produto ID ${id} foi deletado com sucesso.`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO Produto ID ${id} nao foi encontrado.`, colors.reset);
        }
    }


    //Métodos Auxiliares

    public gerarID(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let Produto of this.listaProdutos) {
            if (Produto.id === id) {
                return Produto;
            }
        }
        return null;
    }
    public listarProdutos(): Produto[] {
        return this.listaProdutos;
    }
}