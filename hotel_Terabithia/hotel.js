const readlineSync = require('readline-sync');

let nomeHotel;
let nomeUsuario;

function solicitarNomeHotel() {
    console.log("Digite o nome do hotel:");
    return readlineSync.prompt();
}

function solicitarNomeUsuario() {
    console.log("Digite seu nome:");
    return readlineSync.prompt();
}

function solicitarSenha() {
    console.log("Digite sua senha:");
    return readlineSync.prompt();
}

function inicio() {
    nomeHotel = solicitarNomeHotel();
    nomeUsuario = solicitarNomeUsuario();

    const senha = solicitarSenha();

    if (senha === '2678') {
        console.log(`Bem-vindo ao Hotel ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!`);
        menuPrincipal();
    } else {
        console.log("Senha incorreta. Encerrando o programa.");
    }
}

function menuPrincipal() {
    while (true) {
        console.log("Escolha uma opção:");
        console.log("1. Quantos quartos são?");
        console.log("2. Como soletra?");
        console.log("3. Com 'S' ou com 'Z'?");
        console.log("4. Festa ou trabalho?");
        console.log("5. Hora de comer");
        console.log("6. Auditório para quantos?");
        console.log("7. Que horas você pode?");
        console.log("8. Álcool ou gasolina?");
        console.log("9. Ar puro, finalmente.");
        console.log("10. Sair");

        const opcao = readlineSync.prompt();

        switch (opcao) {
            case '1':
                programaQuartos();
                break;
            case '2':
                programaSoletra();
                break;
            case '3':
                programaCadastroHospedes();
                break;
            case '4':
                programaFestaTrabalho();
                break;
            case '5':
                programaHoraDeComer();
                break;
            case '6':
                programaAuditório();
                break;
            case '7':
                programaHorasRestaurante();
                break;
            case '8':
                programaAlcoolGasolina();
                break;
            case '9':
                programaArPuro();
                break;
            case '10':
                console.log(`Muito obrigado e até logo, ${nomeUsuario}.`);
                return;
            default:
                erro();
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

function programaQuartos() {
    console.log(`Programa: "Quantos quartos sao?"`);
    let valorDiaria = parseFloat(readlineSync.question(`Qual o valor da diaria?`));
    if (valorDiaria < 0){
        console.log(`Valor inválido, ${nomeUsuario}. Voltando ao menu inicial.`);
        return;
    }
    
    let quantidadeDias = parseInt(readlineSync.question(`Quantas diárias serao necessarias?`));
    if (quantidadeDias < 1 && quantidadeDias > 30){
        console.log(`Valor inválido, ${nomeUsuario}. Voltando ao menu inicial.`);
        return;
    }
    let valorTotal = valorDiaria*quantidadeDias;
    let nomeHospede = readlineSync.question("Qual o nome do hospede?")
    let confirmaReserva = readlineSync.question(`"${nomeUsuario}, voce confirma a reserva para ${nomeHospede} por ${quantidadeDias} dias? S/N"`);
    if (confirmaReserva === `S`){
        console.log(`"${nomeUsuario}, reserva para ${nomeHospede} efetuada com sucesso. O valor total da reserva é de R$${valorTotal}." `);
    }else {
        console.log(`${nomeUsuario}, reserva não efetuada. Voltando ao menu inicial...`)
    }

}
//////////////////////////////////////////////////////////////////////////////////////////

function programaSoletra() {
    console.log(`Programa: "Cadastro de Hóspedes"`);
    let valorDiaria = parseFloat(readlineSync.question(`Qual o valor padrao da diaria?`));
    if (valorDiaria < 0){
        console.log("Valor invalido. Voltando ao menu inicial.");
        return;
    }

    let gratuidade= 0;
    let valorMeia= 0;
    let valorTotal= 0;

    while(true) {
        let nomeHospede = readlineSync.question(`Qual o nome do hospede? Obs; Digite "PARE" quando quiser finalizar a tarefa.`);

        if(nomeHospede === `PARE`){
            break;
        }
    

        let idadeHospede= parseInt(readlineSync.question(`Qual a idade do hospede?`));
        let valorDiariaHospede = valorDiaria;
        if(idadeHospede < 6){
            console.log(`O hospede ${nomeHospede} possui gratuidade.`);
            valorDiariaHospede = 0;
            gratuidade++;
        }else if (idadeHospede > 60){
            valorDiariaHospede /= 2;
            console.log(`O hospede ${nomeHospede} paga meia`);
            valorMeia++;
        }

        console.log(`${nomeHospede} cadastradoª com sucesso.`);
        valorTotal = valorTotal+valorDiariaHospede;
    }

    console.log(`O valor total das hospedagens é: R$${valorTotal}; ${gratuidade} gratuidade(s) e ${valorMeia} meia(s).`);
} 
//////////////////////////////////////////////////////////////////////////////////////////

function programaCadastroHospedes() {
    console.log("Programa: Cadastro e Pesquisa de Hospedes");
    const hospedes = [];

    while (true) {
        let selecionar = readlineSync.question("Selecione uma opcao: 1. Cadastrar - 2. Pesquisar - 3. Listar - 4. Sair");

        if (selecionar === '4') {
            break;
        }

        if (hospedes.length >= 15) {
            console.log("Maximo de cadastros atingido.");
            return;
        }

        if (selecionar === '1') {
            let nomeDoHospede = readlineSync.question("Qual o nome do Hospede?");
            hospedes.push(nomeDoHospede);
            console.log(`Hospede ${nomeDoHospede} foi cadastrado(a) com sucesso!`);
        } else if (selecionar === '2') {
            let nomeDoHospede = readlineSync.question("Qual o nome do Hospede?");
            if (hospedes.includes(nomeDoHospede)) {
                console.log(`Hospede ${nomeDoHospede} foi encontrado(a)`);
            } else {
                console.log(`Hospede ${nomeDoHospede} não foi encontrado(a)`);
            }
        } else if (selecionar === '3') {
            console.log("Lista de Hospedes:");
            hospedes.forEach((hospede, index) => {
                console.log(`${index + 1}. ${hospede}`);
            });
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

function programaFestaTrabalho() {
    console.log(`Programa: "Festa ou trabalho?" `);
    let garconHora = 10.50;
    let horaEvento = parseFloat(readlineSync.question("Qual a duracao do evento em horas"));
    let numGarcon = parseInt(readlineSync.question("Quantos garçons serão necessarios"));
    let custoTotal = garconHora*horaEvento*numGarcon;
    console.log(`Custo total: R$${custoTotal}`);
    const aceitaReserva = readlineSync.question(`Gostaria de efetuar a reserva? S/N`);
    if (aceitaReserva === `S`){
        console.log(`${nomeUsuario}, reserva efetuada com sucesso.`);
    }else {
        console.log(`${nomeUsuario}, reserva nao efetuada.`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

function programaHoraDeComer() {
    console.log(`Programa: Hora de comer`);
    let cafePessoa = 0.2;
    let aguaPessoa = 0.5;
    let salgadoPessoa = 7;
    let qtdPessoas = parseInt(readlineSync.question(`Qual o número de convidados para o evento?`));
    if (qtdPessoas > 350){
        console.log(`Quantidade de convidados superior à capacidade maxima.`);
    }else if(qtdPessoas <= 350){
        let qtdCafe = cafePessoa*qtdPessoas;
        let qtdAgua = aguaPessoa*qtdPessoas;
        let qtdSalgado = salgadoPessoa*qtdPessoas;
        let custoEvento = (qtdCafe*0.80)+(qtdAgua*0.40)+((qtdSalgado/100)*34);
        console.log(`O evento precisara de ${qtdCafe} litros de cafe, ${qtdAgua} litros de agua, e ${qtdSalgado} salgados. O custo total do evento sera de R$${custoEvento},00`);
    }
    const reservaComer = readlineSync.question(`Gostaria de efetuar a reserva? "S/N"`);
    if (reservaComer === `S`){
        console.log(`${nomeUsuario}, reserva efetuada com sucesso.`)
    }else {
        console.log(`${nomeUsuario}, reserva não efetuada.`);
    }
    
}
//////////////////////////////////////////////////////////////////////////////////////////

function programaAuditório() {
    console.log("Programa: Auditório para quantos?");

    const numConvidados = parseInt(readlineSync.question("Qual o numero de convidados para o seu evento?"));
    const capacidadeAuditórioLaranja = 150;
    const capacidadeAdicionalAuditórioLaranja = 70;
    const capacidadeAuditórioColorado = 350;

    if (numConvidados <= 0 || numConvidados > 350) {
        console.log("Numero de convidados invalido.");
        return;
    } else if (numConvidados <= capacidadeAuditórioLaranja + capacidadeAdicionalAuditórioLaranja) {
        console.log("Use o auditorio Laranja.");
        if (numConvidados > capacidadeAuditórioLaranja) {
            let cadeirasAdicionais = numConvidados - capacidadeAuditórioLaranja;
            console.log(`(Inclua mais ${cadeirasAdicionais} cadeiras)`);
        }
    } else if (numConvidados <= capacidadeAuditórioColorado) {
        console.log("Use o auditorio Colorado.");
    } else {
        console.log("Quantidade de convidados superior a capacidade maxima.");
    }

    let reservaAuditorio = readlineSync.question(`Gostaria de efetuar a reserva? "S/N"`);
    if (reservaAuditorio === 'S') {
        console.log(`${nomeUsuario}, reserva efetuada com sucesso.`);
    } else {
        console.log(`${nomeUsuario}, reserva nao efetuada.`);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

function programaHorasRestaurante() {
    console.log("Programa: Reserva do Restaurante");
    const diasDisponiveis = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"];

    const diaSemana = readlineSync.question("Qual o dia do seu evento?").toLowerCase();
    const horaEvento = parseInt(readlineSync.question("Qual a hora do seu evento?"));

    if ((diaSemana === "segunda" || diaSemana === "terca" || diaSemana === "quarta" || diaSemana === "quinta" || diaSemana === "sexta") && (horaEvento >= 7 && horaEvento <= 23)) {

    const nomeEmpresa = readlineSync.question("Qual o nome da empresa?");
        console.log(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${horaEvento}hs.`);
    } else if ((diaSemana === "sabado" || diaSemana === "domingo") && (horaEvento >= 7 && horaEvento <= 15)) {

    const nomeEmpresa = readlineSync.question("Qual o nome da empresa?");
        console.log(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${horaEvento}hs.`);
    } else {
        console.log("Restaurante indisponível.");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

function programaAlcoolGasolina() {
    console.log("Programa: Álcool ou Gasolina?");

    const precoAlcoolWayneOil = parseFloat(readlineSync.question("Qual o valor do álcool no posto Wayne Oil?"));
    const precoGasolinaWayneOil = parseFloat(readlineSync.question("Qual o valor da gasolina no posto Wayne Oil?"));
    const precoAlcoolStarkPetrol = parseFloat(readlineSync.question("Qual o valor do álcool no posto Stark Petrol?"));
    const precoGasolinaStarkPetrol = parseFloat(readlineSync.question("Qual o valor da gasolina no posto Stark Petrol?"));

    const volumeTanqueCarro = 42; // Capacidade do tanque em litros

    // Calcula o custo total para abastecer com álcool e gasolina em ambos os postos
    const custoAlcoolWayneOil = precoAlcoolWayneOil * volumeTanqueCarro;
    const custoGasolinaWayneOil = precoGasolinaWayneOil * volumeTanqueCarro;
    const custoAlcoolStarkPetrol = precoAlcoolStarkPetrol * volumeTanqueCarro;
    const custoGasolinaStarkPetrol = precoGasolinaStarkPetrol * volumeTanqueCarro;

    // Verifica qual combustível é mais barato em cada posto

    const maisBaratoWayneOil = custoAlcoolWayneOil < custoGasolinaWayneOil;
    const maisBaratoStarkPetrol = custoAlcoolStarkPetrol < custoGasolinaStarkPetrol;

    // Compara os preços nos dois postos
    if (custoAlcoolWayneOil < custoGasolinaWayneOil && custoAlcoolWayneOil < custoGasolinaWayneOil * 0.7) {
        console.log("É mais barato abastecer com álcool no posto Wayne Oil");
    } else {
        console.log("É mais barato abastecer com gasolina no posto Wayne Oil");
    }

    if (custoAlcoolStarkPetrol < custoGasolinaStarkPetrol && custoAlcoolStarkPetrol < custoGasolinaStarkPetrol * 0.7) {
        console.log("É mais barato abastecer com álcool no posto Stark Petrol");
    } else {
        console.log("É mais barato abastecer com gasolina no posto Stark Petrol");
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

function programaArPuro() {
    console.log("Programa: Orcamento de Manutenção de Ar Condicionado");

    let menorOrcamento = Number.MAX_VALUE;
    let empresaMenorOrcamento = '';
    let continuar;
    do {
        const nomeEmpresa = readlineSync.question("Qual o nome da empresa?");
        const valorPorAparelho = parseFloat(readlineSync.question("Qual o valor por aparelho?"));
        const qtdAparelhos = parseInt(readlineSync.question("Qual a quantidade de aparelhos?"));
        const percentualDesconto = parseFloat(readlineSync.question("Qual a porcentagem de desconto?"));
        const qtdMinimaDesconto = parseInt(readlineSync.question("Qual o numero minimo de aparelhos para conseguir o desconto?"));

        let valorTotal = valorPorAparelho*qtdAparelhos;

        if (qtdAparelhos >= qtdMinimaDesconto){
            let valorDesconto = (percentualDesconto/100)*valorTotal;
            let valorTotalDesconto = valorTotal-valorDesconto;
            console.log(`O servico de ${nomeEmpresa} custara R$${valorTotalDesconto}`);
        }else {
            console.log(`O servico de ${nomeEmpresa} custara R$${valorTotal}`);
        }

        if (valorTotal < menorOrcamento) {
            menorOrcamento = valorTotal;
            empresaMenorOrcamento = nomeEmpresa;
            console.log(`O orçamento de menor valor é o de ${empresaMenorOrcamento} por R$ ${menorOrcamento.toFixed(2)}`);
        }


        continuar = readlineSync.question("Deseja informar novos dados? (S/N)").toUpperCase();
    }while (continuar === 'S');
    
    
}    
//////////////////////////////////////////////////////////////////////////////////////////

function erro() {
    console.log("Opção inválida. Tente novamente.");
}

inicio();
