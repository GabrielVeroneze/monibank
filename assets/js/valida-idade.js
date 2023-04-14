export default function validaIdade(campo) {
    // Retorna um objeto "Date" representando a data de nascimento fornecida pelo usuário
    const dataNascimento = new Date(campo.value)
    // Retorna um objeto "Date" representando a data atual do sistema do usuário
    const dataAtual = new Date()
    // Retorna um objeto "Date" com base na data de nascimento fornecida pelo usuário, adicionando 18 anos à data de nascimento
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    //  verifica se a 'data de nacimento + 18 anos' é maior que à 'data atual'. Se for verdadeiro, o usuário não é maior de idade e é definido uma mensagem de erro personalizada.
    if (dataMais18 > dataAtual) {
        campo.setCustomValidity('O usuário não é maior de idade.')
    }
}