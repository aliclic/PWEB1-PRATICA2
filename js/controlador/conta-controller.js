class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#dataAniversario');
        const elementoTipoConta = document.querySelector('#tipoConta');

        let novaConta;

        switch (elementoTipoConta.value) {
            case "conta":
                novaConta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
                this.repositorioContas.adicionar(novaConta);
                this.inserirContaNoHTML(novaConta);
                console.log(novaConta);
                break;
            case "contaBonificada":
                novaConta = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
                this.repositorioContas.adicionar(novaConta);
                this.inserirContaNoHTML(novaConta);
                console.log(novaConta);

                break;
            case "poupanca":
                novaConta = new Poupanca(elementoNumero.value, Number(elementoSaldo.value), elementoDataAniversario.value);
                this.repositorioContas.adicionar(novaConta);
                this.inserirContaNoHTML(novaConta);
                console.log(novaConta);

                break;
            default:
                alert("Tipo de conta inválido.");
                return;
        }

    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
