export class ContatoModel{
    private nome : string;
    private telefone : string;
    private endereco : string;
    private data : Date;
    private dataFormatada : string;
    
    constructor(nome : string, telefone : string, endereco : string, dataEnviada : string){
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;

        this.criarData(dataEnviada);
    }

    criarData(dataEnviada : string){
        let dataSeparada = dataEnviada.split("-");
        this.dataFormatada = dataSeparada[2] + "/" + dataSeparada[1] + "/" + dataSeparada[0];
    }   
}