class Poupanca extends Conta {
    
    constructor(numero, saldo) {
        super(numero, saldo);
        this.dataAniversario = new Date();
    }
}