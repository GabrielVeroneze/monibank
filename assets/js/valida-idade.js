export default function validaIdade(campo) {
    const dataNascimento = new Date(campo.value)
    const dataAtual = new Date()
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    if (dataMais18 > dataAtual) {
        campo.setCustomValidity('O usuário não é maior de idade.')
    }
}