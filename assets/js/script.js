import validaCPF from "./valida-cpf.js"
import validaIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll('[required]')

camposDoFormulario.forEach(campo => {
    campo.addEventListener('blur', () => verificaCampo(campo))
    campo.addEventListener('invalid', evento => evento.preventDefault())
})

const botao = document.querySelector('[data-botao-enviar]')

function verificaCampo(campo) {
    // Verifica se o campo que perde o foco é o de 'cpf', e verifica se o campo tem 11 caracteres (minimo de caracteres de um CPF)
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCPF(campo)
        console.log(campo.validity)
    }
    // Verifica se o campo que perde o foco é o de 'cpf', e se o valor do campo não está vazio
    if (campo.name == 'aniversario' && campo.value != '') {
        validaIdade(campo)
        console.log(campo.validity)
    }
}