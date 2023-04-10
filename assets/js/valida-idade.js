export default function validaIdade(campo) {
    // Retorna um objeto "Date" representando a data de nascimento fornecida pelo usuário
    const dataNascimento = new Date(campo.value)
    // Retorna um objeto "Date" representando a data atual do sistema do usuário
    const dataAtual = new Date()
    // Retorna um objeto "Date" com base na data de nascimento fornecida pelo usuário, adicionando 18 anos à data de nascimento
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    // retorna um valor booleano que indica se a pessoa tem 18 anos ou mais, comparando a data atual com a data em que a pessoa completa 18 anos
    return dataAtual >= dataMais18
}