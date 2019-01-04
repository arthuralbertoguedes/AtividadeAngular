export class ContatoModel{
    private nome : string;
    private telefone : string;
    private endereco : string;
    
    constructor(nome : string, telefone : string, endereco : string){
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}